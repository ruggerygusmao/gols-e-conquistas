import React from "react";

const TravelItinerary = () => {
  return (
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
          <span className="text-gray-800 dark:text-gray-100">12:35 - 15/11</span>
        </li>
        <li className="p-4 bg-yellow-100 dark:bg-yellow-700 rounded-lg shadow-md">
          <span className="font-bold text-yellow-700 dark:text-yellow-200">
            ✈️ Hora do Voo (Volta):{" "}
          </span>
          <span className="text-gray-800 dark:text-gray-100">21:40 - 17/11</span>
        </li>
        <li className="p-4 bg-purple-100 dark:bg-purple-700 rounded-lg shadow-md">
          <span className="font-bold text-purple-700 dark:text-purple-200">
            🏨 Hospedagem:{" "}
          </span>
          <span className="text-gray-800 dark:text-gray-100">Royalty Rio Hotel</span>
        </li>
      </ul>
    </div>
  );
};

export default TravelItinerary;
