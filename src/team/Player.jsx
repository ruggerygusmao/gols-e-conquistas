import "./style.css"
const Player = ({ name, goals, updateGoals }) => {
  return (
    <div className="container__button">
      <p>
        {name} - Gols: {goals}
      </p>
      <div>
        <button className="button" onClick={() => updateGoals(-1)}>-</button>
        <button className="button" onClick={() => updateGoals(1)}>+</button>
      </div>
      
    </div>
  );
};

export default Player;
