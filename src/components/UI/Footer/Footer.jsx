import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import vk from "../../../images/sprite.svg#vk";
import tg from "../../../images/sprite.svg#tg";
import whatsapp from "../../../images/sprite.svg#whatsapp";
import lang from "../../../images/sprite.svg#lang";
import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = ({ languages }) => {
  const location = useLocation();

  return (
    <footer className="container footer">
      <Logo />
      <ul className="footer-list">
        <li className="footer-list-item">
          <Link to="/favorites" className="footer-link">
            Избранное
          </Link>
        </li>
        <li className="footer-list-item">
          <Link to="/basket" className="footer-link">
            Корзина
          </Link>
        </li>
        <li className="footer-list-item">
          <Link to="/contacts" className="footer-link">
            Контакты
          </Link>
        </li>
        <li className="footer-list-item">
          <Link to="/conditions" className="footer-link">
            Условия сервиса
          </Link>
        </li>
        <li>
          <ul className="lang-list">
            <li>
              <svg className="lang-icon">
                <use href={lang + "#lang"}></use>
              </svg>
            </li>
            {languages.map((item, index) => (
              <li key={index} className="lang-item">
                <Link
                  to={location.pathname === "/" ? item.main : item.basket}
                  className="lang-link"
                >
                  {location.pathname === "/" ? item.main : item.basket}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <ul className="social-list">
        <li className="social-list-item">
          <Link to="https://vk.com/" className="social-link vk">
            <svg className="vk-icon">
              <use href={vk + "#vk"}></use>
            </svg>
          </Link>
        </li>
        <li className="social-list-item">
          <Link to="https://web.telegram.org/k/" className="social-link">
            <svg className="tg-icon">
              <use href={tg + "#tg"}></use>
            </svg>
          </Link>
        </li>
        <li className="social-list-item">
          <Link to="https://web.whatsapp.com/" className="social-link">
            <svg className="whatsapp-icon">
              <use href={whatsapp + "#whatsapp"}></use>
            </svg>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
