import {
  type Skill,
  languages,
  frameworks,
  databases,
  tools,
} from "../data/skills";
import { motion } from "motion/react";
import { onViewVariants } from "../config/animations";

/* Skills Section */
function SkillCategory({
  category,
  skillSet,
}: {
  category: string;
  skillSet: Skill[];
}) {
  return (
    <div className="category">
      <div className="flex flex-row gap-3 items-center">
        <span
          style={{ width: "20px", height: "20px" }}
          className="rounded-full bg-amber-500"
        ></span>
        <h3 className="text-lg md:text-2xl">{category}</h3>
      </div>
      <div className="skills-cont flex flex-row flex-wrap mt-4 gap-4 md:gap-6">
        {skillSet.map((skill, index) => (
          <span
            key={index}
            className="flex py-2 px-5 text-sm rounded-md border border-gray-800 text-stone-400 gap-2"
          >
            <skill.icon width={20} height={20} />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <motion.section
      variants={onViewVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="skills"
      className="p-3 mt-14 mb-7"
    >
      <h2 className="section-heading text-left">Skills</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
        <SkillCategory category="Languages" skillSet={languages} />
        <SkillCategory category="Frameworks" skillSet={frameworks} />
        <SkillCategory category="Databases" skillSet={databases} />
        <SkillCategory category="Tools" skillSet={tools} />
      </div>
    </motion.section>
  );
}

export default SkillsSection;
