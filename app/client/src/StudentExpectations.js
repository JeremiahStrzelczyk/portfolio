import React from "react";
import { useEffect } from "react";

function StudentExpectations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="student-expectations" className="hidden timeline-section">
      <h2>Student Expectations</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">1</div>
          <div className="timeline-content">
            <h3>Select a Historical Topic or Figure</h3>
            <p>
              Choose a historical figure, event, or issue that has had an
              influence locally, nationally, or globally. Ensure it aligns with
              one of the given themes like Social Movements or Technological
              Advancements.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">2</div>
          <div className="timeline-content">
            <h3>Research and Analyze Multiple Perspectives</h3>
            <p>
              Use at least 3 reliable sources and explore multiple perspectives
              on your topic to understand its broader impact. For example, how
              was it viewed by different groups or cultures?
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">3</div>
          <div className="timeline-content">
            <h3>Create Your Visual Art Component</h3>
            <p>
              Design and create a visual representation of your topic. Examples
              include a diorama, poster, timeline, or costume reflecting the
              significance of your topic.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">4</div>
          <div className="timeline-content">
            <h3>Develop a Performance Art Component</h3>
            <p>
              Prepare a dramatic monologue, scene, or short performance to
              highlight your topic. Alternatively, create a musical piece or
              interpretive dance reflecting the cultural or historical impact.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">5</div>
          <div className="timeline-content">
            <h3>Present at the Living Museum</h3>
            <p>
              Set up your exhibit area, perform your creative piece, and engage
              with visitors by answering questions about your research and
              presentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// function StudentExpectations() {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target); // Stop observing once visible
//           }
//         });
//       },
//       {
//         threshold: 0.2, // Trigger when 20% of the section is visible
//       }
//     );

//     const hiddenElements = document.querySelectorAll(".hidden");
//     hiddenElements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect(); // Cleanup
//   }, []);
//   return (
//     <section id="student-expectations" className="hidden">
//       <h2>Student Expectations</h2>
//       <ol>
//         <li>
//           <strong>Select a Historical Topic or Figure</strong>
//           <ul>
//             <li>
//               Choose a historical figure, event, or issue that has had an
//               influence locally, nationally, or globally.
//             </li>
//             <li>
//               Your choice must align with one of the following themes:
//               <ul>
//                 <li>
//                   <strong>Social Movements:</strong> (e.g., Civil Rights
//                   Movement, Women's Suffrage)
//                 </li>
//                 <li>
//                   <strong>Cultural Contributions:</strong> (e.g., an artist,
//                   musician, or writer)
//                 </li>
//                 <li>
//                   <strong>Political or Military Leadership:</strong> (e.g., a
//                   president, revolutionary leader, or activist)
//                 </li>
//                 <li>
//                   <strong>Technological or Scientific Advancements:</strong>{" "}
//                   (e.g., an inventor or significant discovery)
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Research and Analyze Multiple Perspectives</strong>
//           <ul>
//             <li>
//               Use at least 3 reliable sources (books, websites, or articles) to
//               gather information.
//             </li>
//             <li>
//               Explore multiple perspectives of your topic to understand its
//               broader impact. For example:
//               <ul>
//                 <li>
//                   How was the historical figure or event viewed by different
//                   groups or cultures?
//                 </li>
//                 <li>
//                   What were the long-term effects of the figure's actions or the
//                   event on society?
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Create Your Visual Art Component</strong>
//           <ul>
//             <li>
//               Design and create a visual representation of your topic. Examples
//               include:
//               <ul>
//                 <li>
//                   A diorama depicting a key event in the figure's life or a
//                   historical scene
//                 </li>
//                 <li>
//                   A poster or timeline that visually represents the figure's
//                   contributions or the sequence of events
//                 </li>
//                 <li>
//                   A costume or model that reflects the time period or
//                   significance of your topic
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Develop a Performance Art Component</strong>
//           <ul>
//             <li>
//               Prepare a dramatic monologue, scene, or short performance:
//               <ul>
//                 <li>
//                   Speak from the perspective of the historical figure,
//                   highlighting their contributions, challenges, or influence.
//                 </li>
//                 <li>
//                   Your performance should be 2-3 minutes long and provide
//                   insight into the figure's life or the event's importance.
//                 </li>
//               </ul>
//             </li>
//             <li>
//               Alternatively, create a musical piece or interpretive dance
//               reflecting the time period or cultural impact of the topic.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Present at the Living Museum</strong>
//           <ul>
//             <li>
//               During the Living Museum event, you will:
//               <ul>
//                 <li>
//                   Set up your exhibit area with your visual art and any props
//                   needed for your performance.
//                 </li>
//                 <li>
//                   Perform your dramatic or creative piece every 10-15 minutes as
//                   visitors circulate the museum.
//                 </li>
//                 <li>
//                   Be prepared to answer questions from peers and families about
//                   your topic.
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Submit Required Materials</strong>
//           <ul>
//             <li>
//               Turn in the following by the specified deadlines:
//               <ul>
//                 <li>A research outline with a list of sources</li>
//                 <li>
//                   A draft of your performance script or plan for your creative
//                   pieces
//                 </li>
//                 <li>
//                   A photo or description of your visual art component in
//                   progress
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//       </ol>
//     </section>
//   );
// }

export default StudentExpectations;
