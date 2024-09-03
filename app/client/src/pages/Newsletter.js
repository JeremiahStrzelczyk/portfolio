import React from "react";

// Importing image placeholders
import classroom_welcome from "../static/images/classroom_welcome.webp";
import diagnostic_assessment from "../static/images/diagnostic_assessment.webp";
import formative_assessment from "../static/images/formative_assessment.webp";
import summative_assessment from "../static/images/summative_assessment.webp";
import standards_alignment from "../static/images/standards_alignment.webp";
import instruction_guidance from "../static/images/instruction_guidance.webp";
import state_assessment from "../static/images/state_assessment.webp";
import accommodations from "../static/images/accommodations.webp";
import self_reflection from "../static/images/self_reflection.webp";
import communication from "../static/images/communication.webp";

const Newsletter = () => {
  return (
    <div className="newsletter-div-body">
      {/* Header image */}
      <figure className="newsletter-section-figure">
        <img
          src={classroom_welcome}
          alt="Classroom Welcome"
          className="newsletter-header-image"
        />
        <figcaption className="newsletter-photo-credit">
          <a href="https://unsplash.com/@bel2000a?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Photo by Belinda Fewings on Unsplash
          </a>
        </figcaption>
      </figure>

      <h1 className="newsletter-h1">
        TEST TEST TEST TEST ! Dear TEST TEST TEST Families,
      </h1>
      <p>
        Welcome to our classroom! As we work together in support of your child's
        education, it is vital that you understand how we will assess your
        child's progress. This newsletter will explain the different types of
        assessments that we use, how they will help your child learn, and how
        you can stay involved in the process.
      </p>

      <h2 className="newsletter-h2">
        Assessment Understanding in Our Classroom
      </h2>

      {/* Diagnostic Assessments section */}
      <div className="newsletter-section">
        <figure className="newsletter-section-figure">
          <img
            src={diagnostic_assessment}
            alt="Diagnostic Assessment"
            className="newsletter-section-image"
          />

          <figcaption className="newsletter-photo-credit">
            <a href="https://unsplash.com/@taypaigey?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Photo by Taylor Flowe on Unsplash
            </a>
          </figcaption>
        </figure>
        <div className="newsletter-section-content">
          <h3 className="newsletter-h3">Diagnostic Assessments</h3>
          <p>
            These assessments help us identify your child's strengths and areas
            for growth before instruction begins. Please think of these as the
            doctor's check-up before prescribing the medicine. As an example, I
            may give a short test or ask your child questions in English about
            something to see what they can already understand. This actually
            helps me adjust my lessons to meet your child's specific needs
            (Brown and Harris, 2023).
          </p>
        </div>
      </div>

      {/* Formative Assessments section */}
      <div className="newsletter-section reverse">
        <figure className="newsletter-section-figure">
          <img
            src={formative_assessment}
            alt="Formative Assessment"
            className="newsletter-section-image"
          />

          <figcaption className="newsletter-photo-credit">
            <a href="https://unsplash.com/@santivedri?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Photo by Santi Vedrí on Unsplash
            </a>
          </figcaption>
        </figure>
        <div className="newsletter-section-content">
          <h3 className="newsletter-h3">Formative Assessments</h3>
          <p>
            These are ongoing assessments during our lessons; for example,
            quizzes, class discussions, or even a thumbs up or down. They are
            related to understanding how well your child grasps the material. I
            can then and there make adjustments in my teaching. Formative
            assessment is important in that it ensures your child keeps up the
            pace of learning (Formative and Summative Assessment, 2021).
          </p>
        </div>
      </div>

      {/* Summative Assessments section */}
      <div className="newsletter-section">
        <figure className="newsletter-section-figure">
          <img
            src={summative_assessment}
            alt="Summative Assessment"
            className="newsletter-section-image"
          />
          <figcaption className="newsletter-photo-credit">
            <a href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Photo by Annie Spratt on Unsplash
            </a>
          </figcaption>
        </figure>
        <div className="newsletter-section-content">
          <h3 className="newsletter-h3">Summative Assessments</h3>
          <p>
            Summative assessments are those that occur at the close of some unit
            or semester, typically as final exams or final projects, and show
            just how much your child has learned. These serve as important means
            of measuring overall progress to ensure your child has indeed met
            prescribed learning goals (Formative and Summative Assessment,
            2021).
          </p>
        </div>
      </div>

      <h2 className="newsletter-h2">Aligning Assessments with Standards</h2>

      {/* Standards Alignment section */}
      <div className="newsletter-section reverse">
        <figure className="newsletter-section-figure">
          <img
            src={standards_alignment}
            alt="Standards Alignment"
            className="newsletter-section-image"
          />

          <figcaption className="newsletter-photo-credit">
            Photo created using DALL-E by OpenAI
          </figcaption>
        </figure>
        <div className="newsletter-section-content">
          <p>
            Our assessments align to both the ELP standards and the content
            standards. In other words, each test or quiz is checking your
            child's understanding in English to complement the concept standard
            being explicitly taught in a particular subject area, such as
            mathematics or science. Another way to think about this is that it
            is a dual focus-ensuring that your child develops language skills
            along with acquiring academic knowledge.
          </p>
        </div>
      </div>

      <h2 className="newsletter-h2">Using Assessments to Guide Instruction</h2>

      {/* Instruction Guidance section */}
      <div className="newsletter-section">
        <figure className="newsletter-section-figure">
          <img
            src={instruction_guidance}
            alt="Instruction Guidance"
            className="newsletter-section-image"
          />

          <figcaption className="newsletter-photo-credit">
            <a href="https://unsplash.com/@joszczepanska?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Photo by Jo Szczepanska on Unsplash
            </a>
          </figcaption>
        </figure>
        <div className="newsletter-section-content">
          <p>
            The results of assessment let me know when I need to make an
            adjustment in my teaching methods and/or the classroom environment.
            In such cases, if a student has struggled with their vocabulary, I
            need to model the proper usage of the language more, or add more
            visual support to drive the point home. Assessments also assist in
            helping me determine the time needed to introduce higher-level
            activities or if a student needs additional support, such as being
            provided with after-school tutoring.
          </p>
        </div>
      </div>

      <h2 className="newsletter-h2">
        State Assessments and Progress Monitoring
      </h2>

      {/* State Assessment section */}
      <div className="newsletter-section reverse">
        <figure className="newsletter-section-figure">
          <img
            src={state_assessment}
            alt="State Assessment"
            className="newsletter-section-image"
          />

          <figcaption className="newsletter-photo-credit">
            <a href="https://unsplash.com/@lukechesser?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Photo by Luke Chesser on Unsplash
            </a>
          </figcaption>
        </figure>
        <div className="newsletter-section-content">
          <p>
            State assessments allow for a big-picture look at your child's
            progress both in and out of the language and content areas. These
            assessments are very crucial to monitoring long-term growth by
            determining if your child is on pace with their peers. The data from
            these assessments informs us in our planning of future instruction
            and interventions.
          </p>
        </div>
      </div>

      <h2 className="newsletter-h2">
        Accommodations for English Learners (ELs)
      </h2>

      {/* Accommodations section */}
      <div className="newsletter-section">
        <figure className="newsletter-section-figure">
          <img
            src={accommodations}
            alt="Accommodations for ELs"
            className="newsletter-section-image"
          />
          <figcaption className="newsletter-photo-credit">
            Photo created using DALL-E by OpenAI
          </figcaption>
        </figure>
        <div className="newsletter-section-content">
          <p>
            Accommodations for testing with ELs are offered to make sure all
            students have a level playing field. This could be in the form of
            extra time, simplified instructions, or the use of bilingual
            dictionaries during the test. And those accommodations really help
            let the playing field be more equal, so your child can show their
            real abilities.
          </p>
        </div>
      </div>

      <h2 className="newsletter-h2">Encouraging Self-Reflection</h2>

      {/* Self-Reflection section */}
      <div className="newsletter-section reverse">
        <figure className="newsletter-section-figure">
          <img
            src={self_reflection}
            alt="Self-Reflection"
            className="newsletter-section-image"
          />
          <figcaption className="newsletter-photo-credit">
            <a href="https://unsplash.com/@khouser01?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Photo by Keegan Houser on Unsplash
            </a>
          </figcaption>
        </figure>
        <div className="newsletter-section-content">
          <p>
            We also encourage the students to reflect upon their learning with
            the help of learning journals and self-assessment checklists. These
            techniques make the students more aware of their strengths and
            weaknesses, thus making them independent and sure about themselves
            in this journey of learning (Rankin & Casey, 2022).
          </p>
        </div>
      </div>

      <h2 className="newsletter-h2">Keeping You Informed</h2>

      {/* Communication section */}
      <figure className="newsletter-section-figure">
        <img
          src={communication}
          alt="Keeping You Informed"
          className="newsletter-section-image"
        />
        <figcaption className="newsletter-photo-credit">
          <a href="https://unsplash.com/@ptrikutam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Photo by Pavan Trikutam on Unsplash
          </a>
        </figcaption>
      </figure>
      <div className="newsletter-section">
        <div className="newsletter-section-content">
          <p>
            Communication with families is essential. Here's how we keep you
            informed about the progress of your child:
          </p>
          <ul className="newsletter-ul">
            <li className="newsletter-li">
              Regular Progress Reports: These give you information about your
              child's performance in language and content areas.
            </li>
            <li className="newsletter-li">
              Parent-Teacher Conferences: These are set up to review your
              child's progress and address any concerns you have. Translators
              will be available if your needs require so.
            </li>
            <li className="newsletter-li">
              Classroom Newsletters: Expect regular updates with tips on how to
              further assist your child at home and upcoming assessments.
            </li>
          </ul>
        </div>
      </div>

      <p className="newsletter-p">
        Together we can ensure that your child has a successful school
        experience. Please do not hesitate to contact the school with your
        questions or concerns.
      </p>

      <p className="newsletter-p">
        Warm regards,
        <br />
        Jeremiah Strzelczyk
      </p>
    </div>
  );
};

export default Newsletter;
