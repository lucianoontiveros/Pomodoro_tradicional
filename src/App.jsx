import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("productivo"); // 'productivo' o 'descanso'
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutos en segundos
  const [totalPomos, setTotalPomos] = useState(0);
  const [pomosCompleted, setPomosCompleted] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalPomosInput, setTotalPomosInput] = useState(0);

  // Reproducir sonido
  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  // Cambiar entre modo 'productivo' y 'descanso'
  const switchMode = () => {
    if (mode === "productivo") {
      setMode("descanso");
      setTimeLeft(5 * 60); // 5 minutos en segundos
      playSound("/Sonido_break.mp3"); // Ruta del archivo de sonido para el descanso
    } else {
      setMode("productivo");
      setTimeLeft(25 * 60); // 25 minutos en segundos
      setPomosCompleted(pomosCompleted + 1);
      playSound("/Sonido_productivo.mp3"); // Ruta del archivo de sonido para el tiempo productivo
    }
  };

  // Iniciar o detener el temporizador
  const startStopTimer = () => {
    playSound("/Sonido_productivo.mp3");
    setIsRunning(!isRunning);
  };

  // Resetear la aplicación
  const resetTimer = () => {
    setIsRunning(false);
    setMode("productivo");
    setTimeLeft(25 * 60);
    setTotalPomos(0);
    setPomosCompleted(0);
    setTotalPomosInput(0);
  };

  // Actualizar el temporizador cada segundo
  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      switchMode();
    }

    if (pomosCompleted === totalPomos && totalPomos !== 0) {
      setIsRunning(false);
    }

    // Limpiar el intervalo cuando el componente se desmonta o el temporizador se detiene
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, pomosCompleted, totalPomos]);

  // Manejar el cambio en el número total de pomodoros
  const handleTotalPomosChange = (event) => {
    const value = parseInt(event.target.value);
    setTotalPomosInput(value);
    setTotalPomos(value);
  };

  return (
    <div className="pomodoro-app">
      <div className="timer-container">
        <div className="timer">
          <div className="time-left">
            {`${Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, "0")}:${(timeLeft % 60)
              .toString()
              .padStart(2, "0")}`}
          </div>
          <div className="timer-label">
            {mode === "productivo" ? "PRODUCTIVO" : "DESCANSO"}
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="pomo-stats">
          <h3 className="pomo_stats">{pomosCompleted} </h3>
          <h3 className="pomo_bar">/</h3>
          <h2>
            {" "}
            <input
              type="number"
              value={totalPomosInput}
              onChange={handleTotalPomosChange}
              className="pomos_num no-style"
            />
          </h2>
        </div>
        <span>
          {pomosCompleted === totalPomos && totalPomos !== 0
            ? "Fin de jornada"
            : "POMODOROS"}
        </span>
        <div className="controls">
          <button
            className="astronaut-button"
            onClick={startStopTimer}
          >
            {isRunning ? "S" : "P"}
          </button>
          <button
            className="astronaut-button"
            onClick={resetTimer}
          >
            R
          </button>
          <button
            className="astronaut-button"
            onClick={switchMode}
          >
            sw
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
