import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-name">Dishen Fernando</p>
        <p className="degree">BSc (Hons) in Software Engineering</p>

        <div className="social-icons">
          <a
            href="https://github.com/DishenFernando"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dishen-fernando-30ab60293"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/dishen__2003?igsh=czRqNnhpYWU0Zmh3&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/16MgTJD37B/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dishen Fernando. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
