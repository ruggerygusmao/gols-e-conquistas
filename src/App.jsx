import React, { useState, useEffect } from "react";

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isDarkMode, setIsDarkMode] = useState(true); // Set initial mode to dark

  const targetDate = new Date("2024-11-15T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-4xl w-full text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Missão - Rio de janeiro ✈️🏞️
        </h1>

        <div className="flex flex-col gap-1 text-2xl">
          <div className="w-full bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md mb-6">
            <span className="text-xl font-bold">{timeLeft.days}</span> dias
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="w-1/3 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <span className="text-xl font-bold">{timeLeft.hours} H</span>
            </div>
            <div className="w-1/3 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <span className="text-xl font-bold">{timeLeft.minutes} m</span>
            </div>
            <div className="w-1/3 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <span className="text-xl font-bold">{timeLeft.seconds} s</span>
            </div>
          </div>
        </div>
      </div>

      {/* SESSÃO DOS PARTICIPANTES DA VIAGEM */}
      <div className="p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-6">Participantes da Viagem</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://github.com/ruggerygusmao.png"
              alt="Pessoa 1"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md"
            />
            <p className="mt-4 text-lg font-semibold">Ruggery</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/323819736_522114254107349_6344785853539912047_n.jpg?ccb=11-4&oh=01_Q5AaIFHfUitXj-KKsBYGrtJ0VTfjDew3Fl4Qksk8_WjPaWu7&oe=671D1815&_nc_sid=5e03e0&_nc_cat=102"
              alt="Pessoa 2"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md"
            />
            <p className="mt-4 text-lg font-semibold">Rayane</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/462790092_3767622536821991_1741995600321484957_n.jpg?ccb=11-4&oh=01_Q5AaIBG0vWfeldOfmo7INaUkRuQZDGmqUKuBxCOZKH-ZuHyz&oe=671CE7B1&_nc_sid=5e03e0&_nc_cat=102"
              alt="Pessoa 3"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md"
            />
            <p className="mt-4 text-lg font-semibold">Vinicius</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center">
            <img
              src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/462790092_3767622536821991_1741995600321484957_n.jpg?ccb=11-4&oh=01_Q5AaIBG0vWfeldOfmo7INaUkRuQZDGmqUKuBxCOZKH-ZuHyz&oe=671CE7B1&_nc_sid=5e03e0&_nc_cat=102"
              alt="Pessoa 4"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md"
            />
            <p className="mt-4 text-lg font-semibold">Isabely</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md shadow-md mt-2">
        <p>
          Lembrar de fazer o Check-in dia{" "}
          <span className="font-bold">13/11/24</span>.
        </p>
      </div>
      {/* SESSÃO DO ROTEIRO DA VIAGEM */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-4xl w-full text-center">
        <ul className="flex flex-col gap-4 text-left">
          <li className="p-4 bg-blue-100 dark:bg-blue-700 rounded-lg shadow-md">
            <span className="font-bold text-blue-700 dark:text-blue-200">
              ☀️ Data da viagem:{" "}
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              15/11/24 à 17/11/24
            </span>
          </li>
          <li className="p-4 bg-green-100 dark:bg-green-700 rounded-lg shadow-md">
            <span className="font-bold text-green-700 dark:text-green-200">
              ✈️ Hora do Voo (Ida):{" "}
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              12:35 - 15/11
            </span>
          </li>
          <li className="p-4 bg-yellow-100 dark:bg-yellow-700 rounded-lg shadow-md">
            <span className="font-bold text-yellow-700 dark:text-yellow-200">
              ✈️ Hora do Voo (Volta):{" "}
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              21:40 - 17/11
            </span>
          </li>
          <li className="p-4 bg-purple-100 dark:bg-purple-700 rounded-lg shadow-md">
            <span className="font-bold text-purple-700 dark:text-purple-200">
              🏨 Hospedagem:{" "}
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              Royalty Rio Hotel
            </span>
          </li>
        </ul>
      </div>

      {/* SESSÃO DO ROTEIRO DA VIAGEM */}

      <div className="p-8 bg-gradient-to-r dark:bg-gray-800 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
          Roteiros da Viagem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dia 01 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-4">
              Dia 01 - 15/11/24
            </h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-blue-600 dark:bg-blue-300 rounded-full"></span>
                Chegada no hotel às{" "}
                <span className="font-bold ml-2">16:20</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-blue-600 dark:bg-blue-300 rounded-full"></span>
                Forte de Copacabana às{" "}
                <span className="font-bold ml-2">17:00</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-blue-600 dark:bg-blue-300 rounded-full"></span>
                Jantar à noite - 19:30
              </li>
            </ul>
          </div>

          {/* Dia 02 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-4">
              Dia 02 - 16/11/24
            </h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-green-600 dark:bg-green-300 rounded-full"></span>
                Cristo Redentor às <span className="font-bold ml-2">7:30</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-green-600 dark:bg-green-300 rounded-full"></span>
                Pão de Açúcar às <span className="font-bold ml-2">10:00</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-green-600 dark:bg-green-300 rounded-full"></span>
                Terra Brasilis (Almoço){" "}
                <span className="font-bold ml-2">12:30</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-green-600 dark:bg-green-300 rounded-full"></span>
                Parque da Laranjeiras às{" "}
                <span className="font-bold ml-2">16:00</span>
              </li>
            </ul>
          </div>

          {/* Dia 03 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-4">
              Dia 03 - 17/11/24
            </h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-red-600 dark:bg-red-300 rounded-full"></span>
                Tour na Rocinha - 8:00
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-red-600 dark:bg-red-300 rounded-full"></span>
                Escadaria Selarón - 10:00
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-red-600 dark:bg-red-300 rounded-full"></span>
                Museu do Amanhã 11:30
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
