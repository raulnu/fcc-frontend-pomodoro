import PropTypes from "prop-types";

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
    <section className="timer col-4 text-center mt-3 border border-dark rounded p-3">
      <div className="row justify-content-center align-items-center">
        <h2 className="col-6">{sessionOrBreak ? "Session" : "Break"}</h2>
        <button
          type="button"
          className="change-button btn btn-primary col-6 d-flex justify-content-center align-items-center"
          onClick={handleChange}
          disabled={playing ? true : false}
        >
          <i className="fa-solid fa-repeat"></i>
        </button>
      </div>
      <span className="time-left">
        {sessionOrBreak ? sessionDisplay : breakDisplay}
      </span>
      <div className="row justify-content-center mt-2">
        <button className="btn btn-info col-5 m-1" onClick={handlePlay}>
          Play / Pause
        </button>
        <button className="btn btn-warning col-3 m-1" onClick={resetHandler}>
          Reset
        </button>
      </div>
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
};
