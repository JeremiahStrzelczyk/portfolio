/**
 * Renders the 'Projects' section.
 *
 * Hardcoded the two relevant projects to start.
 * Data is retrieved from `ProjectData.js`
 */

import Project from "./Project";

import speedscore from "../static/images/speedscore_1186x848.png";
import featherdusters from "../static/images/featherdusters_1209x851.png";

import speedscore_600x400_72 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_600x400_72.jpg";
import speedscore_600x400_144 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_600x400_144.jpg";
import speedscore_600x400_250 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_600x400_250.jpg";
import speedscore_600x400_350 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_600x400_350.jpg";
import speedscore_900x600_72 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_900x600_72.jpg";
import speedscore_900x600_144 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_900x600_144.jpg";
import speedscore_900x600_250 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_900x600_250.jpg";
import speedscore_900x600_350 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_900x600_350.jpg";
import speedscore_1200x800_72 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_1200x800_72.jpg";
import speedscore_1200x800_144 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_1200x800_144.jpg";
import speedscore_1200x800_250 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_1200x800_250.jpg";
import speedscore_1200x800_350 from "../static/images/speedscore_1186x848_resized/speedscore_1186x848_1200x800_350.jpg";

import featherdusters_600x400_72 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_600x400_72.jpg";
import featherdusters_600x400_144 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_600x400_144.jpg";
import featherdusters_600x400_250 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_600x400_250.jpg";
import featherdusters_600x400_350 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_600x400_350.jpg";
import featherdusters_900x600_72 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_900x600_72.jpg";
import featherdusters_900x600_144 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_900x600_144.jpg";
import featherdusters_900x600_250 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_900x600_250.jpg";
import featherdusters_900x600_350 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_900x600_350.jpg";
import featherdusters_1200x800_72 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_1200x800_72.jpg";
import featherdusters_1200x800_144 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_1200x800_144.jpg";
import featherdusters_1200x800_250 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_1200x800_250.jpg";
import featherdusters_1200x800_350 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209x851_1200x800_350.jpg";

import { SpeedScore, Featherdusters } from "./ProjectData";

const Projects = () => {
  const image_speedscore = (
    <img
      className="project__img"
      src={speedscore}
      width={SpeedScore.image.width}
      height={SpeedScore.image.height}
      alt={SpeedScore.image.alt}
      srcSet={`
      ${speedscore_600x400_72} 600w,
      ${speedscore_600x400_144} 600w,
      ${speedscore_600x400_250} 600w,
      ${speedscore_600x400_350} 600w,
      ${speedscore_900x600_72} 900w,
      ${speedscore_900x600_144} 900w,
      ${speedscore_900x600_250} 900w,
      ${speedscore_900x600_350} 900w,
      ${speedscore_1200x800_72} 1200w,
      ${speedscore_1200x800_144} 1200w,
      ${speedscore_1200x800_250} 1200w,
      ${speedscore_1200x800_350} 1200w
      `}
      sizes="(max-width: 600px) 100vw, (max-width: 900px) 33.33vw, (max-width: 1200px) 25vw, 300px"
    />
  );

  const image_featherdusters = (
    <img
      className="project__img"
      src={featherdusters}
      width={Featherdusters.image.width}
      height={Featherdusters.image.height}
      alt={Featherdusters.image.alt}
      srcSet={`
      ${featherdusters_600x400_72} 600w,
      ${featherdusters_600x400_144} 600w,
      ${featherdusters_600x400_250} 600w,
      ${featherdusters_600x400_350} 600w,
      ${featherdusters_900x600_72} 900w,
      ${featherdusters_900x600_144} 900w,
      ${featherdusters_900x600_250} 900w,
      ${featherdusters_900x600_350} 900w,
      ${featherdusters_1200x800_72} 1200w,
      ${featherdusters_1200x800_144} 1200w,
      ${featherdusters_1200x800_250} 1200w,
      ${featherdusters_1200x800_350} 1200w
      `}
      sizes="(max-width: 600px) 100vw, (max-width: 900px) 33.33vw, (max-width: 1200px) 25vw, 300px"
    />
  );

  return (
    <section tabIndex="0" id="projects">
      <header>
        <h2>Projects</h2>
      </header>

      {/**************
       * SPEEDSCORE
       **************/}
      <div style={SpeedScore.styles} className="project__container">
        {/* <Project data={SpeedScore} image={speedscore} /> */}
        <Project data={SpeedScore} image={image_speedscore} />
      </div>

      {/****************
       * FEATHERDUSTERS
       ****************/}
      <div
        style={Featherdusters.styles}
        className="project__container featherdusters"
      >
        <Project data={Featherdusters} image={image_featherdusters} />
      </div>
    </section>
  );
};

export default Projects;
