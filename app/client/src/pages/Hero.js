import { ButtonPrimary } from "../components/Buttons";
import { ArrowDown } from "../components/Icons";

const Hero = () => {
  return (
    <section tabIndex="0">
      <div className="hero">
        <h3 className="blend-text">Hey, I'm Jeremiah</h3>
        <h1>Educator | Web App Developer | Computer Scientist</h1>
        <p>
          I am an educator with a background in computer science, web
          development, and classroom instruction. I enjoy helping students build
          problem-solving skills through programming, hands-on projects, and
          real-world technology applications.
        </p>
        <div>
          <ButtonPrimary
            type={"button"}
            content={"Check out my work"}
            icon={<ArrowDown />}
            link={"#projects"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
