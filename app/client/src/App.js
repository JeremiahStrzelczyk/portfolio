import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
