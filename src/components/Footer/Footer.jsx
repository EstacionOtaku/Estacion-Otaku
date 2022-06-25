import "../../styles/scss/Footer.scss";
import logo from "../../assets/Footer/logo.svg";
import { Link } from "react-router-dom";
import { FaTiktok, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <footer className="footer color-text">
        <nav className="footer__nav">
          <figure className="footer__logo-container">
            <img src={logo} alt="" className="footer__logo" />
          </figure>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="">Configuración de la cuenta</a>
            </li>
            <li className="footer__nav-item">
              <a href="">Preguntas frecuentes</a>
            </li>
            <li className="footer__nav-item">
              <a href="">Visita nuestra tienda</a>
            </li>
          </ul>
          <h6 className="footer__nav-email">
            ¿Preguntas? Envíanos un correo a:
            <span className="footer__nav-email--bold white">informacion@estacionotaku.com</span>
          </h6>
        </nav>
        <ul className="footer__icon-list">
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="">
              <AiFillInstagram className="footer__icon" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="">
              <FaTiktok className="footer__icon" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="">
              <FaFacebookSquare className="footer__icon" />
            </a>
          </motion.li>
        </ul>
        <p className="footer__copyright ">2022 Estación Otaku. Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Footer;

{
  /* © 2022 Copyright */
}
