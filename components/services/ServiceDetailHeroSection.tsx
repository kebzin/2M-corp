"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const ServiceDetailHeroSection: React.FC<Props> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <section
      className="relative bg-white py-12 lg:py-16 pt-24 lg:pt-28"
      style={{
        backgroundImage: "url('/home/bg-wave.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[45%_55%]">
          {/* Left Content */}

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400"
            >
              {subtitle ?? "SERVICE"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-3xl font-bold leading-[1.2] text-[#1a3a5f] lg:text-4xl xl:text-5xl"
            >
              {title ?? "Enterprise Solutions & Services"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed text-[#1a3a5f]/70"
            >
              {description ??
                "We provide end-to-end solutions across software, data collection and analytics, and digital transformation. Our approach focuses on measurable outcomes and sustainable impact."}
            </motion.p>
          </div>

          {/* Right SVG / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="svcGrad"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              <g opacity="0.08">
                <path
                  d="M180 80 L200 70 L220 75 L240 65 L250 80 L260 100 L255 130 L245 160 L235 180 L220 200 L200 210 L180 205 L165 190 L155 170 L150 145 L155 115 L165 95 Z"
                  fill="#1a3a5f"
                />
              </g>

              <g>
                <line
                  x1="40"
                  y1="220"
                  x2="360"
                  y2="220"
                  stroke="#1a3a5f"
                  strokeWidth="2"
                  opacity="0.15"
                />
                <path
                  d="M 40 200 Q 100 170, 150 140 T 220 100 T 290 70 T 360 60"
                  stroke="url(#svcGrad)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 40 200 Q 100 170, 150 140 T 220 100 T 290 70 T 360 60 L 360 220 L 40 220 Z"
                  fill="url(#svcGrad)"
                  opacity="0.08"
                />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHeroSection;
