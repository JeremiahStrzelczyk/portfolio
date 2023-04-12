import {
  JavaScript,
  HTML,
  CSS,
  React,
  MongoDB,
  Express,
  Git,
  VSCode,
  Node,
} from "../components/Icons";

const Skills = () => {
  return (
    <section tabIndex="0" id="skills">
      <header>
        <h2>Skills</h2>
      </header>
      <div className="skills__icon-container">
        <JavaScript />
        <HTML />
        <CSS />
        <React />
        <MongoDB />
        <Express />
        <Node />
        <Git />
        <VSCode />
      </div>
    </section>
  );
};

export default Skills;
