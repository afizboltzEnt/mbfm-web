interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${center ? "text-center" : ""}`}
      data-aos="fade-up"
    >
      <h2
        className={`text-3xl font-bold md:text-4xl ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-white/80" : "text-dark-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded bg-primary" />
    </div>
  );
}
