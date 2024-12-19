import React from "react";
import { useEffect } from "react";

function Timeline() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup
  }, []);
  return (
    <section id="timeline" className="hidden">
      <h2>Project Timeline & Key Checkpoints</h2>
      <h3>Length</h3>
      <p>
        The project should span 3-4 weeks, allowing students adequate time to
        research, create their artistic components, and practice presenting
        their material. The project will require 5-6 hours of in-class time
        distributed across four weeks of lessons and workshops. It will also
        require 2-4 hours weekly of at-home preparation.
      </p>
      <div class="checkpoint-container">
        <div class="checkpoint-card card-a">
          <h3>Week 1</h3>
          <h4>Introduction and Research</h4>
          <ul>
            <li>Introduce the project to students</li>
            <li>Explain the "Living Museum" concept and standards alignment</li>
            <li>Choose/Assign historical figures</li>
            <li>
              Teach researching skills, focusing on credible sources and
              multiple perspectives
            </li>
            <li>
              Students submit preliminary list of sources and notes on their
              historical figure
            </li>
          </ul>
        </div>

        <div class="checkpoint-card card-b">
          <h3>Week 2</h3>
          <h4>Analysis and Creative Planning</h4>
          <ul>
            <li>
              Students submit a draft outline of their research, highlighting
              multiple perspectives
            </li>
            <li>
              Teach students brainstorming techniques for integrating artistic
              elements
            </li>
            <li>
              Students submit a creative plan outlining how they will visually
              and artistically represent their topic
            </li>
          </ul>
        </div>

        <div class="checkpoint-card card-c">
          <h3>Week 3</h3>
          <h4>Production and Rehearsal</h4>
          <ul>
            <li>
              Students begin creating their artistic components in class or at
              home
            </li>
            <li>
              Conduct individual check-ins to ensure students are on track
            </li>
            <li>
              Students draft and rehearse their speeches or explanations for the
              living museum
            </li>
            <li>Peer feedback sessions for refinement</li>
          </ul>
        </div>

        <div class="checkpoint-card card-d">
          <h3>Week 4</h3>
          <h4>Finalization and Presentation</h4>
          <ul>
            <li>
              Students present their living museum exhibit to the class for
              final feedback
            </li>
            <li>Presentation day!</li>
          </ul>
        </div>
      </div>

      {/* <h3>Calendar of Key Checkpoints</h3>
      <ul>
        <li>
          <strong>Week 1: Introduction and Research</strong>
          <ul>
            <li>Introduce the project to students</li>
            <li>Explain the "Living Museum" concept and standards alignment</li>
            <li>Choose/Assign historical figures</li>
            <li>
              Teach researching skills, focusing on credible sources and
              multiple perspectives
            </li>
            <li>
              Students submit preliminary list of sources and notes on their
              historical figure
            </li>
          </ul>
        </li>
        <li>
          <strong>Week 2: Analysis and Creative Planning</strong>
          <ul>
            <li>
              Students submit a draft outline of their research, highlighting
              multiple perspectives
            </li>
            <li>
              Teach students brainstorming techniques for integrating artistic
              elements (e.g., creating dioramas, costumes, or multimedia art)
            </li>
            <li>
              Students submit a creative plan outlining how they will visually
              and artistically represent their topic
            </li>
          </ul>
        </li>
        <li>
          <strong>Week 3: Production and Rehearsal</strong>
          <ul>
            <li>
              Students begin creating their artistic components in class or at
              home
            </li>
            <li>
              Conduct individual check-ins to ensure students are on track
            </li>
            <li>
              Students draft and rehearse their speeches or explanations for the
              living museum
            </li>
            <li>Peer feedback sessions for refinement</li>
          </ul>
        </li>
        <li>
          <strong>Week 4: Finalization and Presentation</strong>
          <ul>
            <li>
              Students present their living museum exhibit to the class for
              final feedback
            </li>
            <li>Presentation day!</li>
          </ul>
        </li>
      </ul> */}
    </section>
  );
}

export default Timeline;
