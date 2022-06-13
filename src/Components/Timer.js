import PropTypes from "prop-types";
import AlarmSelector from "./AlarmSelector";

export default function Timer(props) {
  const {
    sessionMinutes,
    setSessionMinutes,
    sessionSeconds,
    setSessionSeconds,
    breakMinutes,
    setBreakMinutes,
    breakSeconds,
    setBreakSeconds,
    playing,
    setPlaying,
    staticSessionMinutes,
    staticBreakMinutes,
    sessionOrBreak,
    setSessionOrBreak,
    alarmSelected,
    setAlarmSelected,
  } = props;
  // Displays
  const sessionDisplay = `${
    sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes
  }:${sessionSeconds < 10 ? "0" + sessionSeconds : sessionSeconds}`;

  const breakDisplay = `${
    breakMinutes < 10 ? "0" + breakMinutes : breakMinutes
  }:${breakSeconds < 10 ? "0" + breakSeconds : breakSeconds}`;

  // Button handlers
  const handlePlay = () => {
    setPlaying(!playing);
  };
  const resetHandler = () => {
    setPlaying(false);
    setSessionMinutes(staticSessionMinutes);
    setSessionSeconds(0);
    setBreakMinutes(staticBreakMinutes);
    setBreakSeconds(0);
  };
  const handleChange = () => {
    setSessionOrBreak(!sessionOrBreak);
  };
  return (
    <section
      className={`timer col-10 col-sm-8 col-lg-6 text-center mt-3 rounded p-3 ${
        sessionOrBreak ? "session-box" : "break-box"
      }`}
    >
      <div className="row justify-content-center align-items-center">
        <h2 className="timer-title col-6 mr-2">
          {sessionOrBreak ? "Session" : "Break"}
        </h2>
        <button
          type="button"
          className="change-button btn col-4 d-flex justify-content-between align-items-center"
          onClick={handleChange}
          disabled={playing ? true : false}
        >
          Switch
          <i className="fa-solid fa-repeat"></i>
        </button>
      </div>
      <div className="row">
        <span className="time-left col-12">
          {sessionOrBreak ? sessionDisplay : breakDisplay}
        </span>
        <span className="frase">
          {sessionOrBreak ? "Let's get some work done!" : "Have some rest..."}
        </span>
      </div>
      <div className="row justify-content-center mt-2">
        <button className="btn btn-info col-5 m-1" onClick={handlePlay}>
          Play / Pause
        </button>
        <button className="btn btn-warning col-5 m-1" onClick={resetHandler}>
          Reset
        </button>
      </div>
      <AlarmSelector
        playing={playing}
        alarmSelected={alarmSelected}
        setAlarmSelected={setAlarmSelected}
      />
    </section>
  );
}

Timer.propTypes = {
  sessionMinutes: PropTypes.number.isRequired,
  setSessionMinutes: PropTypes.func.isRequired,
  sessionSeconds: PropTypes.number.isRequired,
  setSessionSeconds: PropTypes.func.isRequired,
  breakMinutes: PropTypes.number.isRequired,
  setBreakMinutes: PropTypes.func.isRequired,
  breakSeconds: PropTypes.number.isRequired,
  setBreakSeconds: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  setPlaying: PropTypes.func.isRequired,
  staticSessionMinutes: PropTypes.number.isRequired,
  staticBreakMinutes: PropTypes.number.isRequired,
  sessionOrBreak: PropTypes.bool.isRequired,
  setSessionOrBreak: PropTypes.func.isRequired,
  alarmSelected: PropTypes.string.isRequired,
  setAlarmSelected: PropTypes.func.isRequired,
};
