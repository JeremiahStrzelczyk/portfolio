import React, { useEffect } from "react";

function Presentation() {
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
    <section id="presentation" className="hidden">
      <h2 className="section-title">Living Museum Presentation Overview</h2>
      <h3 className="section-subtitle">Description</h3>
      <p>
        The Living Museum will be presented in the school gymnasium to allow
        ample space for students to set up their exhibits and for families,
        peers, and teachers to move freely between displays. Each student or
        group will have their own designated area to showcase their historical
        topic creatively and interactively.
      </p>
      <h3 className="section-subtitle">Event Flow and Audience Interaction</h3>
      <ul className="highlight-list">
        <li>
          <strong>Setup:</strong> Each student or group will transform their
          area into a mini-exhibit, incorporating their visual art pieces and
          performance props.
        </li>
        <li>
          <strong>Presentation:</strong> Students will present their monologue
          or scene every 10 to 15 minutes as visitors circulate the room.
          Between performances, they will engage with attendees by answering
          questions about their visual art pieces and historical topic.
        </li>
        <li>
          <strong>Interactive Elements:</strong> Some exhibits may include
          hands-on activities, such as a small craft station or an interactive
          timeline, allowing visitors to participate actively.
        </li>
      </ul>
    </section>
  );
}

export default Presentation;

// import React from "react";

// function Presentation() {
//   return (
//     <section id="presentation">
//       <h2 className="section-title">Living Museum Presentation Overview</h2>
//       <h3 className="section-subtitle">Description</h3>
//       <p>
//         The Living Museum will be presented in the school gymnasium to allow
//         ample space for students to set up their exhibits and for families,
//         peers, and teachers to move freely between displays. Each student or
//         group will have their own designated area to showcase their historical
//         topic creatively and interactively.
//       </p>
//       <h3 className="section-subtitle">Event Flow and Audience Interaction</h3>
//       <ul className="highlight-list">
//         <li>
//           <strong>Setup:</strong> Each student or group will transform their
//           area into a mini-exhibit, incorporating their visual art pieces and
//           performance props.
//         </li>
//         <li>
//           <strong>Presentation:</strong> Students will present their monologue
//           or scene every 10 to 15 minutes as visitors circulate the room.
//           Between performances, they will engage with attendees by answering
//           questions about their visual art pieces and historical topic.
//         </li>
//         <li>
//           <strong>Interactive Elements:</strong> Some exhibits may include
//           hands-on activities, such as a small craft station or an interactive
//           timeline, allowing visitors to participate actively.
//         </li>
//       </ul>
//       <h3 className="section-subtitle">
//         Integration of Visual and Performance Art Components
//       </h3>
//       <ul className="highlight-list">
//         <li>
//           <strong>Visual Art Component:</strong>
//           <ul>
//             <li>
//               Each exhibit will include a handmade visual art piece, such as a
//               diorama, poster, timeline, or collage that visually represents the
//               historical topic and incorporates multiple perspectives.
//             </li>
//             <li>
//               Students can also create props, models, or costumes relevant to
//               their topic to further immerse the audience in the historical era.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Performance Art Component:</strong>
//           <ul>
//             <li>
//               Students will perform a dramatic monologue or short scene in
//               character, representing a historical figure or persona connected
//               to their topic. This performance will highlight the multiple
//               perspectives they've researched and showcase their understanding
//               of the historical issue.
//             </li>
//             <li>
//               Alternatively, students can perform a short musical piece or
//               interpretive dance that reflects the emotions, culture, or events
//               of the historical time period they studied.
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default Presentation;
