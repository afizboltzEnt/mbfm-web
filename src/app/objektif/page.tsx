import SectionHeader from "@/components/SectionHeader";
import AosInit from "@/components/AosInit";
import { objectives } from "@/lib/data";

export default function ObjektifPage() {
  return (
    <>
      <AosInit />
      {/* Hero Banner */}
      <section className="relative bg-dark py-20">
        <div className="gradient-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Objektif MBFM"
            subtitle="Matlamat penubuhan Majlis Belia FELDA Malaysia"
            light
          />
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {index + 1}
                </div>
                <p className="pt-2 text-dark-gray">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
