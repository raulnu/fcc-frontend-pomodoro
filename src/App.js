import Controladores from "./Components/Controladores";
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";

function App() {
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [playing, setPlaying] = useState(false);
  const [staticSessionMinutes, setStaticSessionMinutes] = useState(25);
  const [staticBreakMinutes, setStaticBreakMinutes] = useState(5);
  const [sessionOrBreak, setSessionOrBreak] = useState(true);

  useEffect(() => {
    const timeAudio = new Audio(
      "http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/BELLFILL.WAV"
    );
    const countDown = () => {
      if (sessionSeconds > 0) {
        setSessionSeconds(sessionSeconds - 1);
      } else {
        setSessionMinutes(sessionMinutes - 1);
        setSessionSeconds(59);
      }
      if (sessionMinutes === 0 && sessionSeconds === 1) {
        timeAudio.play();
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
          staticSessionMinutes={staticSessionMinutes}
          setStaticSessionMinutes={setStaticSessionMinutes}
          staticBreakMinutes={staticBreakMinutes}
          setStaticBreakMinutes={setStaticBreakMinutes}
        />
        <Timer
          sessionMinutes={sessionMinutes}
          setSessionMinutes={setSessionMinutes}
          sessionSeconds={sessionSeconds}
          setSessionSeconds={setSessionSeconds}
          playing={playing}
          setPlaying={setPlaying}
          staticSessionMinutes={staticSessionMinutes}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
