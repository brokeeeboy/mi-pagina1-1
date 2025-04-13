import React, { useState } from "react";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform duration-300"
        aria-label="Abrir chat IA"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 12h.008v.008H7.5V12zm3 0h.008v.008H10.5V12zm3 0h.008v.008H13.5V12zm3 0h.008v.008H16.5V12z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12a9.75 9.75 0 01-1.264 4.908c-.11.197-.17.42-.17.646v2.166a.75.75 0 01-1.28.53l-1.18-1.18a1.5 1.5 0 00-1.06-.44H12.75a9.75 9.75 0 01-4.758 0h-.326a1.5 1.5 0 00-1.06.44l-1.18 1.18a.75.75 0 01-1.28-.53v-2.166c0-.226-.06-.45-.17-.646A9.75 9.75 0 012.25 12z"
          />
        </svg>
      </button>

      {/* Chat emergente */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white text-gray-900 rounded-xl shadow-2xl z-50 border border-gray-200 overflow-hidden transition-opacity duration-300 ease-out animate-[fade-in_0.3s_ease-out]">
          <div className="p-4 bg-blue-700 text-white font-semibold flex justify-between items-center">
            Chat IA
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 text-xl font-bold"
            >
              ✕
            </button>
          </div>
          <div className="p-4 h-60 overflow-y-auto text-sm text-gray-700">
            ¡Hola! Soy tu asistente IA. ¿En qué puedo ayudarte hoy?
          </div>
          <div className="p-3 border-t">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
