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
              <li className="no-bullets">
                (Office of English Language Acquisition Services, n.d.)
              </li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              The process begins with identification through the use of the Home
              Language Survey (HLS). The HLS is completed when they first enroll
              within a school district. If the student moves to another school
              within the district, a new HLS is not needed The HLS is essential
              to finding out if the student speaks another language other than
              English in the home (Office of English Language Acquisition
              Services, n.d.).
            </p>
            <p>
              The next step is Assessment - If the HLS shows that the student
              speaks a language other than English then they take the AZELLA
              test if they have not taken it before. - If your third-grade
              student scores 831 or higher, they are considered proficient and
              do not need EL services - If they do not score proficient, they
              qualify for EL services and receive extra help for English
              acquisition (Office of English Language Acquisition Services,
              n.d.).
            </p>
            <p>
              The next step is Placement for those who qualify - If your student
              needs EL services, you are notified, and the school must get
              consent. This happens every year if your student continues to need
              services. - Once enrolled, the student receives extra English
              instruction to help them improve until they test proficient or
              parents waiver for withdrawal (Office of English Language
              Acquisition Services, n.d.).
            </p>
            <p>
              The last step is Reassessment - Students are reassessed with the
              AZELLA test yearly. - If the student does not test proficient,
              parents will be notified and prompted for consent, and the student
              will continue with EL services the following academic year. - If
              they score proficient, parents are notified that their student is
              no longer considered English Learner and is reclassified. - After
              reclassification, the school will monitor progress for two years
              to ensure the student does well without EL services (Office of
              English Language Acquisition Services, n.d.).
            </p>
          </div>
        </div>
        {/* END SECTION */}

        {/* BEGINNING SECTION */}
        <h3>Standard Accommodations for ELL</h3>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>Instructions read aloud</li>
              <li>Assitive technology for writing</li>
              <li>Quiet testing environment</li>
              <li>Extra time or breaks</li>
              <li className="no-bullets">
                (Arizona Department of Education, 2019)
              </li>
            </ul>
          </div>

          <div className="project__column">
            <p>
              Test administrators can read directions aloud to help those with
              trouble reading due to language barriers. Students can use
              assistive technology to help them in their writin responses when
              they have difficulty writing English to represent their knowledge.
              Students can test in smaller groups or alone to help with focus
              and are allowed more time to work through their barriers (Arizona
              Department of Education, 2019).
            </p>
          </div>
        </div>
        {/* END SECTION */}
      </div>
    </div>
  );
};

export default AssessmentAndPlacement;
