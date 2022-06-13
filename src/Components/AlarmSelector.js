import PropTypes from "prop-types";
import sounds from "../resources/sounds";

export default function AlarmSelector({
  playing,
  alarmSelected,
  setAlarmSelected,
}) {
  const formerSound = new Audio(
    sounds
      .filter((sound) => sound.name === alarmSelected)
      .map((sound) => sound.url)
  );

  const tryHandler = () => {
    formerSound.play();
  };

  return (
    <div className="col-12 mt-5">
      <div className="row justify-content-center">
        <label htmlFor="alarm-selector col-12">Select your alarm sound:</label>
        <div className="col-12 col-sm-7 m-2">
          <select
            id="alarm-selector"
            className="alarm-selector form-select"
            disabled={playing ? true : false}
            onChange={(e) => setAlarmSelected(e.target.value)}
            defaultValue="fight-start"
          >
            <option value="error-beep">Error Beep ❌</option>
            <option value="bell">Bell 🔔</option>
            <option value="busy-sign">Busy sign 📞</option>
            <option value="ding-dong">Ding dong 🛎</option>
            <option value="fight-start">Fight start 🥊</option>
            <option value="register">Register 💲</option>
          </select>
        </div>
        <button
          type="button"
          className="btn col-3 col-sm-2 m-2 change-button"
          disabled={playing ? true : false}
          onClick={tryHandler}
        >
          Try
        </button>
      </div>
    </div>
  );
}

AlarmSelector.propTypes = {
  playing: PropTypes.bool.isRequired,
  alarmSelected: PropTypes.string.isRequired,
  setAlarmSelected: PropTypes.func.isRequired,
};
