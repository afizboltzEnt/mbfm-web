import SectionHeader from "@/components/SectionHeader";
import TeamCard from "@/components/TeamCard";
import AosInit from "@/components/AosInit";
import { executives } from "@/lib/data";

export default function EksekutifKananPage() {
  return (
    <>
      <AosInit />
      {/* Hero Banner */}
      <section className="relative bg-dark py-20">
        <div className="gradient-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Eksekutif Kanan"
            subtitle="Kepimpinan tertinggi Majlis Belia FELDA Malaysia"
            light
          />
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {executives.map((member, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <TeamCard
                  name={member.name}
                  position={member.position}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
