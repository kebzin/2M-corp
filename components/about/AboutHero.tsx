"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Award, Users, Globe, TrendingUp } from "lucide-react";

const AboutHero = () => {
  const stats = [
    {
      icon: Award,
      value: "20+",
      label: "Years of Excellence",
    },
    {
      icon: Users,
      value: "100+",
      label: "Organizations Served",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Countries Across Africa",
    },
    {
      icon: TrendingUp,
      value: "500+",
      label: "Projects Completed",
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
              ABOUT 2M CORP
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-3xl font-bold leading-[1.2] text-[#1a3a5f] lg:text-4xl xl:text-5xl"
            >
              Delivering world-class{" "}
              <span className="text-primary">data analytics</span> solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed text-[#1a3a5f]/70"
            >
              2M Corp is on a mission to provide safe, transparent, instant, and
              convenient data analytics and software solutions to government
              agencies, financial institutions, and organizations across Africa.
              With over 20 years of experience in data analysis, large-scale
              impact evaluations, surveys, and custom software development, we
              transform data into actionable insights that drive development and
              growth.
            </motion.p>
          </div>

          {/* Right SVG Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* SVG Animation - Company Growth & Impact */}
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient for growth line */}
                <linearGradient
                  id="aboutGradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.9">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="aboutGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Pulse animation gradient */}
                <radialGradient id="pulseGradient">
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background Elements - Africa Map Outline */}
              <g opacity="0.08">
                <path
                  d="M180 80 L200 70 L220 75 L240 65 L250 80 L260 100 L255 130 L245 160 L235 180 L220 200 L200 210 L180 205 L165 190 L155 170 L150 145 L155 115 L165 95 Z"
                  fill="#1a3a5f"
                />
              </g>

              {/* Main Growth Chart */}
              <g>
                {/* Grid Lines */}
                <line
                  x1="50"
                  y1="220"
                  x2="350"
                  y2="220"
                  stroke="#1a3a5f"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <line
                  x1="50"
                  y1="180"
                  x2="350"
                  y2="180"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  opacity="0.2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50"
                  y1="140"
                  x2="350"
                  y2="140"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  opacity="0.2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50"
                  y1="100"
                  x2="350"
                  y2="100"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  opacity="0.2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50"
                  y1="60"
                  x2="350"
                  y2="60"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  opacity="0.2"
                  strokeDasharray="5,5"
                />

                {/* Growth Curve Path */}
                <path
                  d="M 50 200 Q 100 180, 125 160 T 200 100 T 275 60 T 350 50"
                  stroke="url(#aboutGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Area under curve */}
                <path
                  d="M 50 200 Q 100 180, 125 160 T 200 100 T 275 60 T 350 50 L 350 220 L 50 220 Z"
                  fill="url(#aboutGradient)"
                  opacity="0.1"
                />
              </g>

              {/* Milestone Markers */}
              {/* 2004 - Foundation */}
              <g filter="url(#aboutGlow)">
                <circle cx="50" cy="200" r="8" fill="#60A5FA">
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="50"
                  y="235"
                  textAnchor="middle"
                  fill="#1a3a5f"
                  fontSize="10"
                  fontWeight="bold"
                >
                  2004
                </text>
              </g>

              {/* 2010 - Growth */}
              <g>
                <circle cx="125" cy="160" r="8" fill="#34D399">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="2.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="125"
                  y="195"
                  textAnchor="middle"
                  fill="#1a3a5f"
                  fontSize="10"
                  fontWeight="bold"
                >
                  2010
                </text>
              </g>

              {/* 2015 - Expansion */}
              <g>
                <circle cx="200" cy="100" r="8" fill="#A78BFA">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="2.5s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="200"
                  y="135"
                  textAnchor="middle"
                  fill="#1a3a5f"
                  fontSize="10"
                  fontWeight="bold"
                >
                  2015
                </text>
              </g>

              {/* 2020 - Digital Era */}
              <g>
                <circle cx="275" cy="60" r="8" fill="#F472B6">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="2.5s"
                    begin="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="275"
                  y="95"
                  textAnchor="middle"
                  fill="#1a3a5f"
                  fontSize="10"
                  fontWeight="bold"
                >
                  2020
                </text>
              </g>

              {/* 2024 - Present */}
              <g filter="url(#aboutGlow)">
                <circle cx="350" cy="50" r="12" fill="#FF9933">
                  <animate
                    attributeName="r"
                    values="12;16;12"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Pulse rings */}
                <circle
                  cx="350"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="#FF9933"
                  strokeWidth="2"
                  opacity="0"
                >
                  <animate
                    attributeName="r"
                    values="12;30"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="350"
                  y="85"
                  textAnchor="middle"
                  fill="#FF9933"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2024+
                </text>
              </g>

              {/* Floating Data Icons */}
              {/* Award Icon */}
              <g opacity="0.6">
                <circle cx="80" cy="140" r="15" fill="#60A5FA" opacity="0.2">
                  <animate
                    attributeName="cy"
                    values="140;130;140"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M75 135 v8 l5 3 l5 -3 v-8 M70 135 h20 v3 q0 5 -10 7 q-10 -2 -10 -7 v-3"
                  stroke="#60A5FA"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="transform"
                    values="translate(0,0);translate(0,-10);translate(0,0)"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>

              {/* Users Icon */}
              <g opacity="0.6">
                <circle cx="240" cy="120" r="15" fill="#34D399" opacity="0.2">
                  <animate
                    attributeName="cy"
                    values="120;110;120"
                    dur="3.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="235" cy="118" r="3" fill="#34D399">
                  <animate
                    attributeName="transform"
                    values="translate(0,0);translate(0,-10);translate(0,0)"
                    dur="3.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="245" cy="118" r="3" fill="#34D399">
                  <animate
                    attributeName="transform"
                    values="translate(0,0);translate(0,-10);translate(0,0)"
                    dur="3.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Globe Icon */}
              <g opacity="0.6">
                <circle cx="320" cy="100" r="15" fill="#A78BFA" opacity="0.2">
                  <animate
                    attributeName="cy"
                    values="100;90;100"
                    dur="4s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="320"
                  cy="100"
                  r="8"
                  fill="none"
                  stroke="#A78BFA"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="transform"
                    values="translate(0,0);translate(0,-10);translate(0,0)"
                    dur="4s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
