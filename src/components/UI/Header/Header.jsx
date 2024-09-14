import { Link } from "react-router-dom";
import favorites from "../../../images/sprite.svg#favorites";
import basket from "../../../images/sprite.svg#basket";
import "./Header.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <nav className="container">
      <ul className="header-list">
        <li>
          <Logo />
        </li>

        <div className="header-link-group">
          <li>
            <Link to="/favorites">
              <svg className="favorites-icon">
                <use href={favorites + "#favorites"}></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link to="/basket">
              <svg className="basket-icon">
                <use href={basket + "#basket"}></use>
              </svg>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
