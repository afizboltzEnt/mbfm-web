import Image from "next/image";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
}

export default function TeamCard({ name, position, image }: TeamCardProps) {
  return (
    <div
      className="team-card card-hover overflow-hidden rounded-xl bg-white shadow-lg"
      data-aos="fade-up"
    >
      <div className="team-image relative h-64 w-full bg-cream">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-dark">{name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{position}</p>
      </div>
    </div>
  );
}
