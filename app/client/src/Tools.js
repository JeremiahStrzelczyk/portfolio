import React from "react";
import { useEffect } from "react";

import zoomLogo from "./images/zoom-logo.png";
import newsLetter from "./images/logo512.png";
import googleSlides from "./images/googleSlides.png";
import GooglePhotos from "./images/googlePhotos.png";
import parentSquare from "./images/parentSquare.png";

function Tools() {
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
    <section id="tools" className="hidden tools-section">
      <h2>Technological Tools for Sharing the Event</h2>
      <div className="tools-grid">
        <div className="tool-card">
          <img src={parentSquare} alt="Google Photos Logo" />
          <h3>Notifications</h3>
          <p>
            ParentSquare will be used for announcements, reminders, and direct
            communication with families.
          </p>
        </div>
        <div className="tool-card">
          <img src={newsLetter} alt="Zoom Logo" />
          <h3>School and Family Communication Platforms</h3>
          <p>
            The Living Museum event will be announced through the school’s
            website and classroom newsletter, including key details like the
            date, time, location, and purpose.
          </p>
          <p>
            {" "}
            We will post previews of the students’ exhibits to generate
            interest.
          </p>
        </div>
        <div className="tool-card">
          <img src={zoomLogo} alt="Virtual Access Icon" />
          <h3>Virtual Access for Families and the Community</h3>
          <p>
            Staff will perform a Zoom walkthrough of the event, allowing
            families and community members to participate virtually.
          </p>
        </div>
        <div className="tool-card">
          <img src={googleSlides} alt="Google Slides Logo" />
          <h3>Student-Created Digital Content</h3>
          <p>
            Students will create digital presentations using Google Slides to
            complement their physical exhibits and provide additional context
            for virtual participants.
          </p>
        </div>
        <div className="tool-card">
          <img src={GooglePhotos} alt="Google Photos Logo" />
          <h3>Post-Event Sharing</h3>
          <p>
            Photos from the event and the Zoom tour will be shared via Google
            Photos for archiving and post-event viewing.
          </p>
        </div>
      </div>
    </section>
  );
}

// function Tools() {
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
//     <section id="tools" className="hidden">
//       <h2>Technological Tools for Sharing the Event</h2>
//       <p>
//         To maximize the reach and impact of the Living Museum, a variety of
//         technological tools will be used to share the event with the school,
//         families, and the broader community. These tools will ensure clear
//         communication, accessibility, and engagement.
//       </p>
//       <h3>1. School and Family Communication Platforms</h3>
//       <ul>
//         <li>
//           <strong>School Website and Newsletter:</strong>
//           <ul>
//             <li>
//               The Living Museum event will be announced through the school's
//               website and classroom newsletter, including key details like the
//               date, time, location, and purpose.
//             </li>
//             <li>
//               We will post previews of the students' exhibits to generate
//               interest.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Parent Communication:</strong>
//           <ul>
//             <li>
//               ParentSquare will be used for announcements, reminders, and direct
//               communication with families.
//             </li>
//           </ul>
//         </li>
//       </ul>
//       <h3>2. Virtual Access for Families and the Community</h3>
//       <ul>
//         <li>
//           <strong>Live Streaming and Virtual Tour:</strong>
//           <ul>
//             <li>
//               Staff will perform a Zoom walkthrough of the event, allowing
//               families and community members to participate virtually.
//             </li>
//           </ul>
//         </li>
//       </ul>
//       <h3>3. Student-Created Digital Content</h3>
//       <ul>
//         <li>
//           Students will create digital presentations using Google Slides to
//           complement their physical exhibits and provide additional context for
//           virtual participants.
//         </li>
//       </ul>
//       <h3>4. Post-Event Sharing</h3>
//       <ul>
//         <li>
//           <strong>Digital Photo Album:</strong>
//           <ul>
//             <li>
//               Photos from the event and the Zoom tour will be shared via Google
//               Photos for archiving and post-event viewing.
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </section>
//   );
// }

export default Tools;
