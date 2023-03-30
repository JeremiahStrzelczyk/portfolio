import { GitHub, Phone, Email, LinkedIn, StackOverflow, React } from "./Icons";

import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      {/**********************
       * TOP Half
       ********************* */}
      <div className="footer__container">
        {/************
         * Phone
         * Email
         ********** */}
        <div className="footer__links-container">
          <a href="tel:5097607707">
            <Phone />
            509-760-7707
          </a>
          <a href="mailto:jeremiahss@hotmail.com">
            <Email />
            Jeremiahss@Hotmail.com
          </a>
        </div>
      </div>

      {/**********************
       * BOTTOM Half
       ********************* */}
      <div className="footer__container">
        {/*********************
         * Social Media Links
         *********************/}
        <div className="footer__links-container">
          <a
            href="https://github.com/JeremiahStrzelczyk"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/jeremiah-strzelczyk/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://stackoverflow.com/users/12248602/jeremiah-s"
            target="_blank"
            rel="noreferrer"
          >
            <StackOverflow />
          </a>
        </div>

        {/************
         * Copyright
         ********** */}
        <p>
          &copy; Jeremiah Strzelczyk {new Date().getFullYear()}. All rights
          reserved
        </p>

        {/************
         * LOGO
         ********** */}
        <a href="/" aria-label="Home page">
          <Logo id={"footer"} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
