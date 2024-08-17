/**
 * Renders one Project by retrieving data from ProjectData.js
 * to populate the pertinent information including:
 *  - Title, Bullets, Summary
 *  - List of Languages/Technologies used in the project
 *  - Button linking to relevant information about the project
 */

import { ButtonSecondary } from "../components/Buttons";

const Project = ({ data, image }) => {
  return (
    <div>
      {/* Encompasses all Project information except the buttons linking
        to repos */}
      <div className="project__content">
        <div className="project__double-cols">
          {/********************
           * IMAGE/GIF
           *********************/}
          <div className="project__column">
            {/* <img
              className="project__img"
              src={image}
              width={data.image.width}
              height={data.image.height}
              alt={data.image.alt}
            /> */}
            {image}
          </div>

          {/****************************
           * Title, summary, bullet_contents
           ****************************/}
          <div className="project__column">
            <h3>"Terminology"</h3>
            <p>
              "Full-stack web application for speed golfers to record stats,
              manage friends, and access a feed mode"
            </p>
            <ul>
              <li>
                "Implemented Google authentication for user login and used
                accessibility standards to ensure compliance and improve app
                usability"
              </li>
              <li>
                "Designed and developed a badge system that depends on golfer's
                stats to incentivize engagement and improve user retention"
              </li>
              <li>"data_point3"</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="bold">"data_summary"</p>
          <div className="project__stackWrapper">
            {data.stack.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      {/***********************************
       * Buttons navigating to respective
       * locations
       ************************************/}
      <div className="project__linksWrapper">
        <ButtonSecondary
          type={"button"}
          content={"GitHub Repo"}
          link={data.links.github}
          ariaLabel={"GitHub Repo"}
        />
        <ButtonSecondary
          type={"button"}
          content={"Visit Website"}
          ariaLabel={"Visit Website"}
          link={data.links.live}
        />
        <ButtonSecondary
          type={"button"}
          content={"My Contributions"}
          ariaLabel={"My Contributions"}
          link={data.links.contributions}
        />
      </div>
    </div>
  );
};

export default Project;
