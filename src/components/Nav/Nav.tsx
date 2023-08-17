import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-ul">
        <Link to={"/profiles"} className="nav-ul__link">
          Profiles
        </Link>
        <Link to={"/"} className="nav-ul__link">
          Home
        </Link>
        <Link to={"/ticket-tracker"} className="nav-ul__link">
          Tickets
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
