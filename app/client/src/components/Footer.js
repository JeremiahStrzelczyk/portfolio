import {
  GitHub,
  Phone,
  Email,
  LinkedIn,
  StackOverflow,
  ArrowDown,
  JavaScript,
  HTML,
  CSS,
  React,
  MongoDB,
  Express,
  Git,
  VSCode,
  Node,
  Logo,
} from "./Icons";

const Footer = () => {
  return (
    <footer>
      <div className="nav__container">
        <div className="nav__links-container">
          <div className="nav__contact">
            <Phone />
            <a href="tel:5097607707" className="blend-text">
              509-760-7707
            </a>
          </div>
          <div className="nav__contact">
            <Email />
            <a className="blend-text" href="mailto:jeremiahss@hotmail.com">
              Jeremiahss@Hotmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="nav__container">
        <div className="nav__links-container">
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
        <p>
          &copy; Jeremiah Strzelczyk {new Date().getFullYear()}. All rights
          reserved
        </p>
        <a href="/">
          <Logo />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
