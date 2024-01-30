import Team from "./team/Team";
import "./style.css"


function App() {
  return (
    <>
      <h1 className="title">Gols e Vitórias🏆⚽</h1>
      <Team
        name="Time 1"
        players={["Djeimerson", "Juvenaldo", "Messinho", "Robinho", "Maylson"]}
      />
      <Team
        name="Time 2"
        players={["Edvanio", "Claudemir", "Guga", "Vertinho", "Gaúcho"]}
      />
      <Team
        name="Time 3"
        players={["Ruggery", "Rafael", "Zacarias", "Vagner", "Anthony"]}
      />
      <Team
        name="Time 4"
        players={["Maurício", "Jamerson Edu", "Fabrício", "Biscoito", "Dhon"]}
      />
    </>
  );
}

export default App;
