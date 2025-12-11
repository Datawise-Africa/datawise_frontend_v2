import useGptApi from '@/hooks/use-gpt-api';
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/tools.GPT';
import { generateSEOTags } from '@/utils/seo';
import { href } from 'react-router';
import { AiOutlineSend } from 'react-icons/ai';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Datawise GPT - General AI Assistant',
      description:
        'Datawise GPT is your AI companion for exploring news and journalism in Kenya between 2021 and 2024. Ask questions and get insights from verified local news sources.',
      url: href('/tools/GPT'),
      keywords:
        'AI assistant, Kenyan news, journalism insights, local news sources, African tech solutions, data systems, applied research',
    }),
  ];
}

type ChatMessage = {
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
};

export default function ToolsGPT() {
  const gptApi = useGptApi();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'ai',
      content:
        'Hi there I can help you explore news and journalism in Kenya between 2021 and 2024. What would you like to know?',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null!);
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setSearchHistory((prev) => [...prev, input]);
    setInput('');

    try {
      const { data } = await gptApi.post('/gpt/local-journ/', {
        query: userMessage.content,
      });

      const aiMessage: ChatMessage = {
        role: 'ai',
        content: data.response || 'No response from server.',
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage: ChatMessage = {
        role: 'ai',
        content: 'Sorry, there was an error contacting the AI service.',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const deleteHistoryItem = (index: number) => {
    const updated = searchHistory.filter((_, i) => i !== index);
    setSearchHistory(updated);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const newChat = () => {
    setMessages([
      {
        role: 'ai',
        content:
          'Hi there! I can help you explore news and journalism in Kenya between 2021 and 2024. What would you like to know?',
        timestamp: new Date().toISOString(),
      },
    ]);
    setInput('');
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        // marginTop: `${navbarHeight}px`,
        height: `calc(100vh - ${navbarHeight}px)`,
      }}
    >
      {/* Sidebar */}
      <div
        className={`w-64 mt-12 bg-white text-black ${sidebarVisible ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <img
              src={'/assets/collapseicon.jpg'}
              alt="Toggle Sidebar"
              className="cursor-pointer w-6 h-6"
              onClick={toggleSidebar}
            />
            <h3>Recent Searches</h3>
            <img
              src={'/assets/chatbubble.png'}
              alt="New Chat"
              className="cursor-pointer w-6 h-6"
              onClick={newChat}
            />
          </div>
          <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
            {searchHistory.map((query, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 px-3 py-1 rounded-md text-sm"
              >
                <span className="truncate max-w-[80%]">{query}</span>
                <button
                  onClick={() => deleteHistoryItem(index)}
                  className="text-red-500 font-bold ml-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <div className="bg-white mt-12 shadow px-4 py-6">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1e293b]">
              JOURN-GPT{' '}
            </h1>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-snug">
              Ask about Kenyan news and journalism from 2021 to 2024. This
              assistant is trained on verified local news sources.
            </p>
          </div>
        </div>

        {/* Chat area with sticky input */}
        <div className="flex-1 flex flex-col relative bg-gray-50 overflow-hidden">
          {/* Scrollable chat area */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto px-4 pt-4 pb-24 "
          >
            <div className="w-full max-w-3xl mx-auto space-y-2">
              {messages.map((msg, index) => {
                const isUser = msg.role === 'user';
                return (
                  <div key={index} className="flex flex-col">
                    <span
                      className={`text-xs text-gray-500 mb-0.5 ${
                        isUser ? 'text-right mr-2' : 'text-left ml-2'
                      }`}
                    >
                      {isUser ? 'You' : 'AI'} • {formatTime(msg.timestamp)}
                    </span>
                    <div
                      className={`px-4 py-2 rounded-2xl shadow-md max-w-[75%] sm:max-w-md md:max-w-lg wrap-break-word leading-snug ${
                        isUser
                          ? 'ml-auto bg-[#26A37E] text-white rounded-br-none'
                          : 'mr-auto bg-gray-200 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                );
              })}
              {loading && (
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-0.5 text-left ml-2">
                    AI • typing...
                  </span>
                  <div className="px-4 py-2 rounded-2xl shadow-md max-w-[50%] text-[#26A37E] text-left rounded-bl-none">
                    <div className="flex space-x-1 items-center justify-start">
                      <div className="w-2 h-2 rounded-full bg-[#26A37E] animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-[#26A37E] animate-bounce delay-150"></div>
                      <div className="w-2 h-2 rounded-full bg-[#26A37E] animate-bounce delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Fixed Input Field */}
          <div className="sticky bottom-0 w-full bg-white px-4 py-2 border-t border-gray-300 z-10">
            <div className="max-w-3xl mx-auto flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-2 shadow-sm focs-within:ring-2 focus-within:ring-blue-400">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none px-2 text-sm md:text-base"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendMessage();
                }}
              />
              <button
                onClick={sendMessage}
                className="text-white bg-[#26A37E] hover:bg-[#1e8d6c] p-2 rounded-full transition"
              >
                <AiOutlineSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
