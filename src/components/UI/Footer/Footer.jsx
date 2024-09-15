import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import vk from "../../../images/sprite.svg#vk";
import tg from "../../../images/sprite.svg#tg";
import whatsapp from "../../../images/sprite.svg#whatsapp";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container footer">
      <Logo />
      <ul className="footer-list">
        <li>
          <Link to="/favorites">Избранное</Link>
        </li>
        <li>
          <Link to="/basket">Корзина</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
        <li>
          <Link to="/service">Условия сервиса</Link>
        </li>
        <li>Языки</li>
      </ul>

      <ul className="social-list">
        <li>
          <svg className="vk-icon">
            <use href={vk + "#vk"}></use>
          </svg>
        </li>
        <li>
          <svg className="tg-icon">
            <use href={tg + "#tg"}></use>
          </svg>
        </li>
        <li>
          <svg className="whatsapp-icon">
            <use href={whatsapp + "#whatsapp"}></use>
          </svg>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
