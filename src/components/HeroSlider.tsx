"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/slider/front3.png",
    title: "Majlis Belia FELDA Malaysia",
    subtitle:
      "Majlis Belia Felda Malaysia ialah sebuah badan bukan kerajaan yang ditubuhkan oleh belia dari tanah rancangan Lembaga Kemajuan Tanah Persekutuan (FELDA).",
    hashtag: "#feldarian",
  },
  {
    image: "/images/slider/a3-mbfm.jpg",
    title: "11 Wilayah • 7 Negeri • 308 Cawangan",
    subtitle:
      "Terdapat 11 cawangan Majlis Belia FELDA Wilayah, 7 cawangan Majlis Belia FELDA Negeri, dan 308 cawangan Persatuan Belia Majlis Belia FELDA Malaysia.",
    hashtag: "#feldarian",
  },
  {
    image: "/images/slider/2.3.png",
    title: " Bersama Membina Belia FELDA",
    subtitle:
      "Menjadi badan penyelaras persatuan-persatuan belia Felda di Malaysia sejak 1991.",
    hashtag: "#mbfm",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="gradient-overlay absolute inset-0" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                {slide.hashtag && (
                  <span className="mb-4 inline-block text-4xl font-light text-primary-light">
                    {slide.hashtag}
                  </span>
                )}
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg text-white/90 md:text-xl">
                  {slide.subtitle}
                </p>
                <Link href="/about" className="btn-outline">
                  Baca Selanjutnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/40 md:left-8"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/40 md:right-8"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`slider-dot ${index === current ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
