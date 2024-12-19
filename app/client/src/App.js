import React from "react";
import "./index.css";
import Standards from "./Standards";
import Timeline from "./Timeline";
import Presentation from "./Presentation";
import StudentExpectations from "./StudentExpectations";
import PresentationDetails from "./PresentationDetails";
import Hero from "./Hero";
import Tools from "./Tools";
import TechnologyGuidelines from "./TechnologyGuidelines";
import References from "./References";
function App() {
  return (
    <div>
      <Hero />
      <main>
        <Standards />
        <Timeline />
        <Presentation />
        <StudentExpectations />
        <PresentationDetails />
        <TechnologyGuidelines />
        <Tools />
      </main>
      <References />
      <footer>
        <p>&copy; 2024 5th Grade Classroom Living Museum Project</p>
      </footer>
    </div>
  );
}

export default App;
