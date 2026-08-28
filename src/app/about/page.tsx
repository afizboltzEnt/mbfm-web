import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import AosInit from "@/components/AosInit";
import { timelineEvents } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <AosInit />
      {/* Hero Banner */}
      <section className="relative bg-dark py-20">
        <div className="gradient-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Sejarah Penubuhan"
            subtitle="Majlis Belia FELDA Malaysia"
            light
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl">
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <h2 className="mb-6 text-2xl font-bold text-dark">Tentang MBFM</h2>
          <p className="text-dark-gray leading-relaxed">
            Majlis Belia FELDA Malaysia ditubuhkan dan didaftarkan pada 7 Ogos
            1991 dengan hasrat untuk menjadi sebuah badan penyelaras
            persatuan-persatuan belia Felda di Malaysia. Dengan keahlian seramai
            59,836 orang pada penubuhan, MBFM terus memainkan peranan penting
            dalam memperjuangkan nasib belia di tanah rancangan FELDA.
          </p>
        </div>
      </section>
    </>
  );
}
