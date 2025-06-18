import React, { useState, useRef, useEffect } from "react";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes del chat
  const [userInput, setUserInput] = useState(""); // Estado para la entrada del usuario
  const chatBodyRef = useRef(null); // Referencia para el scroll automático

  // Preguntas predeterminadas y respuestas
  const predefinedQuestions = {
    "¿Cuáles son sus servicios?":
      "Mantenimiento y reparación industrial, automatización de procesos industriales, montaje y obras civiles.",
    "¿Cómo puedo contactarlos?":
      "Puedes contactarnos a través de nuestro formulario en la web, enviando un correo a info@empresa.com o llamando al +123 456 7890.",
    "¿Cuál es el horario de atención?":
      "Nuestro horario de atención es de lunes a viernes, de 9:00 AM a 6:00 PM.",
    "¿Ofrecen consultoría gratuita?":
      "Sí, ofrecemos una consultoría inicial gratuita para evaluar tus necesidades.",
    Gracias: "De nada. ¿Hay algo más en lo que pueda ayudarte?",
    Adiós: "Hasta luego. Que tengas un excelente día.",
  };

  // Efecto para hacer scroll al final del chat cuando se añaden nuevos mensajes
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Función para añadir mensajes al chat
  const addMessage = (sender, text) => {
    setMessages((prevMessages) => [...prevMessages, { sender, text }]);
  };

  // Función para manejar la respuesta del bot
  const handleBotResponse = (question) => {
    let botResponse =
      "Lo siento, no entiendo tu pregunta. Por favor, intenta de nuevo o selecciona una de las opciones predeterminadas.";

    const normalizedQuestion = question.trim().toLowerCase();

    // Buscar respuesta en preguntas predeterminadas
    for (const key in predefinedQuestions) {
      if (key.toLowerCase() === normalizedQuestion) {
        botResponse = predefinedQuestions[key];
        break;
      }
    }

    // Si el usuario da las gracias o se despide
    if (normalizedQuestion.includes("gracias")) {
      botResponse = "De nada. ¿Hay algo más en lo que pueda ayudarte?";
    } else if (
      normalizedQuestion.includes("adiós") ||
      normalizedQuestion.includes("chao") ||
      normalizedQuestion.includes("hasta luego")
    ) {
      botResponse = "Hasta luego. Que tengas un excelente día.";
    }

    setTimeout(() => {
      addMessage("bot", botResponse);
      // Si la respuesta no es una despedida, muestra de nuevo las preguntas predeterminadas
      if (
        !normalizedQuestion.includes("adiós") &&
        !normalizedQuestion.includes("chao") &&
        !normalizedQuestion.includes("hasta luego")
      ) {
        showPredefinedQuestions();
      }
    }, 500);
  };

  // Función para mostrar preguntas predeterminadas como botones
  const showPredefinedQuestions = () => {
    const questionsButtons = (
      <div className="predefined-questions mt-2">
        <p className="text-gray-600 mb-2">
          Puedes seleccionar una de las siguientes preguntas:
        </p>
        {Object.keys(predefinedQuestions).map((q) => (
          <button
            key={q}
            onClick={() => handlePredefinedQuestionClick(q)}
            className="block w-full text-left p-2 mb-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors duration-200"
          >
            {q}
          </button>
        ))}
      </div>
    );
    // Agregamos un mensaje vacío para que las preguntas aparezcan después de la respuesta anterior
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", content: questionsButtons },
    ]);
  };

  const handlePredefinedQuestionClick = (question) => {
    addMessage("user", question);
    handleBotResponse(question);
  };

  // Función para enviar el mensaje del usuario
  const sendMessage = () => {
    if (userInput.trim() === "") return;
    addMessage("user", userInput);
    handleBotResponse(userInput);
    setUserInput(""); // Limpiar el input
  };

  // Función para manejar el toggle del chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Si se abre el chat por primera vez, muestra el mensaje de bienvenida y las preguntas
    if (!isOpen && messages.length === 0) {
      addMessage(
        "bot",
        "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?"
      );
      showPredefinedQuestions();
    }
  };

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-blue-600 text-white font-bold p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Abrir chat de soporte"
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
      )}

      {/* Chat emergente */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-h-[500px] flex flex-col bg-white text-gray-900 rounded-xl shadow-2xl z-50 border border-gray-200 overflow-hidden transition-opacity duration-300 ease-out animate-[fade-in_0.3s_ease-out]">
          <div className="p-4 bg-blue-700 text-white font-semibold flex justify-between items-center">
            {/* Logo de la empresa (asegúrate de que la ruta sea correcta) */}
            <img
              src="C:\Users\rvill\Documents\GitHub\mi-pagina1\public\zubra-logo-retina.png" // <--- **Cambia esta ruta a la de tu logo**
              alt="Logo de la Empresa"
              className="w-8 h-8 rounded-full mr-2 bg-white p-0.5"
            />
            Soporte de [Zubra]
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 text-xl font-bold ml-auto focus:outline-none"
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>
          <div
            ref={chatBodyRef}
            className="flex-grow p-4 overflow-y-auto text-sm text-gray-700 custom-scrollbar"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {/* Renderizar contenido JSX si es un botón de preguntas */}
                  {typeof msg.content === "object" ? msg.content : msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-200 bg-gray-50 flex items-center">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              className="flex-grow border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-label="Enviar mensaje"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
