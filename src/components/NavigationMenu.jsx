import React from "react";
import logo from "../assets/rio.png";

const NavigationMenu = ({ scrollToSection }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <span>
            <img src={logo} alt="Logo" className="h-10" />{" "}
            {/* Ajuste o tamanho da imagem conforme necessário */}
          </span>
        </div>
        <div className="flex space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-gray-400"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("participants")}
            className="hover:text-gray-400"
          >
            Participantes
          </button>
          <button
            onClick={() => scrollToSection("itinerary")}
            className="hover:text-gray-400"
          >
            Itinerário
          </button>
          <button
            onClick={() => scrollToSection("schedules")}
            className="hover:text-gray-400"
          >
            Roteiro
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
