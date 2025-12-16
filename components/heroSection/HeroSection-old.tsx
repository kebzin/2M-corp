"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    "Data Analytics",
    "Software Development",
    "Cloud Solutions",
    "Business Intelligence",
    "Digital Transformation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0B4C8C] via-[#0A3A6B] to-[#082B52]">
      {/* Subtle Code Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute right-0 top-20 font-mono text-[10px] leading-relaxed text-white">
          <div className="space-y-1">
            <div>&lt;!DOCTYPE html&gt;</div>
            <div>&lt;html lang=&quot;en&quot;&gt;</div>
            <div className="pl-4">&lt;head&gt;</div>
            <div className="pl-8">&lt;meta charset=&quot;UTF-8&quot;&gt;</div>
            <div className="pl-8">
              &lt;meta name=&quot;viewport&quot;
              content=&quot;width=device-width&quot;&gt;
            </div>
            <div className="pl-4">&lt;/head&gt;</div>
            <div className="pl-4">&lt;body&gt;</div>
            <div className="pl-8">&lt;!-- Content --&gt;</div>
            <div className="pl-4">&lt;/body&gt;</div>
            <div>&lt;/html&gt;</div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-40 pb-20 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="z-10">
          {/* Main Heading with animated word */}
          <h1 className="mb-6 text-3xl font-bold leading-[1.2] text-white lg:text-4xl xl:text-5xl">
            Launch your{" "}
            <span className="inline-block text-[#FF9933] transition-all duration-500">
              {words[currentWord]}
            </span>{" "}
            system, in a fast, secure, and reliable way
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/80 lg:text-base">
            2M Corp enables organizations to deliver world-class data analytics,
            custom software solutions, and Microsoft 365 implementations with
            speed, security, and scalability.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#FF9933] px-8 py-6 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#FF9933]/90 hover:shadow-xl"
          >
            <Link href="/contact">Schedule a Strategy Call</Link>
          </Button>
        </div>

        {/* Right Content - Simple Mockup */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          {/* Dashboard Container */}
          <div className="relative w-full max-w-[600px]">
            {/* Background Code Snippet */}
            <div className="absolute -right-32 top-32 hidden font-mono text-xs leading-relaxed text-white/10 xl:block">
              <div>&lt;symbol id=&quot;analytics&quot;&gt;</div>
              <div className="pl-4">
                &lt;path d=&quot;M0 0 L100 50&quot;/&gt;
              </div>
              <div>&lt;/symbol&gt;</div>
            </div>

            {/* Dashboard Frame */}
            <div className="relative rounded-3xl border-2 border-white/20 bg-black/40 p-6 backdrop-blur-sm">
              {/* Top Cards Row */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                {/* Statistics Card */}
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="rounded-lg bg-white/10 p-2">
                      <svg
                        className="size-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-green-400">+38% ↗</span>
                  </div>
                  <div className="mb-1 text-2xl font-bold text-white">
                    $13.4k
                  </div>
                  <div className="mb-2 text-sm text-gray-400">Statistics</div>
                  <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                    Last 6 months
                  </div>
                </div>

                {/* Customers Card */}
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 backdrop-blur-sm">
                  <div className="mb-2 text-sm text-gray-400">Customers</div>
                  <div className="mb-1 text-xs text-gray-500">
                    Daily customers
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">
                        42.4k
                      </span>
                      <span className="ml-2 text-sm text-green-400">+9.2%</span>
                    </div>
                    <div className="text-4xl">👨‍💼</div>
                  </div>
                </div>
              </div>

              {/* Total Sales Card */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      className="size-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <span className="font-semibold text-white">
                      Total sales
                    </span>
                  </div>
                  <button className="rounded-lg border border-white/20 bg-white/5 px-3 py-1 text-xs text-gray-400">
                    Details
                  </button>
                </div>

                <div className="mb-4 flex items-end gap-2">
                  <span className="text-3xl font-bold text-white">
                    $2,150.00
                  </span>
                  <span className="mb-1 text-sm text-green-400">+5%</span>
                </div>

                {/* Store Stats */}
                <div className="mb-4 space-y-3 border-b border-white/10 pb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        className="size-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-400">Online Store</span>
                    </div>
                    <div>
                      <span className="text-white">$20k</span>
                      <span className="ml-2 text-green-400">+12.6%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        className="size-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span className="text-gray-400">Offline Store</span>
                    </div>
                    <div>
                      <span className="text-white">$20k</span>
                      <span className="ml-2 text-red-400">-4.2%</span>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="relative h-32">
                  {/* Chart bars */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-1 px-2">
                    {[
                      40, 55, 35, 60, 45, 70, 50, 65, 40, 55, 45, 75, 85, 60,
                      70, 80,
                    ].map((height, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t bg-gray-700/50"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  {/* Chart line */}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      points="0,80 50,60 100,70 150,45 200,55 250,25 300,15 350,30"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                {/* Time labels */}
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>11:00</span>
                  <span>14:00</span>
                  <span>17:00</span>
                  <span>20:00</span>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute -left-4 -top-4 size-8 border-l-2 border-t-2 border-white/30" />
            <div className="absolute -right-4 -top-4 size-8 border-r-2 border-t-2 border-white/30" />
            <div className="absolute -bottom-4 -left-4 size-8 border-b-2 border-l-2 border-white/30" />
            <div className="absolute -bottom-4 -right-4 size-8 border-b-2 border-r-2 border-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
