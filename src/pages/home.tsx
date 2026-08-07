import Header from "../components/header";
import HeroSection from "../components/heroSection";
import ProjectsSection from "../components/projectSection";
import SkillsSection from "../components/skillsSection";
import AboutSection from "../components/aboutSection";
import ContactSection from "../components/contactSection";
import Footer from "../components/footer";
import useScrollToHash from "../hooks/useScrollToHash";
import ServicesSection from "../components/servicesSection";
import Seo from "../components/seo";

/* Home Page */
function Home() {
  useScrollToHash();

  return (
    <>
      <Seo
        title="Bulus Hamnu | Software Engineer"
        desc="Software engineer building reliable web applications, backend systems, APIs, and custom software for businesses and startups."
        canonical="https://bulushamnu.com/"
      />
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
