import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <header>
        <h2>Projects</h2>
      </header>
      <Project
        title={"1. SpeedScore"}
        abstract={
          "Full-stack web application for speed golfers to record stats, manage friends, and access a feed mode"
        }
        point1={
          "Implemented Google authentication for user login and used accessibility standards to ensure compliance and improve app usability"
        }
        point2={
          "Designed and developed a badge system that depends on golfer's stats to incentivize engagement and improve user retention"
        }
        point3={
          "Collaborated with a team of developers to ensure code quality, maintainability, and scalability"
        }
        summary={
          "Overall, SpeedScore is a showcase of my technical skills in full-stack web development and my ability to collaborate with a team towards a common goal."
        }
        stack={"React JavaScript HTML CSS Express.js Node.js MongoDB"}
      />

      <Project
        title={"2. Featherdusters LLC"}
        abstract={
          "Multi-page, mobile-first website built, maintained, and refactored for a local business"
        }
        point1={
          "Led front-end development and collaborated with business owners to gather requirements and create a website that met their needs"
        }
        point2={
          "Implemented accessibility standards to ensure compliance and improve app usability for a wider range of users"
        }
        point3={
          "Improved website performance through testing, debugging, and optimization"
        }
        summary={
          "Overall, this project showcases my skills in front-end development and collaboration, and highlights my ability to create effective digital solutions for businesses."
        }
        stack={"React  JavaScript  HTML  CSS"}
      />
    </section>
  );
};

export default Projects;
