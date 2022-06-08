import PropTypes from "prop-types";

export default function Timer(props) {
  const { sessionMinutes, sessionSeconds, playing, setPlaying } = props;
  const handlePlay = () => {
    setPlaying(!playing);
  };
  return (
    <section className="timer col-4 text-center mt-3 border border-dark rounded p-3">
      <h2>Session</h2>
      <span className="time-left">{`${
        sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes
      }:${sessionSeconds < 10 ? "0" + sessionSeconds : sessionSeconds}`}</span>
      <div className="row justify-content-center mt-2">
        <button className="btn btn-info col-5 m-1" onClick={handlePlay}>
          Play / Pause
        </button>
        <button className="btn btn-warning col-3 m-1">Reset</button>
      </div>
    </section>
  );
}

Timer.propTypes = {
  sessionMinutes: PropTypes.number.isRequired,
  sessionSeconds: PropTypes.number.isRequired,
  setPlaying: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};
