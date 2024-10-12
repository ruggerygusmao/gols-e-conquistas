import React, { useState, useEffect } from 'react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

  return (
    <div className="app-container">
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

      <style>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
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

        .title {
          font-size: 3rem;
          margin: 20px 0;
        }

        .countdown {
          font-size: 2rem;
        }

        .time-block {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .time-unit {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          min-width: 100px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .time-unit span {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
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
