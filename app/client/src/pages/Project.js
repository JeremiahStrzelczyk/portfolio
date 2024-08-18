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
        <h3>{data.title}</h3>
        <p>{data.overview && data.overview}</p>
        <div className="project__double-cols">
          {/********************
           * IMAGE/GIF
           *********************/}
          <div className="project__column">
            <ul>
              {data.bullets &&
                data.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
            </ul>
          </div>

          {/****************************
           * Title, summary, bullet_contents
           ****************************/}
          <div className="project__column">
            {/* Some slides might not contain bullet_contents, so we must check
             * that it's empty first */}
            {/* <ul>
              {data.bullet_contents &&
                data.bullet_contents.map((bullet_content, index) => (
                  <li key={index}>{bullet_content}</li>
                ))}
            </ul> */}
            <p>{data.presenter_notes}</p>
          </div>
        </div>
        {/* <div>
          <p className="bold">{data.summary}</p>
          <div className="project__stackWrapper">
            {data.stack.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div> */}
      </div>

      {/***********************************
       * Buttons navigating to respective
       * locations
       ************************************/}
      {/* <div className="project__linksWrapper">
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
      </div> */}
    </div>
  );
};

export default Project;
