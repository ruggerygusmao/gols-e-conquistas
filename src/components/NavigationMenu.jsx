import React, { useState } from "react";
import logo from "../assets/rio.png";

const NavigationMenu = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <span>
            <img src={logo} alt="Logo" className="h-10" />
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
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
        {/* Menu Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Menu para mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <button
            onClick={() => {
              scrollToSection("home");
              setIsOpen(false);
            }}
            className="block hover:text-gray-400 mb-2"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("participants");
              setIsOpen(false);
            }}
            className="block hover:text-gray-400 mb-2"
          >
            Participantes
          </button>
          <button
            onClick={() => {
              scrollToSection("itinerary");
              setIsOpen(false);
            }}
            className="block hover:text-gray-400 mb-2"
          >
            Itinerário
          </button>
          <button
            onClick={() => {
              scrollToSection("schedules");
              setIsOpen(false);
            }}
            className="block hover:text-gray-400 mb-2"
          >
            Roteiro
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
