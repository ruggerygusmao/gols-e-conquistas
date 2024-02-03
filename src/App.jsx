import Team from "./team/Team";
import "./style.css"



function App() {
  return (
    <>
      <h1 className="title">PELADA DOS AMIGOS - 03/02/24</h1>
      <Team
        name="Time 1"
        players={["KINHO", "DIEGUINHO", "FAEL", "MAYLSON", "MAYCON"]}
      />
      <Team
        name="Time 2"
        players={["RUGGERY", "EDU", "GUGA", "ANTHONY", "DHON"]}
      />
      <Team
        name="Time 3"
        players={["KAUAN", "PITICO", "MESSINHO", "VERTINHO", "ISRAEL"]}
      />
      <Team
        name="Time 4"
        players={["NEGUINHO", "JUVENALDO", "RAFAEL", "SAMUEL", "GALO"]}
      />
    </>
  );
}

export default App;
