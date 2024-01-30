import "./style.css"
const Player = ({ name, goals, updateGoals }) => {
  return (
    <div className="container__button">
      <p>
        {name} 
      </p>
      <div className="container__button__incremet">
        <button className="button" onClick={() => updateGoals(-1)}>-</button>
          <span>{goals}</span>
        <button className="button" onClick={() => updateGoals(1)}>+</button>
      </div>
      
    </div>
  );
};

export default Player;
