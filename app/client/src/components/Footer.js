import { React } from "./Icons";
// import { GitHub, Phone, Email, LinkedIn, StackOverflow, React } from "./Icons";

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
      </div>

      {/**********************
       * BOTTOM Half
       ********************* */}
      <div className="footer__container">
        {/*********************
         * Social Media Links
         *********************/}

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
