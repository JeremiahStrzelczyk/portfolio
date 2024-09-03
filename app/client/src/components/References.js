import React from "react";

const References = () => {
  return (
    <section>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.5",
          textAlign: "left",
        }}
      >
        <h1 className="reference-h1">References</h1>
        <div className="reference-div">
          {/* BEGIN SINGLE REFERENCES */}
          <p className="reference-p">
            Brown, R., & Harris, J. (2023, March 15).{" "}
            <em>
              The importance of using diagnostic assessment: 4 TIPS for
              identifying learner needs
            </em>
            .{" "}
            <a
              href="https://www.renaissance.com/2021/05/20/blog-the-importance-of-using-diagnostic-assessment-4-tips-for-identifying-learner-needs/"
              target="_blank"
              rel="noopener noreferrer"
              className="reference-a"
            >
              https://www.renaissance.com/2021/05/20/blog-the-importance-of-using-diagnostic-assessment-4-tips-for-identifying-learner-needs/
            </a>
          </p>

          <p className="reference-p">
            <em>Formative and summative assessments</em>. Poorvu Center for
            Teaching and Learning. (2021, June 30).{" "}
            <a
              href="https://poorvucenter.yale.edu/Formative-Summative-Assessments"
              target="_blank"
              rel="noopener noreferrer"
              className="reference-a"
            >
              https://poorvucenter.yale.edu/Formative-Summative-Assessments
            </a>
          </p>
          <p className="reference-p">
            Rankin, B. B., & Casey, R. (2022). Goals, Growth, and Grades:
            Student Ownership of Learning through Reflection.{" "}
            <em>NECTFL Review, 89</em>, 57–64.
          </p>

          {/* END SINGLE REFERENCES */}
        </div>
      </div>
    </section>
  );
};

export default References;
