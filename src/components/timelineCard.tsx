/* TimeLine Card */
export interface Timeline {
  date: string;
  title: string;
  organization: string;
  description: string;
}

function TimelineCard({ data }: { data: Timeline }) {
  return (
    <div className="exprience-card mt-6">
      <div className="timeline-heading mb-3">
        <div className="flex gap-4 items-center flex-wrap mb-3">
          <div
            style={{ fontSize: "13px" }}
            className=" p-1.5 max-w-fit rounded-md text-sm bg-gray-900 border border-gray-800"
          >
            {data.date}
          </div>
          <span className="text-lg font-bold">{data.title}</span>
        </div>
        <span style={{ fontSize: "15px" }}>{data.organization}</span>
      </div>
      <p>{data.description}</p>
    </div>
  );
}

export default TimelineCard;
