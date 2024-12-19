import React from "react";

import { useEffect } from "react";
function PresentationDetails() {
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
    <section id="presentation-details" className="hidden">
      <h2>Visual & Physical Presentation Details</h2>
      <p>
        Students will present their living museum pieces in a way that combines
        visual creativity with an interactive and engaging physical performance.
      </p>
      <h3>1. Visual Presentation</h3>
      <ul>
        <li>
          <strong>Exhibit Setup:</strong> Each student or group will create a
          mini-exhibit to visually represent their chosen historical figure,
          event, or issue.
          <ul>
            <li>
              Exhibits will include:
              <ul>
                <li>
                  A visual art component, such as a poster, diorama, timeline,
                  or collage that illustrates key aspects of their topic.
                </li>
                <li>
                  Props, costumes, or models that enhance the authenticity and
                  engagement of the presentation.
                </li>
                <li>
                  A title card that clearly states the historical topic and its
                  significance.
                </li>
              </ul>
            </li>
            <li>
              Students will be responsible for arranging their exhibits in a
              designated space.
            </li>
          </ul>
        </li>
        <li>
          <strong>Design and Layout:</strong> The layout must be neat,
          organized, and visually appealing to draw attention and communicate
          key ideas effectively.
        </li>
      </ul>
      <h3>2. Physical Presentation</h3>
      <ul>
        <li>
          <strong>Dramatic Performance or Artistic Expression:</strong> Students
          will perform a 2-3 minute monologue, scene, or artistic expression
          (e.g., dance or musical performance) to bring their historical topic
          to life.
          <ul>
            <li>
              <strong>Monologues/Scenes:</strong> Students will take on the
              persona of their chosen historical figure or a character related
              to their event.
            </li>
            <li>
              <strong>Artistic Alternatives:</strong> For students focusing on
              artistic themes, performances can include music or dance that
              reflects the culture, emotions, or time period of their topic.
            </li>
          </ul>
        </li>
        <li>
          <strong>Interaction with Audience:</strong> Between performances,
          students will engage with visitors by:
          <ul>
            <li>
              Answering questions about their research and visual art
              components.
            </li>
            <li>
              Providing additional context or insights about their historical
              topic.
            </li>
            <li>
              Encouraging audience participation through interactive elements
              such as guessing games or hands-on props.
            </li>
          </ul>
        </li>
      </ul>
      <h3>3. Audience Engagement</h3>
      <ul>
        <li>
          <strong>Performance Schedule:</strong> Students will perform their
          dramatic or artistic pieces in regular intervals, every 10-15 minutes,
          allowing multiple visitors to experience their presentation.
        </li>
        <li>
          <strong>Interaction in Real-Time:</strong> When not performing,
          students will remain at their exhibit, ready to explain their visual
          art, discuss their research, and interact with the audience.
        </li>
        <li>
          <strong>Additional Atmosphere:</strong> Background music will create
          an engaging and immersive experience for the audience.
        </li>
      </ul>
    </section>
  );
}

export default PresentationDetails;
