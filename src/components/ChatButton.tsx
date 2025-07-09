"use client";

import { useState } from 'react';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // In the future, this will open a chat window.
  // For now, it just toggles a state.
  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Placeholder for chat integration logic
    console.log("Chat toggled");
  };

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110 z-50"
      aria-label="Open chat"
    >
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
    </button>
  );
};

export default ChatButton; 