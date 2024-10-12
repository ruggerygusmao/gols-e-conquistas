import Team from "./team/Team";
import "./style.css"
import React, { useState, useEffect } from 'react';


function App() {
  const [countdown, setCountdown] = useState(countdownTimer());

  const countdownTimer = () => {
    const difference = new Date('2024-11-15T00:00:00') - new Date();
    let timerDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    let timerHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let timerMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let timerSeconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { timerDays, timerHours, timerMinutes, timerSeconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownTimer());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>{/*
      <h1 className="title">PELADA DOS AMIGOS - 13/04/24</h1>
      <Team
        name="Time 1"
        players={["RUGGERY", "FOFINHO", "DIEGUINHO", "SAMUEL", "DIEGO"]}
      />
      <Team
        name="Time 2"
        players={["MESSINHO", "EDU", "LUCAS", "RAFAEL V", "ANTONY"]}
      />
      <Team
        name="Time 3"
        players={["DJ", "ROBSON", "DHON", "FAEL", "CASTELO"]}
      />
      <Team
        name="Time 4"
        players={["NEGUINHO", "MAYLSON", "PITICO", "BIRA", "GUGA"]}
      />
      */}
       <div className="app">
      <h1>Faltam para a viagem:</h1>
      <div>
        <span>{countdown.timerDays}</span>
        <span>dias</span>
      </div>
      <div>
        <span>{countdown.timerHours}</span>
        <span>horas</span>
      </div>
      <div>
        <span>{countdown.timerMinutes}</span>
        <span>minutos</span>
      </div>
      <div>
        <span>{countdown.timerSeconds}</span>
        <span>segundos</span>
      </div>
    </div>
      
    </>
  );
}

export default App;
