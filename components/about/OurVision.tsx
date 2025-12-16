"use client";

import React from "react";
import { motion } from "motion/react";
import { Eye, Target, Zap, Globe } from "lucide-react";

const OurVision = () => {
  const features = [
    {
      icon: Eye,
      title: "Lead Innovation",
      description: "Pioneering data analytics revolution across Africa",
    },
    {
      icon: Target,
      title: "Empower Organizations",
      description: "Supporting government and financial institutions",
    },
    {
      icon: Zap,
      title: "Drive Insights",
      description: "Enabling data-driven decision making",
    },
    {
      icon: Globe,
      title: "Sustainable Growth",
      description: "Catalyzing development throughout the continent",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-8 lg:py-12">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#1a3a5f] blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#FF9933] blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left SVG Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* SVG Animation - Vision Telescope */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient for vision rays */}
                <linearGradient
                  id="visionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.8">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0.1" />
                </linearGradient>

                {/* Radial gradient for glow */}
                <radialGradient id="eyeGlow">
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
                </radialGradient>

                {/* Filter for blur effect */}
                <filter id="visionGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Grid */}
              <g opacity="0.1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={50 * i}
                    x2="400"
                    y2={50 * i}
                    stroke="#1a3a5f"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={50 * i}
                    y1="0"
                    x2={50 * i}
                    y2="400"
                    stroke="#1a3a5f"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                ))}
              </g>

              {/* Central Eye Icon */}
              <g filter="url(#visionGlow)">
                {/* Outer glow circles */}
                <circle cx="200" cy="200" r="80" fill="url(#eyeGlow)">
                  <animate
                    attributeName="r"
                    values="80;90;80"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Eye outer shape */}
                <ellipse
                  cx="200"
                  cy="200"
                  rx="60"
                  ry="40"
                  fill="none"
                  stroke="#1a3a5f"
                  strokeWidth="4"
                />

                {/* Iris */}
                <circle cx="200" cy="200" r="25" fill="#FF9933" opacity="0.3">
                  <animate
                    attributeName="r"
                    values="25;28;25"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="200" cy="200" r="20" fill="#FF9933" />

                {/* Pupil with animation */}
                <circle cx="200" cy="200" r="10" fill="#1a3a5f">
                  <animate
                    attributeName="r"
                    values="10;8;10"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Eye reflection */}
                <circle cx="207" cy="193" r="5" fill="white" opacity="0.8" />
              </g>

              {/* Vision Rays - Expanding from center */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const radians = (angle * Math.PI) / 180;
                const x1 = 200 + Math.cos(radians) * 70;
                const y1 = 200 + Math.sin(radians) * 70;
                const x2 = 200 + Math.cos(radians) * 180;
                const y2 = 200 + Math.sin(radians) * 180;

                return (
                  <g key={angle}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#visionGradient)"
                      strokeWidth="3"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,200;200,0"
                        dur="3s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                    {/* Endpoint dots */}
                    <circle cx={x2} cy={y2} r="5" fill="#FF9933">
                      <animate
                        attributeName="opacity"
                        values="0.3;1;0.3"
                        dur="3s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Orbiting Icons - Innovation Symbols */}
              {/* Target Icon */}
              <g>
                <circle cx="0" cy="0" r="15" fill="#60A5FA" opacity="0.2">
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    path="M 200,80 A 120,120 0 1,1 199,80"
                  />
                </circle>
                <circle
                  cx="0"
                  cy="0"
                  r="8"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="2"
                >
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    path="M 200,80 A 120,120 0 1,1 199,80"
                  />
                </circle>
                <circle cx="0" cy="0" r="3" fill="#60A5FA">
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    path="M 200,80 A 120,120 0 1,1 199,80"
                  />
                </circle>
              </g>

              {/* Globe Icon */}
              <g>
                <circle cx="0" cy="0" r="15" fill="#34D399" opacity="0.2">
                  <animateMotion
                    dur="12s"
                    repeatCount="indefinite"
                    path="M 80,200 A 120,120 0 1,1 80,199"
                  />
                </circle>
                <circle
                  cx="0"
                  cy="0"
                  r="8"
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="2"
                >
                  <animateMotion
                    dur="12s"
                    repeatCount="indefinite"
                    path="M 80,200 A 120,120 0 1,1 80,199"
                  />
                </circle>
                <ellipse
                  cx="0"
                  cy="0"
                  rx="3"
                  ry="8"
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="1.5"
                >
                  <animateMotion
                    dur="12s"
                    repeatCount="indefinite"
                    path="M 80,200 A 120,120 0 1,1 80,199"
                  />
                </ellipse>
              </g>

              {/* Zap Icon */}
              <g>
                <circle cx="0" cy="0" r="15" fill="#A78BFA" opacity="0.2">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path="M 200,320 A 120,120 0 1,1 199,320"
                  />
                </circle>
                <path
                  d="M 0,-8 L -4,0 L 2,0 L 0,8 L 4,0 L -2,0 Z"
                  fill="#A78BFA"
                >
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path="M 200,320 A 120,120 0 1,1 199,320"
                  />
                </path>
              </g>

              {/* Star Icon */}
              <g>
                <circle cx="0" cy="0" r="15" fill="#F472B6" opacity="0.2">
                  <animateMotion
                    dur="14s"
                    repeatCount="indefinite"
                    path="M 320,200 A 120,120 0 1,1 320,199"
                  />
                </circle>
                <path
                  d="M 0,-8 L -2,-3 L -8,-3 L -3,0 L -5,6 L 0,2 L 5,6 L 3,0 L 8,-3 L 2,-3 Z"
                  fill="#F472B6"
                >
                  <animateMotion
                    dur="14s"
                    repeatCount="indefinite"
                    path="M 320,200 A 120,120 0 1,1 320,199"
                  />
                </path>
              </g>

              {/* Data particles flowing outward */}
              {Array.from({ length: 20 }).map((_, i) => {
                const angle = (i * 360) / 20;
                const radians = (angle * Math.PI) / 180;
                const startX = 200 + Math.cos(radians) * 70;
                const startY = 200 + Math.sin(radians) * 70;
                const endX = 200 + Math.cos(radians) * 190;
                const endY = 200 + Math.sin(radians) * 190;

                return (
                  <circle
                    key={`particle-${i}`}
                    cx={startX}
                    cy={startY}
                    r="2"
                    fill="#FF9933"
                  >
                    <animate
                      attributeName="cx"
                      values={`${startX};${endX};${startX}`}
                      dur="4s"
                      begin={`${i * 0.2}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values={`${startY};${endY};${startY}`}
                      dur="4s"
                      begin={`${i * 0.2}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="4s"
                      begin={`${i * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })}
            </svg>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                Our Vision
              </span>
              <h2 className="mb-4 text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
                Leading Africa's Data Analytics Revolution
              </h2>
              <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
                At 2M Corp, we envision a future where data-driven insights
                empower every organization across Africa. We're committed to
                providing innovative and accessible solutions that drive
                informed decision-making and sustainable development.
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
        </div>
      </div>
    </section>
  );
};

export default OurVision;
