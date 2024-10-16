// components/Countdown.js
import React from "react";

const Countdown = ({ timeLeft }) => {
    
  return (
    <div className="flex flex-col gap-1 text-2xl">
      <div className="w-full bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 opacity-90">
        <span className="text-xl font-bold">{timeLeft.days}</span> dias
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="w-1/3 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md opacity-90">
          <span className="text-xl font-bold">{timeLeft.hours} H</span>
        </div>
        <div className="w-1/3 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md opacity-90">
          <span className="text-xl font-bold">{timeLeft.minutes} m</span>
        </div>
        <div className="w-1/3 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md opacity-90">
          <span className="text-xl font-bold">{timeLeft.seconds} s</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
