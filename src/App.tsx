import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectSection";
import SkillsSection from "./components/skillsSection";
import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import Footer from "./components/footer";

/* Home */
function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
