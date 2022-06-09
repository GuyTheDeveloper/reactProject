import "../main.css";
import linkedin from "../img/linkedin.svg";
import basket from "../img/basket.svg";
import instagram from "../img/instagram.svg";
import m from "../img/m.svg";
import email from "../img/email.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <h2 className="footer-heading">Let’s Connect</h2>
        <p className="footer-text">
          Get in touch for opportunities or just to say hi! 👋
        </p>
        <div className="footer-nav">
          <a href="https://www.linkedin.com">
            <img src={linkedin} alt="linkedin" />
          </a>

          <a href="https://www.youtube.com">
            <img src={basket} alt="linkedin" />
          </a>

          <a href="https://www.instagram.com">
            <img src={instagram} alt="instagram" />
          </a>

          <a href="https://www.youtube.com">
            <img src={m} alt="M" />
          </a>

          <a href="https://mail.ru">
            <img src={email} alt="pochta" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
