import PropTypes from "prop-types";

export default function Controlador(props) {
  const {
    id,
    title,
    minutes,
    setMinutes,
    playing,
    staticMinutes,
    setStaticMinutes,
  } = props;

  const handleMore = () => {
    setStaticMinutes(staticMinutes + 1);
    setMinutes(minutes + 1);
  };
  const handleLess = () => {
    setStaticMinutes(staticMinutes - 1);
    setMinutes(minutes - 1);
  };

  return (
    <div
      className={`controlador col-8 col-sm-5 col-lg-4 mb-2 ${
        id === "session" ? `session-box` : "break-box"
      } rounded`}
    >
      <div className="row">
        <h2 className="controller-title text-center">{`${title} Time`}</h2>
      </div>
      <div className="row justify-content-around align-items-center">
        <button
          type="button"
          className="sumar sumar-restar btn rounded-circle col-2"
          onClick={handleMore}
          disabled={playing ? true : false}
        >
          <span>+</span>
        </button>
        <span className="numero col-6 text-center">{staticMinutes}</span>
        <button
          type="button"
          className="restar sumar-restar btn rounded-circle col-2"
          onClick={handleLess}
          disabled={playing ? true : false}
        >
          <span>-</span>
        </button>
      </div>
    </div>
  );
}

Controlador.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  minutes: PropTypes.number.isRequired,
  setMinutes: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  staticMinutes: PropTypes.number.isRequired,
  setStaticMinutes: PropTypes.func.isRequired,
};
