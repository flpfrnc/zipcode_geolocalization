import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import './HomeButton.css'

const HomeButton = () => {
  return (
    <div className="back__container">
      <Link to="/" className="go__back">
        <FaAngleLeft />
        <span className="btn__description">Início</span>
      </Link>
    </div>
  );
};

export default HomeButton;
