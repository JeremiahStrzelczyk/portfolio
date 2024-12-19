import React from "react";
import { useEffect } from "react";

function TechnologyGuidelines() {
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
      {
        threshold: 0.2,
      }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology-guidelines" className="hidden">
      <h2>Technology Guidelines for Research</h2>
      <div className="info-cards">
        <div className="card">
          <h3>📚 Researching Historical Topics</h3>
          <p>
            Use credible sources such as educational institutions (.edu),
            government sites (.gov), and trusted organizations (.org). Avoid
            unreliable or biased sources like personal blogs or forums.
          </p>
          <p>(PBS NewsHour Classroom, 2023)</p>
        </div>
        <div className="card">
          <h3>🌍 Extended Learning</h3>
          <p>
            Explore local virtual museum tours and connect globally with
            international resources to expand your learning.
          </p>
        </div>
        <div className="card">
          <h3>✅ Responsible Use of Technology</h3>
          <p>
            Stay safe online by avoiding personal information sharing, verifying
            sources, and avoiding plagiarism. Ensure your work reflects your
            creativity and effort.
          </p>
          <p>(SWGfL, n.d.)</p>
        </div>
        <div className="card">
          <h3>🎨 Enhancing Exhibits</h3>
          <p>
            Use tools like Canva for posters, Tinkercad for 3D models, and
            WeVideo to record practice performances. Balance technology with
            creativity for an impactful presentation.
          </p>
        </div>
      </div>
    </section>
  );
}

// function TechnologyGuidelines() {
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
//     <section id="technology-guidelines" className="hidden">
//       <h2>Technology Guidelines for Research</h2>
//       <h3>1. Researching Historical Topics and Gathering Information</h3>
//       <p>
//         Students are expected to use technology responsibly and effectively to
//         locate credible resources and deepen their understanding of their chosen
//         topic. Follow these guidelines:
//       </p>
//       <ul>
//         <li>
//           <strong>Use Credible Sources:</strong>
//           <ul>
//             <li>
//               Credible sources consist of educational institutions (.edu),
//               government sites (.gov), and trusted organizations (.org).
//             </li>
//             <li>
//               Avoid unreliable or biased sources such as personal blogs or
//               forums.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Online Research Tools:</strong>
//           <ul>
//             <li>Google Scholar for academic articles</li>
//             <li>Multimedia platforms for documentaries</li>
//             <li>School library</li>
//           </ul>
//         </li>
//         <li>
//           <strong>Cite Sources Properly:</strong>
//           <ul>
//             <li>
//               Keep track of all digital resources and include them in the
//               bibliography.
//             </li>
//             <li>Tools such as BibTeX can help manage citations.</li>
//           </ul>
//         </li>
//       </ul>

//       <h3>2. Extended Learning Locally and Globally</h3>
//       <ul>
//         <li>
//           <strong>Local Learning Opportunities:</strong>
//           <ul>
//             <li>
//               Use technology to explore virtual tours or exhibits of local
//               museums and historical landmarks.
//             </li>
//             <li>
//               Look up local historians for interviews or additional insights,
//               such as high school teachers and college professors.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Global Learning Opportunities:</strong>
//           <ul>
//             <li>Access online resources from international institutions.</li>
//             <li>
//               Use Google Translate to explore resources in different languages.
//             </li>
//           </ul>
//         </li>
//       </ul>

//       <h3>3. Creating and Enhancing the Living Museum Exhibit</h3>
//       <ul>
//         <li>
//           <strong>Visual Components:</strong>
//           <ul>
//             <li>
//               Canva or Google Slides to create polished posters, timelines, or
//               infographics.
//             </li>
//             <li>Tinkercad to create 3D models.</li>
//           </ul>
//         </li>
//         <li>
//           <strong>Performance Components:</strong>
//           <ul>
//             <li>WeVideo to record and edit practice performances.</li>
//             <li>Adobe Spark to create engaging narratives for the audience.</li>
//           </ul>
//         </li>
//       </ul>

//       <h3>4. Using Technology Responsibly</h3>
//       <ul>
//         <li>
//           <strong>Stay Safe Online:</strong>
//           <ul>
//             <li>Avoid sharing personal information.</li>
//             <li>Verify sources for accuracy and credibility.</li>
//           </ul>
//         </li>
//         <li>
//           <strong>Avoid Plagiarism:</strong>
//           <ul>
//             <li>
//               Paraphrase information and give credit to the original authors.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Balance Technology with Creativity:</strong>
//           <ul>
//             <li>
//               Ensure your work reflects your creativity and effort, not just
//               what you find online.
//             </li>
//           </ul>
//         </li>
//       </ul>

//       <h3>5. How Technology Extends Learning Possibilities</h3>
//       <ul>
//         <li>
//           <strong>Local Benefits:</strong>
//           <ul>
//             <li>
//               Access to virtual local resources allows students to connect with
//               their own community's history and culture.
//             </li>
//             <li>
//               Collaboration with local experts enriches understanding of
//               historical topics with firsthand knowledge.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Global Benefits:</strong>
//           <ul>
//             <li>
//               Connecting to global resources allows students to see how their
//               topic fits into a larger historical context.
//             </li>
//             <li>
//               Collaborating across cultures provides insights into multiple
//               perspectives, enriching their research and understanding of the
//               interconnectedness of historical events.
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </section>
//   );
// }

export default TechnologyGuidelines;
