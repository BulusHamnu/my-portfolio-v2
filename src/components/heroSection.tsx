import Button from "./button";
import { Download, Phone } from "lucide-react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "motion/react";

/* Hero Section */
function HeroSection() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      }}
      viewport={{ once: true }}
      id="hero"
      className="pt-28 p-3"
    >
      <h1 className="md:text-left">
        Hi, I'm <span className="text-amber-500">Hamnu Bulus</span> <br />
        Madu
      </h1>
      <h2 style={{ marginBottom: "20px" }} className="text-left">
        Software Engineer building reliable web applications and backend
        systems.
      </h2>
      <p className="text-left sm:mx-2 leading-relaxed md:leading-snug lg:text-lg">
        I enjoy understanding how systems work, not just making them work. I
        focus on building clean, maintainable software that solves real-world
        problems using modern backend and web technologies. I'm always
        interested in working on meaningful products, whether joining a
        development team or helping turn ideas into well-built software.
      </p>
      <div className="m-3 lg:mx-0 lg:mt-12 mt-9 flex flex-col md:flex-row items-center md:justify-between p-2 lg:p-0">
        <div className="hero-btn-cont p-2 lg:p-0  flex flex-row gap-5 justify-center">
          <a href="#contact">
            <Button style="button-primary" text={"Contact"} Icon={Phone} />
          </a>
          <a
            href="Bulus_Hamnu_Backend_Developer_Resume.pdf"
            download="Bulus_Hamnu_Backend_Developer_Resume.pdf"
          >
            <Button style="button-secondary" text={"Resume"} Icon={Download} />
          </a>
        </div>
        <div className="social-links mt-9 md:mt-0 flex flex-row justify-between w-50 items-center">
          <a href="https://github.com/BulusHamnu" target="_blank">
            <FaGithub
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-110"
              size={28}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bulus-hamnu-a2850a23b"
            target="_blank"
          >
            <FaLinkedin
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-125"
              size={28}
            />
          </a>
          <a
            href="https://x.com/bulushamnu?t=DruMHErbK2GRXdyNzD5pEw&s=09"
            target="_blank"
          >
            <SiX
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-125"
              size={24}
            />
          </a>
          <a href="https://youtube.com/@bulus_hamnu" target="_blank">
            <FaYoutube
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-125"
              size={33}
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
