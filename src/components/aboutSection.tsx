import { useState } from "react";
import AboutPanel from "./aboutPanel";
import EducationPanel from "./educationPanel";
import ExpriencePanel from "./expriencePanel";
import { motion } from "motion/react";
import { onViewVariants } from "../config/animations";

function TabBtn({
  text,
  option,
  currentPanel,
  selectPanel,
}: {
  text: string;
  option: string;
  currentPanel: string;
  selectPanel: (value: string) => void;
}) {
  return (
    <button
      onClick={() => selectPanel(option)}
      className={`${currentPanel === option ? "active" : ""} about-tab flex flex-row no-wrap gap-2 button-secondary border rounded-sm px-5 lg:px-4 py-2 w-full cursor-pointer items-center justify-center text-sm md:text-lg`}
    >
      <span>{text}</span>
    </button>
  );
}

/* About Section */
function AboutSection() {
  const [currentPanel, selectPanel] = useState("about");

  return (
    <motion.section
      variants={onViewVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about"
      className="p-3"
    >
      <h2 className="section-heading text-left">About Me</h2>
      <div className="tabs flex flex-row flex-nowrap gap-2 mt-7 mb-4 max-w-3xl">
        <TabBtn
          text="About"
          option="about"
          currentPanel={currentPanel}
          selectPanel={selectPanel}
        />
        <TabBtn
          text="Expriences"
          option="experience"
          currentPanel={currentPanel}
          selectPanel={selectPanel}
        />
        <TabBtn
          text="Education"
          option="education"
          currentPanel={currentPanel}
          selectPanel={selectPanel}
        />
      </div>

      {currentPanel === "about" && <AboutPanel />}
      {currentPanel === "experience" && <ExpriencePanel />}
      {currentPanel === "education" && <EducationPanel />}
    </motion.section>
  );
}

export default AboutSection;
