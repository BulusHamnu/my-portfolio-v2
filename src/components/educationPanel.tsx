import TimelineCard from "./timelineCard";
import { educations } from "../data/educations";

/* Education Panel */
function EducationPanel() {
  return (
    <div className="text-left mt-9">
      <h3 className="text-md md:text-2xl mt-5 mb-3">Timeline</h3>
      <div className="grid grid-cols-[10px_auto] gap-2 md:gap-3">
        <div className="h-full bg-gray-600 w-0.5"></div>
        <div className="timelines">
          {educations.map((education) => (
            <TimelineCard data={education} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationPanel;
