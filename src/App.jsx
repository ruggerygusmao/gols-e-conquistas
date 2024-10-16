import React from "react";
import { useCountdown } from "./hooks/useCountdown";
import Countdown from "./components/Countdown";
import Participants from "./components/ParticipantCard";
import TravelItinerary from "./components/TravelItinerary";
import TourSchedules from "./components/TourSchedules";
import Footer from "./components/Footer";

const App = () => {
  const targetDate = new Date("2024-11-15T00:00:00");
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className="relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-8xl w-full text-center"
        style={{
          backgroundImage:
            "url('https://imgmd.net/images/c_limit%2Cw_1600/v1/guia/1698673/rio-de-janeiro-4-c.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center p-2 w-full rounded-lg">
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              ✈️🏞️ Missão - Rio de Janeiro
            </h1>
            <Countdown timeLeft={timeLeft} />
          </div>
        </div>
      </div>

      {/* SESSÃO DOS PARTICIPANTES DA VIAGEM */}
      <Participants />
      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md shadow-md mt-2">
        <p>
          Lembrar de fazer o Check-in dia{" "}
          <span className="font-bold">13/11/24</span>.
        </p>
      </div>
      {/* SESSÃO DATAS DA VIAGEM */}
      <TravelItinerary />

      {/* SESSÃO DO ROTEIRO DA VIAGEM */}
      <TourSchedules />
      <Footer />
    </div>
  );
};

export default App;
