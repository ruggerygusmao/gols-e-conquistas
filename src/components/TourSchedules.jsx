import React from "react";

const TourSchedules = () => {
  return (
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
  );
};

export default TourSchedules;
