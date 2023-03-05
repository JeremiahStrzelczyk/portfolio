import Project from "./Project";

import speedscore from "../static/images/speedscore_1186x848.png";
import featherdusters from "../static/images/featherdusters_1209x851.png";

import { SpeedScore, Featherdusters } from "./ProjectData";

const Projects = () => {
  return (
    <section id="projects">
      <header>
        <h2>Projects</h2>
      </header>
      <div style={SpeedScore.styles} className="project__container">
        <Project data={SpeedScore} image={speedscore} />
      </div>
      <div
        style={Featherdusters.styles}
        className="project__container featherdusters"
      >
        <Project data={Featherdusters} image={featherdusters} />
      </div>
    </section>
  );
};

export default Projects;
