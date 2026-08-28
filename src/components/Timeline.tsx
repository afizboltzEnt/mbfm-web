interface TimelineProps {
  events: {
    date: string;
    title: string;
    description: string;
  }[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="timeline-line" />
      {events.map((event, index) => (
        <div
          key={index}
          className="relative mb-12 pl-12 md:mb-16 md:pl-0"
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          {/* Mobile: left-aligned */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div
              className={`${
                index % 2 === 0
                  ? "md:text-right md:pr-12"
                  : "md:col-start-2 md:pl-12"
              }`}
            >
              <div className="timeline-dot" style={{ top: "4px" }} />
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {event.date}
              </span>
              <h3 className="mt-2 text-xl font-bold text-dark">{event.title}</h3>
              <p className="mt-2 text-dark-gray">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
