import React, { useState, useEffect } from 'react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  const targetDate = new Date('2024-11-15T00:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 60000); // Atualiza a cada minuto
    calculateTimeLeft(); // Calcula imediatamente na montagem
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contagem Regressiva para sua Viagem</h1>
      <h2>{timeLeft.days} dias, {timeLeft.hours} horas e {timeLeft.minutes} minutos restantes</h2>
    </div>
  );
};

export default App;
