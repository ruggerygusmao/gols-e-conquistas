import Team from "./team/Team";
import "./style.css"



function App() {
  return (
    <>
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
    </>
  );
}

export default App;
