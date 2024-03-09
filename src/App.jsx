import Team from "./team/Team";
import "./style.css"



function App() {
  return (
    <>
      <h1 className="title">PELADA DOS AMIGOS - 24/02/24</h1>
      <Team
        name="Time 1"
        players={["DJ", "EDU", "PITICO", "SAMUEL", "GALO"]}
      />
      <Team
        name="Time 2"
        players={["RUGGERY", "KINHO", "RAFAEL", "MAYLSON", "GAUCHO"]}
      />
      <Team
        name="Time 3"
        players={["KAWAN", "THIAGO", "DIEGUINHO", "ROMARIO", "ANTONY"]}
      />
      <Team
        name="Time 4"
        players={["NEGUINHO", "JUVENALDO", "GUGA", "MAYKI", "DHON"]}
      />
    </>
  );
}

export default App;
