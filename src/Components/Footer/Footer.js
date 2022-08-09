import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-container">
        <div className="contact bd-grid">
          <img src="logo.png" alt="Website logo" className="contact__logo" />

          <div className="contact__info">
            <p className="contact__address">Kushtia, Khulna, Bangladesh</p>
            <p className="contact__address">
              tusar.cse78@gmail.com, (+880)1741-262945, WhatsApp [Tusar]
            </p>
          </div>

          <div className="contact__social">
            <a
              href="https://facebook.com/tus78ar"
              target="blank"
              className="contact__link"
            >
              <FaFacebookF className="contact__social-icon" />
            </a>
            <a
              href="https://twitter.com/tusar78"
              target="blank"
              className="contact__link"
            >
              <FaTwitter className="contact__social-icon" />
            </a>
            <a
              href="https://github.com/tusar78"
              target="blank"
              className="contact__link"
            >
              <FaGithub className="contact__social-icon" />
            </a>
            <a
              href="https://www.youtube.com/innovation-teach"
              target="blank"
              className="contact__link"
            >
              <FaYoutube className="contact__social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <div className="copyright bd-grid">
          <p className="copyright__text">&copy; All Rights Reserved</p>
          <p className="copyright__text">
            <a href="https://facebook.com/tus78ar" target="blank" className="copyright__text-link">
              Tusar
            </a>
          </p>
          <p className="copyright__text">
            <a href="https://facebook.com/innoteach78" target="blank" className="copyright__text-link">
              InnovationTeach
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
