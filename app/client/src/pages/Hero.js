import ButtonPrimary from "../components/Button";
import { ArrowDown } from "../components/Icons";

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <h3 className="blend-text">Hey, I'm Jeremiah</h3>
        <h1>Full Stack Web Developer</h1>
        <div>Github LinkedIn StackOverflow</div>
        <p>
          I have experience in web development and a passion for creating
          innovative solutions. With a focus on user experience and a commitment
          to delivering high-quality results, I am dedicated to developing
          efficient and user-friendly applications.
        </p>
        <ButtonPrimary
          type={"button"}
          content={"Check out my work"}
          icon={<ArrowDown />}
        />
      </div>
    </section>
  );
};

export default Hero;
