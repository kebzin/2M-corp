"use client";

import React from "react";
import { motion } from "motion/react";
import { Code, Database, Cloud, Shield } from "lucide-react";

const ServicesHero = () => {
  const stats = [
    {
      icon: Code,
      value: "500+",
      label: "Custom Solutions",
    },
    {
      icon: Database,
      value: "1M+",
      label: "Data Points Analyzed",
    },
    {
      icon: Cloud,
      value: "99.9%",
      label: "Uptime Guarantee",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Secure & Compliant",
    },
  ];

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
              OUR SERVICES
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-3xl font-bold leading-[1.2] text-[#1a3a5f] lg:text-4xl xl:text-5xl"
            >
              Comprehensive{" "}
              <span className="text-primary">software solutions</span> for your
              business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed text-[#1a3a5f]/70"
            >
              From custom software development to data analytics, Microsoft 365
              implementation, and cybersecurity solutions—we provide end-to-end
              technology services that empower organizations across Africa to
              achieve their digital transformation goals.
            </motion.p>
          </div>

          {/* Right SVG Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* SVG Animation - Connected Network Diagram */}
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient for connections */}
                <linearGradient
                  id="connectionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.8">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0.2" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection Lines */}
              <g stroke="url(#connectionGradient)" strokeWidth="2" fill="none">
                {/* Central hub to outer nodes */}
                <line x1="200" y1="150" x2="100" y2="80">
                  <animate
                    attributeName="stroke-opacity"
                    values="0.3;1;0.3"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </line>
                <line x1="200" y1="150" x2="300" y2="80">
                  <animate
                    attributeName="stroke-opacity"
                    values="0.3;1;0.3"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </line>
                <line x1="200" y1="150" x2="100" y2="220">
                  <animate
                    attributeName="stroke-opacity"
                    values="0.3;1;0.3"
                    dur="2s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </line>
                <line x1="200" y1="150" x2="300" y2="220">
                  <animate
                    attributeName="stroke-opacity"
                    values="0.3;1;0.3"
                    dur="2s"
                    begin="1.5s"
                    repeatCount="indefinite"
                  />
                </line>
              </g>

              {/* Nodes */}
              {/* Center Node */}
              <g filter="url(#glow)">
                <circle cx="200" cy="150" r="30" fill="#FF9933" opacity="0.2">
                  <animate
                    attributeName="r"
                    values="30;35;30"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="200" cy="150" r="20" fill="#FF9933" />
                {/* Center Icon - Code brackets */}
                <path
                  d="M195 145 L190 150 L195 155 M205 145 L210 150 L205 155"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Top Left - Data */}
              <g>
                <circle cx="100" cy="80" r="20" fill="#60A5FA" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M95 75 h10 v10 h-10 z M95 77 h10 M95 79 h10 M95 81 h10"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>

              {/* Top Right - Cloud */}
              <g>
                <circle cx="300" cy="80" r="20" fill="#34D399" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="3s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M295 82 h10 M295 78 q0 -3 3 -3 q3 0 3 3 q3 0 3 3 h-9 z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>

              {/* Bottom Left - Security */}
              <g>
                <circle cx="100" cy="220" r="20" fill="#A78BFA" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="3s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M100 215 v-5 l5 -2 l5 2 v5 q0 5 -5 7 q-5 -2 -5 -7 z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>

              {/* Bottom Right - Analytics */}
              <g>
                <circle cx="300" cy="220" r="20" fill="#F472B6" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="3s"
                    begin="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M295 223 v-8 M298 223 v-12 M301 223 v-6 M304 223 v-10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>

              {/* Animated Particles */}
              <circle cx="0" cy="0" r="3" fill="#FF9933">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M200,150 L100,80"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="0" cy="0" r="3" fill="#FF9933">
                <animateMotion
                  dur="2s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  path="M200,150 L300,80"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2s"
                  begin="0.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
