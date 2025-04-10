import { useEffect, useRef, useState } from "react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: "user", content: "Hey there!" },
    { role: "ai", content: "Hello! How can I assist you today?" },
    { role: "user", content: "Tell me a fun fact." },
    { role: "ai", content: "Did you know octopuses have three hearts?" }
  ]);

  const [input, setInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

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

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setSearchHistory((prev) => [...prev, input]);
    setInput("");

    setTimeout(() => {
      const fakeReply = {
        role: "ai",
        content: "This is a fake AI response 😄",
      };
      setMessages((prev) => [...prev, fakeReply]);
    }, 1000);
  };

  return (
    <div className="flex h-screen mt-24 bg-[#0F2542] text-black relative">
      {/* Sidebar (Responsive) */}
      <aside className={`absolute z-10 md:static bg-white border-r shadow-md p-4 w-64 h-full flex-col transition-transform duration-300 ease-in-out ${
        showSidebar ? "flex" : "hidden"
      } md:flex`}>
        <div className="flex justify-between  items-center mb-4">
          <h2 className="text-lg font-semibold">Search History</h2>
          <button className="md:hidden text-sm text-blue-600" onClick={() => setShowSidebar(false)}>Close</button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2">
          {searchHistory.length === 0 ? (
            <p className="text-gray-400 text-sm">No searches yet.</p>
          ) : (
            searchHistory.map((item, index) => (
              <div
                key={index}
                className="text-sm bg-gray-100 rounded px-3 py-2 break-words"
              >
                {item}
              </div>
            ))
          )}
        </div>
      </aside>

      {/* Chat area */}
      <div className="flex-1 flex flex-col p-4">
        {/* Top bar on mobile */}
        <div className="md:hidden mb-4">
          <button
            className="text-blue-600 underline text-sm"
            onClick={() => setShowSidebar(true)}
          >
            Show History
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg shadow-sm w-fit max-w-[80%] sm:max-w-md ${
                msg.role === "user"
                  ? "ml-auto bg-[#26A37E] text-[#E5E7EB]  text-white text-right"
                  : "mr-auto bg-gray-200 text-left"
              }`}
            >
              {msg.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2  mt-4">
          <input 
            type="text"
            className="flex-1  bg-white border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className="bg-[#26A37E] text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
