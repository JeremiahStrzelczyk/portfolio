import { GitHub, LinkedIn, StackOverflow } from "./Icons";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__links-container">
          <a href="/">
            <Logo />
          </a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" smoothscroll="true">
            Contact
          </a>
        </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
