import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import vk from "../../../images/sprite.svg#vk";
import tg from "../../../images/sprite.svg#tg";
import whatsapp from "../../../images/sprite.svg#whatsapp";
import lang from "../../../images/sprite.svg#lang";
import "./Footer.css";
import { useState } from "react";

const Footer = () => {
  const [languages, setLanguages] = useState([
    { main: "Рус", basket: "Рус" },
    { main: "Eng", basket: "Eng" },
    { main: "", basket: "Каз" },
  ]);

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
          <Link to="/service" className="footer-link">
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
              <li key={index}>
                <Link to={item.main} className="lang-link">
                  {item.main}
                </Link>
              </li>
            ))}
          </ul>
        </li>
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
