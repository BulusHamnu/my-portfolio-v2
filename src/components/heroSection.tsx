import Button from "./button";
import { Download, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiX } from "react-icons/si";
import { SiYoutube } from "react-icons/si";

/* Hero Section */
function HeroSection() {
  return (
    <section id="hero-section" className="pt-28  p-3">
      <span
        style={{ fontSize: "12px" }}
        className="border-b-gray-700 px-4 py-1.5 rounded-2xl bg-gray-900 text-shadow-sm m-3"
      >
        Backend Developer
      </span>
      <h1 className="md:text-left">
        Hi, I'm <span className="text-amber-500">Hamnu Bulus</span> <br />
        Madu
      </h1>
      <p className="text-left sm:mx-2 leading-relaxed md:leading-snug lg:text-lg">
        A passionate software developer with a strong interest in backend and
        full-stack development. I have hands-on experience with HTML, CSS,
        JavaScript, React.js, Python, and Node.js. If you’d like to connect or
        discuss potential collaborations and opportunities, feel free to reach
        out!
      </p>
      <div className="m-3 lg:mx-0 lg:mt-8 mt-8 flex flex-col md:flex-row items-center md:justify-between p-2 lg:p-0">
        <div className="hero-btn-cont p-2 lg:p-0  flex flex-row gap-5 justify-center">
          <a href="#">
            <Button text={"Contact"} Icon={Phone} />
          </a>
          <a
            href="public/bulus-hamnu-resume.pdf"
            download="Bulus-Hamnu-Resume.pdf"
          >
            <Button text={"Resume"} Icon={Download} />
          </a>
        </div>
        <div className="social-links mt-9 md:mt-0 flex flex-row justify-between w-50 items-center">
          <a href="https://github.com/BulusHamnu" target="_blank">
            <SiGithub
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-125"
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
          <a
            href="https://www.youtube.com/channel/UCkFZr0w1HbX4MPN6TjAJEuQ"
            target="_blank"
          >
            <SiYoutube
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-125"
              size={33}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
