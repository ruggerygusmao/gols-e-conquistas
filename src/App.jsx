import Team from "./team/Team";
import "./style.css"



function App() {
  return (
    <>
      <h1 className="title">PELADA DOS AMIGOS - 13/04/24</h1>
      <Team
        name="Time 1"
        players={["RAFAEL VITOR", "KINHO", "LAUDY", "TOLOLAU", "FABRICIO "]}
      />
      <Team
        name="Time 2"
        players={["DJ", "THIAGO", "ROBSON", "EDI", "FOFINHO"]}
      />
      <Team
        name="Time 3"
        players={["RUGGRY", "DIEGUINHO", "FAEL", "MAYLSON", "ANTONY"]}
      />
      <Team
        name="Time 4"
        players={["NEGUINHO", "EDU", "PITICO", "JAMERSON", "DHON"]}
      />
    </>
  );
}

export default App;
