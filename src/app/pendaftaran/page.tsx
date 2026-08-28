"use client";

import SectionHeader from "@/components/SectionHeader";
import AosInit from "@/components/AosInit";

export default function PendaftaranPage() {
  return (
    <>
      <AosInit />
      {/* Hero Banner */}
      <section className="relative bg-dark py-20">
        <div className="gradient-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pendaftaran Ahli"
            subtitle="Borang Pendaftaran Majlis Belia FELDA Malaysia"
            light
          />
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl" data-aos="fade-up">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-2 block text-sm font-medium text-dark">
                Nama Penuh <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Masukkan nama penuh"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-dark">
                  No. Kad Pengenalan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="No. KP"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-dark">
                  Umur
                </label>
                <input
                  type="number"
                  className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Umur"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-dark">
                  Bangsa <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Pilih bangsa</option>
                  <option value="Melayu">Melayu</option>
                  <option value="Cina">Cina</option>
                  <option value="India">India</option>
                  <option value="Lain-lain">Lain-lain</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-dark">
                  Nombor Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="No. Telefon"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-dark">
                E-mel <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="e-mel@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-dark">
                Alamat Jalan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Alamat jalan"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-dark">
                  Bandar <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Bandar"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-dark">
                  Negeri <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Pilih negeri</option>
                  <option value="Johor">Johor</option>
                  <option value="Kedah">Kedah</option>
                  <option value="Kelantan">Kelantan</option>
                  <option value="Melaka">Melaka</option>
                  <option value="Negeri Sembilan">Negeri Sembilan</option>
                  <option value="Pahang">Pahang</option>
                  <option value="Perak">Perak</option>
                  <option value="Perlis">Perlis</option>
                  <option value="Pulau Pinang">Pulau Pinang</option>
                  <option value="Sabah">Sabah</option>
                  <option value="Sarawak">Sarawak</option>
                  <option value="Selangor">Selangor</option>
                  <option value="Terengganu">Terengganu</option>
                  <option value="Wilayah Persekutuan">
                    Wilayah Persekutuan
                  </option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-dark">
                  Poskod <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-light-gray bg-cream px-4 py-3 text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Poskod"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Daftar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
