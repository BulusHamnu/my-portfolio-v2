import TimelineCard from "./timelineCard";
import { educations } from "../data/educations";
import { motion } from "motion/react";

/* Education Panel */
function EducationPanel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="text-left mt-9"
    >
      <h3 className="text-md md:text-2xl mt-5 mb-3">Timeline</h3>
      <div className="grid grid-cols-[10px_auto] gap-2 md:gap-3">
        <div className="h-full bg-gray-600 w-0.5"></div>
        <div className="timelines">
          {educations.map((education) => (
            <TimelineCard data={education} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default EducationPanel;
