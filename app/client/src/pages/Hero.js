import { ButtonPrimary } from "../components/Buttons";
import { ArrowDown } from "../components/Icons";

const Hero = () => {
  return (
    <section tabindex="0">
      <div className="hero">
        <h3 className="blend-text">Hey, I'm Jeremiah</h3>
        <h1>Full Stack Web Developer</h1>
        <p>
          I have experience in web development and a passion for creating
          innovative solutions. With a focus on user experience and a commitment
          to delivering high-quality results, I am dedicated to developing
          efficient and user-friendly applications.
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
