"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const ImpactSection = () => {
  const stats = [
    {
      value: "20+",
      label: "Years of\nExperience",
      delay: 0.2,
    },
    {
      value: "500+",
      label: "Projects\nCompleted",
      delay: 0.4,
    },
    {
      value: "15+",
      label: "Countries\nServed",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] py-20 lg:py-32">
      {/* Background Image - People Icons Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full max-w-4xl ">
          <Image
            src="/home/bg-counter-img-min.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pr-8"
          >
            <h2 className="mb-6 text-4xl font-bold leading-[1.15] text-[#1a3a5f] lg:text-5xl xl:text-[3.5rem]">
              Transforming Data Into Action Across Africa
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-[#5a6c7d]">
              With over two decades of expertise in data analytics, software
              development, and impact evaluations, we empower organizations
              across Africa to make data-driven decisions that transform
              communities and drive sustainable growth.
            </p>
          </motion.div>

          {/* Right Content - Stats with Staggered Circular Progress */}
          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[550px] lg:justify-end">
            {/* Stats Container - Absolute Positioning for Staggered Layout */}
            <div className="relative h-full w-full max-w-md">
              {/* Stat 1 - Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute right-0 top-0"
              >
                {/* Circular Progress */}
                <div className="relative flex size-32 shrink-0 items-center justify-center lg:size-36">
                  {/* Dotted Background Circle */}
                  <svg className="absolute inset-0 size-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="42%"
                      fill="none"
                      stroke="#d1d5db"
                      strokeWidth="1.5"
                      strokeDasharray="2 4"
                    />
                  </svg>
                  {/* Continuously Rotating Blue Arc */}
                  <motion.svg
                    className="absolute inset-0 size-full -rotate-90"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="50%"
                      cy="50%"
                      r="42%"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="160 400"
                    />
                  </motion.svg>
                  <div className="relative z-10 flex flex-col items-center justify-center px-2 text-center">
                    <div className="text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
                      {stats[0].value}
                    </div>
                    <div className="mt-1.5 whitespace-pre-line text-[0.65rem] font-medium leading-tight text-[#5a6c7d] lg:text-xs">
                      {stats[0].label}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stat 2 - Middle Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-0 top-1/2 -translate-y-1/2 lg:left-8"
              >
                <div className="relative flex size-44 shrink-0 items-center justify-center lg:size-52">
                  <svg className="absolute inset-0 size-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="42%"
                      fill="none"
                      stroke="#d1d5db"
                      strokeWidth="1.5"
                      strokeDasharray="2 4"
                    />
                  </svg>
                  <motion.svg
                    className="absolute inset-0 size-full -rotate-90"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="50%"
                      cy="50%"
                      r="42%"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="160 400"
                    />
                  </motion.svg>
                  <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
                    <div className="text-5xl font-bold text-[#1a3a5f] lg:text-6xl">
                      {stats[1].value}
                    </div>
                    <div className="mt-2 whitespace-pre-line text-sm font-medium leading-tight text-[#5a6c7d] lg:text-base">
                      {stats[1].label}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stat 3 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-0 right-8 lg:right-12"
              >
                <div className="relative flex size-36 shrink-0 items-center justify-center lg:size-44">
                  <svg className="absolute inset-0 size-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="42%"
                      fill="none"
                      stroke="#d1d5db"
                      strokeWidth="1.5"
                      strokeDasharray="2 4"
                    />
                  </svg>
                  <motion.svg
                    className="absolute inset-0 size-full -rotate-90"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="50%"
                      cy="50%"
                      r="42%"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="160 400"
                    />
                  </motion.svg>
                  <div className="relative z-10 flex flex-col items-center justify-center px-3 text-center">
                    <div className="text-4xl font-bold text-[#1a3a5f] lg:text-5xl">
                      {stats[2].value}
                    </div>
                    <div className="mt-2 whitespace-pre-line text-xs font-medium leading-tight text-[#5a6c7d] lg:text-sm">
                      {stats[2].label}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Curved Connecting Lines */}
              <svg
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 400 550"
                fill="none"
              >
                <motion.path
                  d="M 320 90 Q 240 180 170 275"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  viewport={{ once: true }}
                />
                <motion.path
                  d="M 170 295 Q 240 380 310 460"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  viewport={{ once: true }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
