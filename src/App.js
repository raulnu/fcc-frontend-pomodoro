import Controladores from "./Components/Controladores";
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import { useState, useEffect, useCallback } from "react";
import Footer from "./Components/Footer";

function App() {
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const countDown = () => {
      if (sessionSeconds > 0) {
        setSessionSeconds(sessionSeconds - 1);
      } else {
        setSessionMinutes(sessionMinutes - 1);
        setSessionSeconds(59);
      }
      if (sessionMinutes === 0 && sessionSeconds === 1) {
        setPlaying(false);
      }
    };
    if (playing) {
      const intervalId = setInterval(() => {
        countDown();
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [
    playing,
    sessionSeconds,
    setSessionSeconds,
    setSessionMinutes,
    sessionMinutes,
  ]);

  return (
    <div className="container">
      <Header />
      <main className="principal row justify-content-center">
        <Controladores
          sessionMinutes={sessionMinutes}
          setSessionMinutes={setSessionMinutes}
          breakMinutes={breakMinutes}
          setBreakMinutes={setBreakMinutes}
          playing={playing}
        />
        <Timer
          sessionMinutes={sessionMinutes}
          sessionSeconds={sessionSeconds}
          playing={playing}
          setPlaying={setPlaying}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
