import Controlador from "./Controlador";
import PropTypes from "prop-types";

export default function Controladores(props) {
  const {
    sessionMinutes,
    setSessionMinutes,
    breakMinutes,
    setBreakMinutes,
    playing,
  } = props;
  return (
    <section className="controladores col-12 mt-1">
      <div className="row justify-content-center">
        <Controlador
          title={"Session"}
          id={"session"}
          minutes={sessionMinutes}
          setMinutes={setSessionMinutes}
          playing={playing}
        />
        <Controlador
          title={"Break"}
          id={"break"}
          minutes={breakMinutes}
          setMinutes={setBreakMinutes}
          playing={playing}
        />
      </div>
    </section>
  );
}

Controladores.propTypes = {
  sessionMinutes: PropTypes.number.isRequired,
  setSessionMinutes: PropTypes.func.isRequired,
  breakMinutes: PropTypes.number.isRequired,
  setBreakMinutes: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};
