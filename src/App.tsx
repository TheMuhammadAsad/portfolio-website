import LoadingScreen from "./components/LoadingScreen";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Websites from "./components/Websites";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <LoadingScreen />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Websites />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
