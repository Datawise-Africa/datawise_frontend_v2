import { useEffect, useRef, useState } from "react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: "user", content: "Hey there!" },
    { role: "ai", content: "Hello! How can I assist you today?" },
    { role: "user", content: "Tell me a fun fact." },
    { role: "ai", content: "Did you know octopuses have three hearts?" }
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      const fakeReply = { role: "ai", content: "This is a fake AI response 😄" };
      setMessages((prev) => [...prev, fakeReply]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen p-4">
      {/* Message Display Area */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg w-fit max-w-lg ${
              msg.role === "user"
                ? "bg-blue-200 self-end text-right"
                : "bg-gray-200 self-start text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex mt-4">
        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-2 px-4 bg-blue-500 text-white rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
