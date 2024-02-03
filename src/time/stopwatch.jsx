import { useState, useEffect } from "react";
import "./Style.css";

const Stopwatch = () => {
  const [segundos, setSegundos] = useState(10 * 1); // Defina o tempo inicial em segundos (por exemplo, 5 minutos)
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let interval;

    if (ativo && segundos > 0) {
      interval = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos - 1);
      }, 1000);
    } else if (segundos === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [ativo, segundos]);

  const iniciarPararCronometro = () => {
    setAtivo(!ativo);
  };

  const zerarCronometro = () => {
    setSegundos(60 * 7); // Reinicie o tempo para 5 minutos ao zerar
    setAtivo(false);
  };

  const formatoTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos < 10 ? "0" : ""}${minutos}:${
      segundos < 10 ? "0" : ""
    }${segundos}`;
  };

  return (
    <div className="cronometro">
      <p>{formatoTempo(segundos)}</p>
      <button className="botaoIniciarParar" onClick={iniciarPararCronometro}>
        {ativo ? "Pausar" : "Iniciar"}
      </button>
      <button className="botaoZerar" onClick={zerarCronometro}>
        Zerar
      </button>
    </div>
  );
};

export default Stopwatch;
