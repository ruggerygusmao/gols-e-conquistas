import { useState, useEffect } from "react";
import Player from "./Player";
import "./style.css";

const Team = ({ name, players }) => {
  const [goals, setGoals] = useState(() => {
    const storedGoals = localStorage.getItem(`${name}_goals`);
    return storedGoals
      ? JSON.parse(storedGoals)
      : Array(players.length).fill(0);
  });

  const [victories, setVictories] = useState(() => {
    const storedVictories = localStorage.getItem(`${name}_victories`);
    return storedVictories ? parseInt(storedVictories, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`${name}_goals`, JSON.stringify(goals));
  }, [name, goals]);

  useEffect(() => {
    localStorage.setItem(`${name}_victories`, victories);
  }, [name, victories]);

  const updateGoals = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] += value;
    if(newGoals[index] >= 0){
      setGoals(newGoals);
    }

    
  };

  const handleVictory = () => {
    setVictories(victories + 1);
  };
  const handleLoss = () => {
   if(victories > 0){
    setVictories(victories - 1);
   }
  };

  return (
    <div className="container__team">
      <h2 className="title__team">
        {name}   
      </h2>
      <div className="container__button">
        <span className="title__team__vitory">Vitórias</span>
        <div className="container__button__incremet">
          <button className="button" onClick={handleLoss}>-</button>
            <span>{victories}</span>
          <button className="button" onClick={handleVictory}>+</button>
        </div>
      </div>
      
      {players.map((player, index) => (
        <Player
          key={index}
          name={player}
          goals={goals[index]}
          updateGoals={(value) => updateGoals(index, value)}
        />
      ))}
    </div>
  );
};

export default Team;
