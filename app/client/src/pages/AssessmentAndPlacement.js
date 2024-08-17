const AssessmentAndPlacement = () => {
  return (
    <div>
      <div className="project__content">
        <h3>Overview</h3>
        <p>
          Arizona uses a process of identification, assessment, placement, and
          reassessment to determine onboarding, continuing, and exiting ELLs.
        </p>
        <div className="project__double-cols">
          <div className="project__column"></div>

          <div className="project__column"></div>
        </div>
        {/* BEGINNING SECTION */}
        <h4>Process</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>Home Language Survey (HLS)</li>
              <li>Assessment</li>
              <li>Newcomer</li>
              <li>50-50 Dual Language Immersion</li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              The process begins with identification through the use of the Home
              Language Survey (HLS). The HLS is completed when they first enroll
              within a school district. If the student moves to another school
              within the district, a new HLS is not needed The HLS is essential
              to finding out if the student speaks another language other than
              English in the home
            </p>
            <p>
              The next step is Assessment - If the HLS shows that the student
              speaks a language other than English then they take the AZELLA
              test if they have not taken it before. - If your third-grade
              student scores 831 or higher, they are considered proficient and
              do not need EL services - If they do not score proficient, they
              qualify for EL services and receive extra help for English
              acquisition.
            </p>
            <p>
              The next step is Placement for those who qualify - If your student
              needs EL services, you are notified, and the school must get
              consent. This happens every year if your student continues to need
              services. - Once enrolled, the student receives extra English
              instruction to help them improve until they test proficient or
              parents waiver for withdrawal.
            </p>
            <p>
              The last step is Reassessment - Students are reassessed with the
              AZELLA test yearly. - If the student does not test proficient,
              parents will be notified and prompted for consent, and the student
              will continue with EL services the following academic year. - If
              they score proficient, parents are notified that their student is
              no longer considered English Learner and is reclassified. - After
              reclassification, the school will monitor progress for two years
              to ensure the student does well without EL services.
            </p>
          </div>
        </div>
        {/* END SECTION */}
      </div>
    </div>
  );
};

export default AssessmentAndPlacement;
