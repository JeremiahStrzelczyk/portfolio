import { ButtonPrimary } from "../components/Buttons";
import { ArrowDown } from "../components/Icons";

const Hero = () => {
  return (
    <section tabIndex="0">
      <div className="hero">
        <h3 className="blend-text">Jeremiah Strzelczyk</h3>
        <h1>Analyzing Arizona's Language Development Approach</h1>
        <p>Yay? TEST notehuesnoth TEST again Hello!</p>
        <div>
          <ButtonPrimary
            type={"button"}
            content={"Part I: Terminology"}
            icon={<ArrowDown />}
            link={"#projects"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
