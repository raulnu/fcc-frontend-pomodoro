import Controladores from "./Components/Controladores";
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import sounds from "./resources/sounds";

function App() {
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [staticSessionMinutes, setStaticSessionMinutes] = useState(25);
  const [staticBreakMinutes, setStaticBreakMinutes] = useState(5);
  const [sessionOrBreak, setSessionOrBreak] = useState(true);
  const [alarmSelected, setAlarmSelected] = useState("fight-start");

  useEffect(() => {
    const timeAudio = new Audio(
      sounds
        .filter((sound) => sound.name === alarmSelected)
        .map((sound) => sound.url)
    );
    const countDown = () => {
      if (sessionOrBreak) {
        if (sessionSeconds > 0) {
          setSessionSeconds(sessionSeconds - 1);
        } else {
          setSessionMinutes(sessionMinutes - 1);
          setSessionSeconds(59);
        }
        if (sessionMinutes === 0 && sessionSeconds === 1) {
          timeAudio.play();
          setSessionOrBreak(!sessionOrBreak);
          setTimeout(() => {
            setSessionMinutes(staticSessionMinutes);
            setSessionSeconds(0);
          }, 500);
        }
      } else {
        if (breakSeconds > 0) {
          setBreakSeconds(breakSeconds - 1);
        } else {
          setBreakMinutes(breakMinutes - 1);
          setBreakSeconds(59);
        }
        if (breakMinutes === 0 && breakSeconds === 1) {
          timeAudio.play();
          setSessionOrBreak(!sessionOrBreak);
          setTimeout(() => {
            setBreakMinutes(staticBreakMinutes);
            setBreakSeconds(0);
          }, 500);
        }
      }
    };
    if (playing) {
      const intervalId = setInterval(() => {
        countDown();
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [
    playing,
    sessionSeconds,
    sessionMinutes,
    breakSeconds,
    breakMinutes,
    sessionOrBreak,
    staticSessionMinutes,
    staticBreakMinutes,
  ]);

  return (
    <div className="container">
      <Header />
      <main className="principal row justify-content-center mt-3">
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
          breakMinutes={breakMinutes}
          setBreakMinutes={setBreakMinutes}
          breakSeconds={breakSeconds}
          setBreakSeconds={setBreakSeconds}
          playing={playing}
          setPlaying={setPlaying}
          staticSessionMinutes={staticSessionMinutes}
          staticBreakMinutes={staticBreakMinutes}
          sessionOrBreak={sessionOrBreak}
          setSessionOrBreak={setSessionOrBreak}
          alarmSelected={alarmSelected}
          setAlarmSelected={setAlarmSelected}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
