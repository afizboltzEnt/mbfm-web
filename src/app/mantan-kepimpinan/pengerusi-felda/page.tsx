import SectionHeader from "@/components/SectionHeader";
import AosInit from "@/components/AosInit";
import { formerChairman } from "@/lib/data";
import Image from "next/image";

export default function PengerusiFeldaPage() {
  return (
    <>
      <AosInit />
      {/* Hero Banner */}
      <section className="relative bg-dark py-20">
        <div className="gradient-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Mantan Pengerusi MBFM"
            subtitle="Pengerusi Lembaga Kemajuan Tanah Persekutuan (FELDA)"
            light
          />
        </div>
      </section>

      {/* Chairman Card */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-lg" data-aos="fade-up">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="relative h-80 w-full bg-cream">
              <Image
                src={formerChairman.image}
                alt={formerChairman.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-dark">
                {formerChairman.name}
              </h3>
              <p className="mt-2 text-primary">{formerChairman.position}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
