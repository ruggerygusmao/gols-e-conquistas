import Team from "./team/Team";
import "./style.css"



function App() {
  return (
    <>
      <h1 className="title">PELADA DOS AMIGOS - 03/02/24</h1>
      <Team
        name="Time 1"
        players={["RUGGERY", "DIEGUINHO", "FABRICIO", "MAYKY", "ISRAEL"]}
      />
      <Team
        name="Time 2"
        players={["KINHO", "RAFAEL", "GUGA", "GABRIEL", "MAYLSON"]}
      />
      <Team
        name="Time 3"
        players={["NEGUINHO", "EDU", "VAGNER", "ANTONY", "GAUCHO"]}
      />
      <Team
        name="Time 4"
        players={["JUVENALDO", "FAEL", "PITICO", "VICTOR", "DHON"]}
      />
    </>
  );
}

export default App;
