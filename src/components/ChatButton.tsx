"use client";

import { useState, useRef, useEffect } from "react";

// Define the message type
interface Message {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! How can I help you with your healing journey today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = input;
    setInput("");
    setIsLoading(true);

    const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (n8nWebhookUrl) {
      try {
        const response = await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: messageToSend,
            session_id: "some-unique-session-id", // You should generate and manage a unique session ID
          }),
        });

        if (response.ok) {
          const botResponseData = await response.json();
          const botMessage: Message = {
            text:
              botResponseData.reply || "Sorry, I didn't get a valid response.",
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        } else {
          throw new Error("Failed to send message to n8n");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        const errorMessage: Message = {
          text: "Sorry, I am having trouble connecting. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } else {
      console.warn(
        "N8N_WEBHOOK_URL is not set. Using a canned response for testing."
      );
      // For local testing without n8n
      setTimeout(() => {
        const botMessage: Message = {
          text: "This is a canned response because the n8n webhook is not configured.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* CHAT WINDOW */}
      <div
        className={`fixed bottom-24 right-4 sm:bottom-24 sm:right-8 w-[calc(100vw-2rem)] max-w-sm h-[60vh] max-h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center shadow-md">
          <h3 className="font-bold text-lg">Divine Healing Therapy</h3>
          <button
            onClick={toggleChat}
            aria-label="Close chat"
            className="hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 rounded-2xl rounded-bl-none p-2">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
              disabled={isLoading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* CHAT BUTTON */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110 z-40" // z-40 so it is below chat window
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          // Close Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Chat Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default ChatButton; 