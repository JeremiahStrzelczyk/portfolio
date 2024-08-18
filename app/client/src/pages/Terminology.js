const Terminology = () => {
  return (
    <div>
      <div className="project__content">
        <h3>What defines an English Language (EL) student?</h3>
        <p>
          An EL, according to Arizona State Legislature (2024), "means a child
          who does not speak English or whose native language is not English,
          and who is not currently able to perform ordinary classroom work in
          English." That is to say that a child who is learning English as a
          second language and who needs translation in order to understand daily
          requests is considered an EL.
        </p>
        <div className="project__double-cols">
          <div className="project__column"></div>

          <div className="project__column"></div>
        </div>
        {/* BEGINNING SECTION */}
        <h4>English as a Second Language (ESL)</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>Diverse primary languages</li>
              <li>Supports large cities</li>
              <li>Supports Pull-Out EL Models</li>
              <li>No teacher fluency requirements</li>
              <li className="no-bullets">(Colorin Colorado, 1993)</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              English as a Second Language (ESL) accommodates EL students from
              many first languages, which is more common in larger cities. The
              Pull-out model (continue reading) is most common for these
              students so they can learn English among their first language
              peers. ESL teachers do not need to be fluent in each students'
              primary language (Colorin Colorado, 1993).
            </p>
          </div>
        </div>
        {/* END SECTION */}

        {/* BEGINNING SECTION */}
        <h4>Bilingual Education</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>Requires bilingual teachers</li>
              <li>Students grouped by primary language</li>
              <li>Smaller cities</li>
              <li>Early-Exit bilingual programs</li>
              <li>Late-Exit programs</li>
              <li>Two-way programs</li>
              <li className="no-bullets">(Colorin Colorado, 1993)</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              Bilingual education groups EL students among their primary
              language speaking peers, requiring bilingual teachers in each
              primary language. Bilingual education is best served in smaller
              school districts where there is not a diverse representation of
              primary languages (Colorin Colorado, 1993).
            </p>
            <p>
              Early-exit bilingual programs are designed to quickly transition
              EL students out of EL programs. Instruction begins mostly in the
              primary language but quickly transitions into primarily English
              (Colorin Colorado, 1993).
            </p>
            <p>
              Late-exit bilingual programs continue throughout the students
              elementary education while they require "40% or more of their
              instruction in their first language (Colorin Colorado, 1993)
            </p>
            <p>
              Two-way bilingual programs are classes that are split, with half
              of the students are English-primary and half of them are ESL. In
              these programs, instruction is provided in both languages and EL
              students get exposure to English through their EL peers (Colorin
              Colorado, 1993).
            </p>
          </div>
        </div>
        {/* END SECTION */}
        {/* BEGINNING SECTION */}
        <h4>Sheltered English Instruction</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>No explicit English instruction</li>
              <li>Teachers adjust for understanding</li>
              <li>Visual aids</li>
              <li>Core Content</li>
              <li className="no-bullets">(Colorin Colorado, 1993)</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              This program does not explicitely teach English. Teachers use
              differentiated instruction practices to adjust instruction,
              explanations, and conversations to include EL participation. These
              programs rely on various aids, such as visuals and body language,
              to draw connections between English and the primary language.
              These programs have the benefit of focusing more on core content
              (Colorin Colorado, 1993).
            </p>
          </div>
        </div>
        {/* END SECTION */}
        {/* BEGINNING SECTION */}
        <h4>Structured English Immersion (SEI)</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>Split days</li>
              <li>EL only grouping</li>
              <li>EL and Non-EL grouping</li>
              <li className="no-bullets">
                (Arizona Department of Education, 2024)
              </li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              These programs allocate time for targeted, integrated, and
              mainstream instruction. Days are split so that EL students receive
              targeted instruction and grouped among other EL students, receive
              integrated instruction and are grouped with a mix of EL and non-EL
              and are taught core concepts, and receieve mainstream classroom
              exposure (Arizona Department of Education, 2024).
            </p>
          </div>
        </div>
        {/* END SECTION */}
      </div>
    </div>
  );
};

export default Terminology;
