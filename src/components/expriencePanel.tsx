import TimelineCard from "./timelineCard";
import { expriences } from "../data/expriences";
import { motion } from "motion/react";

/* Expriences Panel */
function ExpriencePanel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="text-left mt-9"
    >
      <p>
        I’m still early in my journey, but I’ve been actively building and
        learning through real projects and practical problem solving.
      </p>
      <h3 className="text-md md:text-2xl mt-5 mb-3">Timeline</h3>
      <div className="grid grid-cols-[10px_auto] gap-2 md:gap-3">
        <div className="h-full bg-gray-600 w-0.5"></div>
        <div className="timelines">
          {expriences.map((exprience) => (
            <TimelineCard data={exprience} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ExpriencePanel;
