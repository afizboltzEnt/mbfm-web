"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Utama", href: "/" },
  {
    label: "Tentang Kami",
    children: [
      { label: "Sejarah", href: "/about" },
      { label: "Visi", href: "/visi" },
      { label: "Misi", href: "/misi" },
      { label: "Objektif", href: "/objektif" },
    ],
  },
  {
    label: "Organisasi",
    children: [
      { label: "Eksekutif Kanan", href: "/organisasi/eksekutif-kanan" },
      {
        label: "Jawatankuasa Kerja Tertinggi",
        href: "/organisasi/jawatankuasa-kerja-tertinggi",
      },
      { label: "MBFM Wilayah", href: "/organisasi/mbfm-wilayah" },
    ],
  },
  {
    label: "Mantan Kepimpinan",
    children: [
      { label: "Pengerusi Felda", href: "/mantan-kepimpinan/pengerusi-felda" },
      { label: "Presiden", href: "/mantan-kepimpinan/presiden" },
      { label: "Wakil Rakyat", href: "/mantan-kepimpinan/wakil-rakyat" },
    ],
  },
  { label: "Pendaftaran", href: "https://v1.mbfm.org.my/borang/keahlian", external: true },
  {
    label: "Kejayaan",
    children: [
      { label: "APBN", href: "/kejayaan/apbn" },
      { label: "Tokoh Belia Felda", href: "/kejayaan/tokoh-belia-felda" },
      { label: "Tokoh Beliawanis", href: "/kejayaan/tokoh-beliawanis" },
      { label: "Tokoh Generasi", href: "/kejayaan/tokoh-generasi" },
    ],
  },
  { label: "Media", href: "/media" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-thumb.png"
                alt="MBFM Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="hidden text-lg font-bold text-dark sm:block">
                Majlis Belia
                <br />
                FELDA Malaysia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark transition-colors hover:text-primary">
                        {item.label}
                        <svg
                          className={`h-3 w-3 transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeDropdown === item.label && (
                        <div className="absolute left-0 top-full z-50 min-w-[220px] border-t-2 border-primary bg-white py-2 shadow-xl">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-dark-gray transition-colors hover:bg-cream hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="px-3 py-2 text-sm font-medium text-dark transition-colors hover:text-primary"
                    >
                      {item.label}
                      {item.external && (
                        <svg className="ml-1 inline-block h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-dark transition-colors hover:bg-cream lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b px-4">
          <span className="text-lg font-bold text-dark">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-dark hover:bg-cream"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto px-4 py-4">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-light-gray py-1">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-dark"
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pb-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-dark-gray transition-colors hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-sm font-medium text-dark transition-colors hover:text-primary"
                >
                  {item.label}
                  {item.external && (
                    <svg className="ml-1 inline-block h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
