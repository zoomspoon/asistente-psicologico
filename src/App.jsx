import React, { useState } from 'react';
import './styles/index.css'; // Importa tus estilos principales (donde configuraremos Tailwind)

// Importa los componentes que crearemos
import InputArea from './components/InputArea';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [userInput, setUserInput] = useState(''); // Estado para lo que el usuario escribe
  const [apiResponse, setApiResponse] = useState(''); // Estado para la respuesta de la IA
  const [isLoading, setIsLoading] = useState(false); // Estado para mostrar un indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores de la API

  // Función para manejar el envío del texto a la IA
  const handleSubmit = async () => {
    if (!userInput.trim()) {
      setError("Por favor, escribe algo para que el analista pueda ayudarte.");
      return;
    }

    setIsLoading(true);
    setError(null); // Limpiar errores previos

    try {
      // ** Aquí es donde harías la llamada a la Gemini API **
      // Por ahora, simularemos una respuesta de la IA
      console.log("Enviando a la IA:", userInput);

      // Simulación de una llamada a API
      const simulatedResponse = await new Promise(resolve => setTimeout(() => {
        resolve(`Entiendo que te sientes: "${userInput}". Recuerda que estoy aquí para apoyarte. Podrías probar la respiración profunda. ¿Quieres que te guíe?`);
      }, 1500)); // Espera 1.5 segundos para simular la carga

      setApiResponse(simulatedResponse);

    } catch (err) {
      console.error("Error al comunicarse con la IA:", err);
      setError("Lo siento, hubo un problema al procesar tu solicitud. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Tu Analista de Bienestar</h1>

        {/* Área de entrada de texto del usuario */}
        <InputArea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        {/* Mostrar mensaje de carga o error */}
        {isLoading && <p className="text-center text-gray-600 mt-4">Analizando tus pensamientos...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {/* Mostrar la respuesta de la IA */}
        <ResponseDisplay response={apiResponse} />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            **Recuerda:** Esta aplicación es una herramienta de apoyo y no sustituye la consulta con un profesional de la salud mental. Si necesitas ayuda urgente, por favor busca asistencia profesional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;