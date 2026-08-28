import SectionHeader from "@/components/SectionHeader";
import TeamCard from "@/components/TeamCard";
import AosInit from "@/components/AosInit";
import { regionalChairs } from "@/lib/data";

export default function MBFMWilayahPage() {
  return (
    <>
      <AosInit />
      {/* Hero Banner */}
      <section className="relative bg-dark py-20">
        <div className="gradient-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pengerusi Wilayah"
            subtitle="Pengerusi Majlis Belia FELDA Wilayah"
            light
          />
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regionalChairs.map((chair, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="card-hover overflow-hidden rounded-xl bg-white shadow-lg">
                  <div className="relative h-64 w-full bg-cream">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={chair.image}
                      alt={chair.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <span className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Wilayah {chair.region}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-dark">
                      {chair.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
