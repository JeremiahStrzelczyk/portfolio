/**
 * Renders one FourPrinciples by retrieving data from FourPrinciplesData.js
 * to populate the pertinent information including:
 *  - Title, Bullets, Summary
 *  - List of Languages/Technologies used in the project
 *  - Button linking to relevant information about the project
 */

import { ButtonSecondary } from "../components/Buttons";

const FourPrinciples = ({ data, image }) => {
  return (
    <div>
      {/* Encompasses all FourPrinciples information except the buttons linking
        to repos */}
      <div className="project__content">
        <h3>{data.title}</h3>
        <p>{data.overview}</p>
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
        <h4>Principle 1: Asset-Based Behaviors & Expectations</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>Students have existing knowledge and resources</li>
              <li>Family involvement</li>
              <li>Lessons match students' age and grade</li>
              <li>Materials match students' language levels</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              This principle is about recognizing the value that each ELL brings
              with them, such as their cultural background and existing
              knowledge. Teachers use these insights to help them learn. For
              instance, teachers can incorporate cultural celebrations into the
              classroom and offer story choices in students' primary languages.{" "}
            </p>
            <p>
              Teachers are not just teaching content; they are using what
              students already know to make learning more relevant to them.{" "}
            </p>
            <p>
              Families play a key role in helping their student succeed in
              English acquisition.
            </p>
          </div>
        </div>
        {/* END SECTION */}
        {/* BEGIN SECTION */}
        <h4>
          Principle 2: Integrated Instruction in Disciplinary Language & Content
        </h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>English Language Learning built into core subjects</li>
              <li>ELLs learn alongside non-EL peers</li>
              <li>Lessons include content and academic language</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              This principle is about teaching language and subject content
              together, making sure that EL students are learning alongside
              their classmates. English language learning is not separated from
              core content; rather teachers integrate it into core subjects like
              math, reading, writing, and science. ELLs get needed exposure to
              the academic language necessary for them to learn the subjects EL
              students learn alongside their non-EL peers. Teachers adjust their
              teaching strategies and implementation to meet the needs of EL
              while ensuring everyone can succeed. These practices ensure that
              EL students are not left behind in content areas as they learn
              English
            </p>
          </div>
        </div>
        {/* END SECTION */}
        {/* BEGIN SECTION */}
        <h4>Principle 3: Targeted & Explicit Language Instruction</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>ELLs get direct English instruction</li>
              <li>EL instruction separated from core content</li>
              <li>Students grouped by proficiency</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              This principle is about teaching English directly to EL students
              to improve their ability to use English in mainstream classrooms.
              It focuses entirely on language development as ELL get devoted
              time working on English. Instruction is tailored to the needs of
              EL students, focusing on grammar, vocabulary, and academic
              language. Grouping students by language level allows for more
              targeted teaching.
            </p>
          </div>
        </div>
        {/* END SECTION */}

        {/* BEGIN SECTION */}
        <h4>Principle 4: Assessment, Monitoring & Feedback</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>Tests and assessments to measure progress</li>
              <li>Finely-Tuned Instruction</li>
              <li>Teacher development</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              This principle is about tracking and understanding student
              progression and making necessary adjustments where needed. This is
              accomplished through formal testing, informal assessments, or
              other diagnostic tools. For instance, ELLs can take tests on their
              English grammar to measure proficiency. Alternatively, teachers
              can gauge progress through conversations or class participation.
              The data collected allow teachers to adjust their strategies to
              best support each students' needs With continuous progress
              monitoring, teachers are best prepared to ensure EL students are
              progressing in English acquisition and advancing in core content
              areas.
            </p>
          </div>
        </div>
        {/* END SECTION */}
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

export default FourPrinciples;
