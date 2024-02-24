import Team from "./team/Team";
import "./style.css"



function App() {
  return (
    <>
      <h1 className="title">PELADA DOS AMIGOS - 24/02/24</h1>
      <Team
        name="Time 1"
        players={["KAWAN", "KINHO", "PITICO", "SAMUEL", "MAYLSON"]}
      />
      <Team
        name="Time 2"
        players={["RUGGERY", "EDU", "GUGA", "PEDRINHO", "DHON"]}
      />
      <Team
        name="Time 3"
        players={["DJ", "JUVENALDO", "VAGNER", "ARTUR SILVA", "GALO"]}
      />
      <Team
        name="Time 4"
        players={["NEGUINHO", "RAFAEL", "FAEL", "RUAN", "ANTHONY"]}
      />
    </>
  );
}

export default App;
