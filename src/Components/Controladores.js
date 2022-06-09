import Controlador from "./Controlador";
import PropTypes from "prop-types";

export default function Controladores(props) {
  const {
    sessionMinutes,
    setSessionMinutes,
    breakMinutes,
    setBreakMinutes,
    playing,
    staticSessionMinutes,
    setStaticSessionMinutes,
    staticBreakMinutes,
    setStaticBreakMinutes,
  } = props;
  return (
    <section className="controladores col-md-12">
      <div className="row justify-content-center">
        <Controlador
          title={"Session"}
          id={"session"}
          minutes={sessionMinutes}
          setMinutes={setSessionMinutes}
          playing={playing}
          staticMinutes={staticSessionMinutes}
          setStaticMinutes={setStaticSessionMinutes}
        />
        <Controlador
          title={"Break"}
          id={"break"}
          minutes={breakMinutes}
          setMinutes={setBreakMinutes}
          playing={playing}
          staticMinutes={staticBreakMinutes}
          setStaticMinutes={setStaticBreakMinutes}
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
  staticSessionMinutes: PropTypes.number.isRequired,
  setStaticSessionMinutes: PropTypes.func.isRequired,
  staticBreakMinutes: PropTypes.number.isRequired,
  setStaticBreakMinutes: PropTypes.func.isRequired,
};
