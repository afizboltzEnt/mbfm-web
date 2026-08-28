"use client";

import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function StatsCounter({
  value,
  label,
  suffix = "",
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center" data-aos="fade-up">
      <div className="text-4xl font-bold text-primary md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-dark-gray md:text-base">
        {label}
      </div>
    </div>
  );
}
