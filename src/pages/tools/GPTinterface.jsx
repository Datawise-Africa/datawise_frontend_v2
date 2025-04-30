import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import apiService from "../../services/apiService";

import {
  AiOutlineSend,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMessage,
} from "react-icons/ai";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Hi there! I can help you explore news and journalism in Kenya between 2021 and 2024. What would you like to know?",
    },
  ]);

  const [input, setInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    setLoading(true);
    if (!input.trim()) return;
  
    const userMessage = {
      role: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };

    // Add user message to state
    setMessages((prev) => [...prev, userMessage]);
    setSearchHistory((prev) => [...prev, input]);
    setInput("");

    // Auto-scroll after user message
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    }, 100);

    try {
      const response = await apiService.post("/llm/llama3/", {
        query: userMessage.content,
      });

      const aiMessage = {
        role: "ai",
        content: response.response || "No response from server.",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
      // Scroll to bottom after response
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
        }
      }, 100);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        role: "ai",
        content: "Sorry, there was an error contacting the AI service.",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  const deleteHistoryItem = (index) => {
    setSearchHistory((prev) => prev.filter((_, i) => i !== index));
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const newChat = () => {
    setMessages([
      {
        role: "ai",
        content:
          "Hi there! I can help you explore news and journalism in Kenya between 2021 and 2024. What would you like to know?",
        timestamp: new Date().toISOString(),
      },
    ]);
    setInput("");
  };

  return (
    <div
      className="flex flex-col mt-32 text-sm md:text-base"
      style={{ height: "calc(100vh - 8rem)" }}
    >
      {/* Header */}
      <div className="bg-white px-4 py-2 border-b shadow-sm flex items-center justify-between">
        <div className="flex-1 text-center">
          <h1 className="text-lg md:text-xl font-bold text-[#1e293b]">
            Datawise LLM
          </h1>
          <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto leading-snug">
            Ask questions about Kenyan news and local journalism from 2021 to
            2024. This assistant is trained on verified articles from trusted
            Kenyan sources.
          </p>
        </div>
        <button onClick={newChat} className="text-blue-500 text-xl ml-4">
          <AiOutlineMessage />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden bg-gray-50">
        {/* Sidebar */}
        {sidebarVisible && (
          <aside className="bg-white w-56 sm:w-64 h-full flex-shrink-0 flex flex-col border-r hidden lg:flex">
            <div className="px-3 py-2 border-b font-semibold flex justify-between items-center">
              <span>Search History</span>
              <button
                className="text-xs text-blue-500"
                onClick={() => setSearchHistory([])}
              >
                Clear All
              </button>
              <button onClick={closeSidebar} className="text-red-500 text-xl">
                <AiOutlineClose />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
              {searchHistory.length === 0 ? (
                <p className="text-gray-400 text-sm">No searches yet.</p>
              ) : (
                searchHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-sm bg-gray-100 rounded px-2 py-1 break-words"
                  >
                    {item}
                    <button
                      onClick={() => deleteHistoryItem(index)}
                      className="text-red-500 text-xs"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                ))
              )}
            </div>
          </aside>
        )}

        {/* Chat Section */}
        <div className="flex flex-col flex-1 relative">
          {/* Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto px-4 pt-4 pb-2"
          >
            <div className="w-full max-w-3xl mx-auto space-y-2">
              {messages.map((msg, index) => {
                const isUser = msg.role === "user";

                return (
                  <div key={index} className="flex flex-col -mt-1">
                    {msg.timestamp && (
                      <span
                        className={`text-xs text-gray-500 mb-[2px] ${
                          isUser ? "text-right mr-2" : "text-left ml-2"
                        }`}
                      >
                        {isUser ? "You" : "AI"} • {formatTime(msg.timestamp)}
                      </span>
                    )}
                    <div
                      className={`px-4 py-2 rounded-2xl shadow-md  max-w-[75%] sm:max-w-md md:max-w-lg break-words leading-snug ${
                        isUser
                          ? "ml-auto bg-[#26A37E] text-white rounded-br-none"
                          : "mr-auto bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                );
              })}
              {loading && (
                <div className="flex flex-col -mt-1">
                  <span className="text-xs text-gray-500 mb-[2px] text-left ml-2">
                    AI • typing...
                  </span>
                  <div className="px-4 py-2 rounded-2xl shadow-md max-w-[50%] text-[#26A37E] text-left rounded-bl-none">
                    <div className="flex space-x-1 items-center justify-start">
                      <div className="w-2 h-2 rounded-full bg-[#26A37E] animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-[#26A37E] animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#26A37E] animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <div className="w-full bg-white px-4 py-2 flex-shrink-0">
            <div className="max-w-3xl mx-auto flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none px-2 text-sm md:text-base"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
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
};

export default ChatInterface;
