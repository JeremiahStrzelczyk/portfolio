/**
 * Renders the 'Projects' section.
 *
 * Hardcoded the two relevant projects to start.
 * Data is retrieved from `ProjectData.js`
 */

import Project from "./Project";

import FourPrinciples from "./FourPrinciples";
import SEIModel from "./SEIModels";

import ss_jp_v1 from "../static/images/speedscore_1186x848_resized/speedscore_500.jpg";
import ss_jp_v2 from "../static/images/speedscore_1186x848_resized/speedscore_900.jpg";
import ss_jp_v3 from "../static/images/speedscore_1186x848_resized/speedscore_1186.jpg";

import ss_wp_v1 from "../static/images/speedscore_1186x848_resized/speedscore_500.webp";
import ss_wp_v2 from "../static/images/speedscore_1186x848_resized/speedscore_900.webp";
import ss_wp_v3 from "../static/images/speedscore_1186x848_resized/speedscore_1186.webp";

import fd_jp_v1 from "../static/images/featherdusters_1209x851_resized/featherdusters_500.jpg";
import fd_jp_v2 from "../static/images/featherdusters_1209x851_resized/featherdusters_900.jpg";
import fd_jp_v3 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209.jpg";

import fd_wp_v1 from "../static/images/featherdusters_1209x851_resized/featherdusters_500.webp";
import fd_wp_v2 from "../static/images/featherdusters_1209x851_resized/featherdusters_900.webp";
import fd_wp_v3 from "../static/images/featherdusters_1209x851_resized/featherdusters_1209.webp";

import {
  SpeedScore,
  P2_Overview,
  P2_StudentAgency,
  P2_FourPrinciples,
  P2_SEIModels,
  P3,
} from "./ProjectData";
import AssessmentAndPlacement from "./AssessmentAndPlacement";

const Projects = () => {
  const image_speedscore = (
    <img
      className="project__img"
      src={ss_jp_v1}
      width={SpeedScore.image.width}
      height={SpeedScore.image.height}
      alt={SpeedScore.image.alt}
      srcSet={`
      ${ss_wp_v1} 500w, ${ss_jp_v1} 500w,
      ${ss_wp_v2} 900w, ${ss_jp_v2} 900w,
      ${ss_wp_v3} 1186w, ${ss_jp_v3} 1186w,

      `}
    />
  );

  const image_featherdusters = (
    <img
      className="project__img"
      src={fd_jp_v1}
      width={P2_Overview.image.width}
      height={P2_Overview.image.height}
      alt={P2_Overview.image.alt}
      srcSet={`
      ${fd_wp_v1} 500w, ${fd_jp_v1} 500w,
      ${fd_wp_v2} 900w, ${fd_jp_v2} 900w,
      ${fd_wp_v3} 1186w, ${fd_jp_v3} 1186w,
      `}
    />
  );

  return (
    <section tabIndex="0" id="projects">
      <header>
        <h2>Key Aspects of Arizona's Approach</h2>
      </header>

      {/**************
       * SPEEDSCORE
       **************/}
      <div style={SpeedScore.styles} className="project__container">
        {/* <Project data={SpeedScore} image={speedscore} /> */}
        <Project data={SpeedScore} image={image_speedscore} />
      </div>

      <header>
        <h2>Four Principles of Arizona's Language Development Approach</h2>
      </header>
      {/****************
       * Part 2 - Overview
       ****************/}
      <div
        style={P2_Overview.styles}
        className="project__container featherdusters"
      >
        <Project data={P2_Overview} image={image_featherdusters} />
        <Project data={P2_StudentAgency} image={image_featherdusters} />
        <FourPrinciples data={P2_FourPrinciples} image={image_featherdusters} />
        <SEIModel />
      </div>

      <header>
        <h2>Assessment and Placement</h2>
      </header>
      {/****************
       * Part 3 - Assessment and Placement
       ****************/}
      <div style={P3.styles} className="project__container featherdusters">
        <AssessmentAndPlacement />
      </div>
    </section>
  );
};

export default Projects;
