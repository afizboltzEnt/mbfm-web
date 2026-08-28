import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";
import SectionHeader from "@/components/SectionHeader";
import AosInit from "@/components/AosInit";
import { siteInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      <AosInit />
      <HeroSlider />

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StatsCounter value={siteInfo.regions} label="Wilayah" suffix="" />
            <StatsCounter value={siteInfo.states} label="Negeri" suffix="" />
            <StatsCounter
              value={siteInfo.branches}
              label="Cawangan Persatuan Belia"
              suffix=""
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div data-aos="fade-right">
              <SectionHeader
                title="Majlis Belia FELDA Malaysia"
                center={false}
              />
              <p className="mb-6 text-dark-gray leading-relaxed">
                Majlis Belia Felda Malaysia telah ditubuhkan dengan rasmi dan
                didaftarkan pada 7 Ogos 1991 dengan keahlian seramai 59,836
                orang. Mesyuarat Agung Kali Pertama telah diadakan pada 9
                Oktober 1991 di Institut Pembangunan Tanah FELDA (INPUT) yang
                disempurnakan oleh YB Encik Yassin Kamari, Timbalan Menteri
                Pembangunan Negara dan Luar Bandar Malaysia.
              </p>
              <p className="mb-8 text-dark-gray leading-relaxed">
                Majlis Belia FELDA Malaysia ditubuhkan dan didaftarkan pada 7
                Ogos 1991 dengan hasrat untuk menjadi sebuah badan penyelaras
                persatuan-persatuan belia Felda di Malaysia.
              </p>
              <a href="/about" className="btn-primary">
                Ketahui Lebih Lanjut
              </a>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/felda-building.jpg"
                  alt="FELDA Building"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-white shadow-xl">
                <div className="text-3xl font-bold">1991</div>
                <div className="text-sm">Tahun Penubuhan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-dark">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Untuk Anda"
            subtitle="Pilih topik yang berminat"
            light
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Organisasi",
                desc: "Kenali kepimpinan MBFM",
                href: "/organisasi/eksekutif-kanan",
                icon: "👥",
              },
              {
                title: "Pendaftaran",
                desc: "Daftar sebagai ahli",
                href: "/pendaftaran",
                icon: "📝",
              },
              {
                title: "Media",
                desc: "Berita & aktiviti terkini",
                href: "/media",
                icon: "📰",
              },
              {
                title: "Sejarah",
                desc: "Latar belakang MBFM",
                href: "/about",
                icon: "📜",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group rounded-xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
