import { useEffect, useRef, useState } from "react";
import { AiOutlineSend, AiOutlineClose, AiOutlineDelete, AiOutlineMessage } from "react-icons/ai";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: "user", content: "Hey there!" },
    { role: "ai", content: "Hello! How can I assist you today?" },
    { role: "user", content: "Tell me a fun fact." },
    { role: "ai", content: "Did you know octopuses have three hearts?" },
  ]);

  const [input, setInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([
    "What is the weather today?",
    "How many hearts does an octopus have?",
    "Tell me a joke!",
  ]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
  
    const userMessage = {
      role: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setSearchHistory((prev) => [...prev, input]);
    setInput("");
  
    // Scroll to bottom right after sending
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100); // small delay allows message to render
  
    setTimeout(() => {
      const fakeReply = {
        role: "ai",
        content: "Thanks! Stay tuned as we improve your AI assistant!",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, fakeReply]);
    }, 1000);
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
      { role: "user", content: "Hey there!" },
      { role: "ai", content: "Hello! How can I assist you today?" },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col mt-32 text-sm md:text-base" style={{ height: "calc(100vh - 8rem)" }}>
      {/* Header */}
      <div className="bg-white px-4 py-2 border-b shadow-sm flex items-center justify-between">
        <div className="flex-1 text-center">
          <h1 className="text-lg md:text-xl font-bold text-[#1e293b]">AI Chat Assistant</h1>
          <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto leading-snug">
            We’re working on ensuring a smarter, more customer-friendly AI assistant. Ask anything or get help below!
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
                const alignment = isUser
                  ? "ml-auto bg-[#26A37E] text-white text-right"
                  : "mr-auto bg-gray-200 text-left text-gray-800";

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
                      className={`px-3 py-2 rounded-md w-fit break-words max-w-[85%] sm:max-w-md md:max-w-lg leading-snug ${alignment}`}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Input */}
          <div className="w-full bg-white px-4 py-2 border-t flex-shrink-0">
            <div className="max-w-3xl mx-auto flex gap-2">
              <input
                type="text"
                className="flex-1 bg-white border rounded px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Type a message..."
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
                className="bg-[#26A37E] text-white px-4 py-2 rounded text-sm md:text-base hover:bg-white hover:text-black border transition"
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
