const SEIModel = () => {
  return (
    <div>
      <div className="project__content">
        <h3>SEI Models</h3>
        <p>
          Each model has a portion of the day designated to targeted
          instruction, which is grouped by EL, integrated instruction, which is
          ELs and non-ELs, and mainstream classrooms.
        </p>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>Pull-Out</li>
              <li>Two Hour</li>
              <li>Newcomer</li>
              <li>50-50 Dual Language Immersion</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              The Pull-Out model allocates 60 minutes per day for targeted
              instruction and 60 minutes per day for integrated instruction. The
              remainder of the day is mainstream classroom time.
            </p>
            <p>
              The Two Hour model allocates 120 minutes for targeted instruction.
              It allocates the time needed to complete a content-area lesson
              during integrated instruction.
            </p>
            <p>
              The Newcomer model allocates 120 minutes for targeted instruction
              and 120 minutes for integrated instruction. Integrated instruction
              differs for the Newcomer model in that it is ELs only.
            </p>
            <p>
              The 50-50 Dual Language Immersion model teaches half of the day in
              English and the other half of the day in partner language
              instruction. For half of the day, 30 minutes is allocated for
              targeted instruction, 90 minutes is allocated for integrated
              instruction, and the rest of that half is mainstream classroom.
            </p>
          </div>
        </div>
        {/* BEGINNING SECTION */}
        <h4>Connection to the Four Principles</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>P1 Implied Principle one</li>
              <li>Integrated instruction</li>
              <li>Targeted instruction</li>
              <li>Implied principle four</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              Principle one and principle four are implied. That is, to adhere
              to Arizona's Language Development Approach, teachers should be
              building upon their ELL's background and culture. Additionally,
              teachers should be testing for growth.
            </p>
            <p>
              The SEI models incorporate principle two by allocating a portion
              of the day to integrated instruction. The SEI models incorporates
              principle three by allocating a portion of the day to targeted
              instruction.
            </p>
          </div>
        </div>
        {/* END SECTION */}
      </div>
    </div>
  );
};

export default SEIModel;
