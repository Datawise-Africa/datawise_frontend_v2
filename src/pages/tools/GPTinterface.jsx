import { useEffect, useRef, useState } from "react";
import { AiOutlineSend, AiOutlineClose, AiOutlineDelete, AiOutlineMessage } from "react-icons/ai";
// import { motion } from "framer-motion";

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
  const [sidebarVisible, setSidebarVisible] = useState(true); // To control sidebar visibility

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
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

    setTimeout(() => {
      const fakeReply = {
        role: "ai",
        content:
          "Thank you for your message. We're currently working on ensuring a more intelligent and customer-friendly experience. Stay tuned as we continue to improve your AI assistant!",
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
    setSidebarVisible(false); // Hide the sidebar
  };

  const newChat = () => {
    // Reset chat to the default state
    setMessages([
      { role: "user", content: "Hey there!" },
      { role: "ai", content: "Hello! How can I assist you today?" },
    ]);
    setInput(""); // Reset the input field
  };

  return (
    <div className="flex flex-col h-screen mt-24 text-sm md:text-base">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b shadow-sm sticky top-0 z-20 flex items-center justify-between">
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold text-[#1e293b]">AI Chat Assistant</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-snug">
            We’re working on ensuring a smarter, more customer-friendly AI assistant. Ask anything or get help below!
          </p>
        </div>
        {/* New Chat Button */}
        <button
          onClick={newChat}
          className="text-blue-500 text-xl"
        >
          <AiOutlineMessage />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden bg-gray-50">
        {/* Sidebar (Always Visible) */}
        {sidebarVisible && (
          <motion.aside
            className="bg-white w-64 z-30 h-full flex-shrink-0 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="px-3 py-2 border-b font-semibold flex justify-between items-center">
              <span>Search History</span>
              <button
                className="text-xs text-blue-500"
                onClick={() => setSearchHistory([])}
              >
                Clear All
              </button>
              {/* Close Sidebar Button */}
              <button
                onClick={closeSidebar}
                className="text-red-500 text-xl"
              >
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
          </motion.aside>
        )}

        {/* Chat Section */}
        <div className="flex flex-col border-l-4 border-[#26A37E] flex-1 overflow-hidden">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto px-4 py-2 flex justify-center">
            <div className="w-full max-w-3xl space-y-1">
              {messages.map((msg, index) => {
                const isUser = msg.role === "user";
                const alignment = isUser
                  ? "ml-auto bg-[#26A37E] text-white text-right"
                  : "mr-auto bg-gray-200 text-left text-gray-800";

                return (
                  <motion.div
                    key={index}
                    className="flex flex-col -mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
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
                  </motion.div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Section */}
          <div className="px-4 py-2 border-t bg-white">
            <div className="max-w-3xl mx-auto flex gap-2">
              <input
                type="text"
                className="flex-1 bg-white border rounded px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
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
