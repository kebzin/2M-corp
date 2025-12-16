"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Rocket,
  Heart,
} from "lucide-react";

const OurMission = () => {
  const features = [
    {
      icon: Rocket,
      title: "Dynamic Ecosystem",
      description: "Nurturing and amplifying capabilities",
    },
    {
      icon: Lightbulb,
      title: "Spark Creativity",
      description: "Unlocking opportunities and innovation",
    },
    {
      icon: Users,
      title: "Foster Collaboration",
      description: "Building partnerships that drive success",
    },
    {
      icon: TrendingUp,
      title: "Excellence Focus",
      description: "Redefining boundaries of achievement",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-8 lg:py-12">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-[#FF9933] blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-[#1a3a5f] blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="mb-3 inline-block rounded-full bg-[#FF9933]/10 px-4 py-1 text-sm font-medium text-[#FF9933]">
                Our Mission
              </span>
              <h2 className="mb-4 text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
                Enabling Data-Driven Excellence Across Africa
              </h2>
              <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
                We provide a dynamic ecosystem that empowers data analysts and
                software developers. Through our pioneering platform and
                unwavering support, we unlock opportunities, spark creativity,
                and foster collaborations.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#FF9933] hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a3a5f]/10 text-[#1a3a5f] transition-all duration-300 group-hover:bg-[#FF9933] group-hover:text-white group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-1 font-semibold text-[#1a3a5f]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right SVG Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* SVG Animation - Mission Target with Achievement Paths */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient for mission rays */}
                <linearGradient
                  id="missionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.9">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0.2" />
                </linearGradient>

                {/* Radial gradient for glow */}
                <radialGradient id="targetGlow">
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
                </radialGradient>

                {/* Filter for glow effect */}
                <filter id="missionGlow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Grid Pattern */}
              <g opacity="0.08">
                {Array.from({ length: 9 }).map((_, i) => (
                  <React.Fragment key={i}>
                    <line
                      x1="0"
                      y1={50 * i}
                      x2="400"
                      y2={50 * i}
                      stroke="#1a3a5f"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                    />
                    <line
                      x1={50 * i}
                      y1="0"
                      x2={50 * i}
                      y2="400"
                      stroke="#1a3a5f"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                    />
                  </React.Fragment>
                ))}
              </g>

              {/* Central Target */}
              <g filter="url(#missionGlow)">
                {/* Outer glow pulse */}
                <circle cx="200" cy="200" r="100" fill="url(#targetGlow)">
                  <animate
                    attributeName="r"
                    values="100;120;100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.2;0.4;0.2"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Target rings */}
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="none"
                  stroke="#FF9933"
                  strokeWidth="3"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="none"
                  stroke="#FF9933"
                  strokeWidth="3"
                  opacity="0.5"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="40"
                  fill="none"
                  stroke="#FF9933"
                  strokeWidth="3"
                  opacity="0.7"
                />

                {/* Bullseye center */}
                <circle cx="200" cy="200" r="25" fill="#FF9933" opacity="0.3">
                  <animate
                    attributeName="r"
                    values="25;30;25"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="200" cy="200" r="18" fill="#FF9933" />

                {/* Target icon in center */}
                <circle cx="200" cy="200" r="10" fill="#1a3a5f" />
                <circle cx="200" cy="200" r="5" fill="white" />
              </g>

              {/* Achievement Paths - Arrows pointing to center */}
              {[
                { angle: 0, label: "Excellence" },
                { angle: 90, label: "Innovation" },
                { angle: 180, label: "Growth" },
                { angle: 270, label: "Impact" },
              ].map(({ angle, label }, i) => {
                const radians = (angle * Math.PI) / 180;
                const startX = 200 + Math.cos(radians) * 180;
                const startY = 200 + Math.sin(radians) * 180;
                const endX = 200 + Math.cos(radians) * 95;
                const endY = 200 + Math.sin(radians) * 95;
                const labelX = 200 + Math.cos(radians) * 160;
                const labelY = 200 + Math.sin(radians) * 160;

                return (
                  <g key={angle}>
                    {/* Animated path line */}
                    <line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="url(#missionGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,200;200,0"
                        dur="4s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                      />
                    </line>

                    {/* Arrowhead */}
                    <polygon
                      points={`${endX},${endY} ${
                        endX + Math.cos(radians + 2.8) * 12
                      },${endY + Math.sin(radians + 2.8) * 12} ${
                        endX + Math.cos(radians - 2.8) * 12
                      },${endY + Math.sin(radians - 2.8) * 12}`}
                      fill="#FF9933"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.5;1;0.5"
                        dur="2s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                      />
                    </polygon>

                    {/* Moving dot along path */}
                    <circle cx={startX} cy={startY} r="5" fill="#FF9933">
                      <animate
                        attributeName="cx"
                        values={`${startX};${endX};${startX}`}
                        dur="4s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        values={`${startY};${endY};${startY}`}
                        dur="4s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        dur="4s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Label text */}
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#1a3a5f"
                      fontSize="14"
                      fontWeight="bold"
                      opacity="0.8"
                    >
                      {label}
                    </text>
                  </g>
                );
              })}

              {/* Corner Achievement Icons */}
              {/* Top Left - Rocket */}
              <g>
                <circle cx="60" cy="60" r="25" fill="#60A5FA" opacity="0.2">
                  <animate
                    attributeName="opacity"
                    values="0.2;0.4;0.2"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M60 50 L60 70 M55 55 L60 50 L65 55 M55 65 L60 60 L65 65"
                  stroke="#60A5FA"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0;0,-5;0,0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>

              {/* Top Right - Lightbulb */}
              <g>
                <circle cx="340" cy="60" r="25" fill="#34D399" opacity="0.2">
                  <animate
                    attributeName="opacity"
                    values="0.2;0.4;0.2"
                    dur="3s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="340"
                  cy="55"
                  r="8"
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="2.5"
                />
                <rect
                  x="337"
                  y="63"
                  width="6"
                  height="6"
                  fill="#34D399"
                  rx="1"
                />
                <line
                  x1="332"
                  y1="50"
                  x2="332"
                  y2="48"
                  stroke="#34D399"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="348"
                  y1="50"
                  x2="348"
                  y2="48"
                  stroke="#34D399"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="334"
                  y1="45"
                  x2="332"
                  y2="43"
                  stroke="#34D399"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="346"
                  y1="45"
                  x2="348"
                  y2="43"
                  stroke="#34D399"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>

              {/* Bottom Left - Users */}
              <g>
                <circle cx="60" cy="340" r="25" fill="#A78BFA" opacity="0.2">
                  <animate
                    attributeName="opacity"
                    values="0.2;0.4;0.2"
                    dur="3s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="54" cy="335" r="5" fill="#A78BFA" />
                <circle cx="66" cy="335" r="5" fill="#A78BFA" />
                <path
                  d="M48 345 Q54 340, 60 345 M60 345 Q66 340, 72 345"
                  stroke="#A78BFA"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Bottom Right - TrendingUp */}
              <g>
                <circle cx="340" cy="340" r="25" fill="#F472B6" opacity="0.2">
                  <animate
                    attributeName="opacity"
                    values="0.2;0.4;0.2"
                    dur="3s"
                    begin="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <polyline
                  points="330,345 335,340 340,342 345,335"
                  stroke="#F472B6"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="342,335 345,335 345,338"
                  stroke="#F472B6"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Rotating orbit ring */}
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="#FF9933"
                strokeWidth="2"
                strokeDasharray="10,10"
                opacity="0.3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="20s"
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

export default OurMission;
