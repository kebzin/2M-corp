"use client";

import React from "react";

const TrustedBy = () => {
  // Partner logos - these would be your actual client/partner logos
  const partners = [
    { name: "GAFA", logo: "GAFA" },
    { name: "LYEI", logo: "LYEI" },
    { name: "IVEPAUL", logo: "IVEPAUL" },
    { name: "Partner 4", logo: "PARTNER" },
    { name: "GAFA", logo: "GAFA" },
    { name: "LYEI", logo: "LYEI" },
    { name: "IVEPAUL", logo: "IVEPAUL" },
    { name: "Partner 4", logo: "PARTNER" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#1e3a5f] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-white/60">
          <span className="text-primary">Trusted By</span> Industry Leaders
          Worldwide
        </h2>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#1e3a5f] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#1e3a5f] to-transparent" />

          {/* Scrolling Track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll gap-16">
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex min-w-[200px] items-center justify-center"
                >
                  <div className="text-3xl font-bold tracking-wider text-white/80 transition-all hover:text-white">
                    {partner.logo}
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-scroll gap-16" aria-hidden="true">
              {partners.map((partner, index) => (
                <div
                  key={`duplicate-${partner.name}-${index}`}
                  className="flex min-w-[200px] items-center justify-center"
                >
                  <div className="text-3xl font-bold tracking-wider text-white/80 transition-all hover:text-white">
                    {partner.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
