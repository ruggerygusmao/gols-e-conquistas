import React, { useState, useEffect } from 'react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true); // Set initial mode to dark

  const targetDate = new Date('2024-11-15T00:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="title">Contagem Regressiva para sua Viagem</h1>
      <h2 className="countdown">
        <div className="time-block">
          <div className="time-unit">
            <span>{timeLeft.days}</span> dias
          </div>
          <div className="time-unit">
            <span>{timeLeft.hours}</span> horas
          </div>
          <div className="time-unit">
            <span>{timeLeft.minutes}</span> minutos
          </div>
          <div className="time-unit">
            <span>{timeLeft.seconds}</span> segundos
          </div>
        </div>
      </h2>

      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <style>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        .app-container {
          max-width: 800px;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .dark-mode {
          background: #121212;
          color: white;
        }

        .title {
          font-size: 3rem;
          margin: 20px 0;
        }

        .countdown {
          font-size: 2rem;
        }

        .time-block {
          display: flex;
          flex-direction: column,
          justify-content: center;
          gap: 15px;
        }

        .time-unit {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          min-width: 100px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .dark-mode .time-unit {
          background: rgba(0, 0, 0, 0.1);
        }

        .time-unit span {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .dark-mode-toggle {
          padding: 10px 20px;
          border: none;
          background: #333;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }

        @media (max-width: 600px) {
          .time-unit {
            min-width: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
