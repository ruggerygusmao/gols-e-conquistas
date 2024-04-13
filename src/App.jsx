import Team from "./team/Team";
import "./style.css"



function App() {
  return (
    <>
      <h1 className="title">PELADA DOS AMIGOS - 13/04/24</h1>
      <Team
        name="Time 1"
        players={["RAFAEL", "EDU", "ZACARIAS", "TOLOLAU", "ERICO"]}
      />
      <Team
        name="Time 2"
        players={["DJ", "DIEGUINHO", "PEDRINHO", "DHON", "MAYLSON"]}
      />
      <Team
        name="Time 3"
        players={["JUVENALDO", "GUGA", "LAUDY", "FABRICIO", "ANTONY"]}
      />
      <Team
        name="Time 4"
        players={["RUGGERY", "VINICIUS", "PITICO", "ROBSON", "SAMUEL"]}
      />
    </>
  );
}

export default App;
