import SectionHeader from "@/components/SectionHeader";
import AosInit from "@/components/AosInit";
import { mediaArticles } from "@/lib/data";
import Image from "next/image";

export default function MediaPage() {
  return (
    <>
      <AosInit />
      {/* Hero Banner */}
      <section className="relative bg-dark py-20">
        <div className="gradient-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Media MBFM"
            subtitle="Berita dan aktiviti terkini"
            light
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mediaArticles.map((article, index) => (
              <div
                key={index}
                className="card-hover group overflow-hidden rounded-xl bg-white shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block text-xs font-semibold text-primary">
                    {article.date}
                  </span>
                  <h3 className="mb-3 text-lg font-bold text-dark line-clamp-2 group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="text-sm text-dark-gray line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
