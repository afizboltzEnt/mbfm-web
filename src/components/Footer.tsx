import Image from "next/image";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Logo & Name */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="MBFM Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Majlis Belia FELDA Malaysia</h3>
                <p className="text-sm text-light-gray">Badan Bukan Kerajaan</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex gap-8 text-sm">
              <div>
                <h4 className="mb-2 font-semibold text-primary">Tentang Kami</h4>
                <ul className="space-y-1 text-light-gray">
                  <li><a href="/about" className="hover:text-primary transition-colors">Sejarah</a></li>
                  <li><a href="/visi" className="hover:text-primary transition-colors">Visi</a></li>
                  <li><a href="/misi" className="hover:text-primary transition-colors">Misi</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-primary">Organisasi</h4>
                <ul className="space-y-1 text-light-gray">
                  <li><a href="/organisasi/eksekutif-kanan" className="hover:text-primary transition-colors">Eksekutif Kanan</a></li>
                  <li><a href="/organisasi/mbfm-wilayah" className="hover:text-primary transition-colors">MBFM Wilayah</a></li>
                  <li><a href="/media" className="hover:text-primary transition-colors">Media</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-dark-gray bg-dark-gray/50">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-light-gray">
              &copy; {new Date().getFullYear()} Majlis Belia Felda Malaysia. Hak Cipta Terpelihara.
            </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </>
  );
}
