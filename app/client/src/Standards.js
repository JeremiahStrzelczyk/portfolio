import React from "react";
import { useEffect } from "react";

function Standards() {
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
    <section id="standards">
      <h2>Educational Standards & Learning Objectives</h2>
      <ul>
        <li>
          <strong>Washington State Social Studies Standard:</strong> By the end
          of 5th grade, students will: SSS4.5.1 Research multiple perspectives
          to take a position on a public or historical issue in a paper or
          presentation.
        </li>
        <li>
          <strong>Washington State Arts Standard:</strong> VA:Cr1.1.5, Combine
          ideas to generate an innovative idea for art-making, and the
          associated Visual Arts Anchor Standard 1, Generalizing and
          conceptualizing artistic ideas and work.
        </li>
        <li>
          <strong>Learning Objective:</strong>
          By the end of this project, students will be able to research multiple
          perspectives on a historical issue, synthesize their findings into a
          creative artistic presentation, and effectively communicate their
          understanding through a living museum exhibit that demonstrates
          innovative art-making and critical thinking.
        </li>
      </ul>
    </section>
  );
}

export default Standards;
