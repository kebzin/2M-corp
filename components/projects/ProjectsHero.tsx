"use client";

import React from "react";
import { motion } from "motion/react";
import { Briefcase, Users, Globe, Award } from "lucide-react";

const ProjectsHero = () => {
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
              OUR PROJECTS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-3xl font-bold leading-[1.2] text-[#1a3a5f] lg:text-4xl xl:text-5xl"
            >
              Transforming businesses across{" "}
              <span className="text-primary">Africa</span> with innovative
              solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed text-[#1a3a5f]/70"
            >
              Discover our portfolio of successful projects spanning government
              agencies, international organizations, and private sector clients.
              From large-scale data collection systems to custom software
              solutions, we deliver excellence across diverse sectors.
            </motion.p>
          </div>

          {/* Right SVG Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* SVG Animation - Project Workflow Diagram */}
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient for connections */}
                <linearGradient
                  id="projectGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.8">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0.2" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="projectGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Grid Pattern */}
              <g opacity="0.1">
                <line
                  x1="0"
                  y1="75"
                  x2="400"
                  y2="75"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="0"
                  y1="150"
                  x2="400"
                  y2="150"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="0"
                  y1="225"
                  x2="400"
                  y2="225"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="300"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="300"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="300"
                  y1="0"
                  x2="300"
                  y2="300"
                  stroke="#1a3a5f"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              </g>

              {/* Main Path - Project Lifecycle */}
              <path
                d="M 50 150 Q 125 80, 200 150 T 350 150"
                stroke="url(#projectGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,1000;1000,0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Milestone Nodes */}
              {/* Start Node - Discovery */}
              <g filter="url(#projectGlow)">
                <circle cx="50" cy="150" r="25" fill="#60A5FA" opacity="0.3">
                  <animate
                    attributeName="r"
                    values="25;30;25"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="50" cy="150" r="18" fill="#60A5FA">
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Briefcase Icon */}
                <rect
                  x="45"
                  y="145"
                  width="10"
                  height="8"
                  fill="white"
                  stroke="white"
                  strokeWidth="1"
                  rx="1"
                />
                <rect x="47" y="143" width="6" height="3" fill="white" />
              </g>

              {/* Mid Node 1 - Planning */}
              <g>
                <circle cx="125" cy="80" r="20" fill="#34D399" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="3s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Users Icon */}
                <circle cx="120" cy="78" r="3" fill="white" />
                <circle cx="130" cy="78" r="3" fill="white" />
                <path
                  d="M115 85 Q120 80, 125 85 M125 85 Q130 80, 135 85"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>

              {/* Center Node - Execution */}
              <g filter="url(#projectGlow)">
                <circle cx="200" cy="150" r="28" fill="#FF9933" opacity="0.3">
                  <animate
                    attributeName="r"
                    values="28;33;28"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="200" cy="150" r="22" fill="#FF9933">
                  <animate
                    attributeName="opacity"
                    values="0.9;1;0.9"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Gear/Settings Icon */}
                <circle cx="200" cy="150" r="6" fill="white" />
                <circle
                  cx="200"
                  cy="150"
                  r="10"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="200"
                  y1="140"
                  x2="200"
                  y2="144"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="200"
                  y1="156"
                  x2="200"
                  y2="160"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="190"
                  y1="150"
                  x2="194"
                  y2="150"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="206"
                  y1="150"
                  x2="210"
                  y2="150"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>

              {/* Mid Node 2 - Delivery */}
              <g>
                <circle cx="275" cy="80" r="20" fill="#A78BFA" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="3s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Globe Icon */}
                <circle
                  cx="275"
                  cy="80"
                  r="8"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <ellipse
                  cx="275"
                  cy="80"
                  rx="3"
                  ry="8"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <line
                  x1="267"
                  y1="80"
                  x2="283"
                  y2="80"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </g>

              {/* End Node - Success */}
              <g filter="url(#projectGlow)">
                <circle cx="350" cy="150" r="25" fill="#10B981" opacity="0.3">
                  <animate
                    attributeName="r"
                    values="25;30;25"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="350" cy="150" r="18" fill="#10B981">
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Award/Trophy Icon */}
                <path
                  d="M345 145 v8 l5 3 l5 -3 v-8 M340 145 h20 v3 q0 5 -10 7 q-10 -2 -10 -7 v-3"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>

              {/* Animated Data Points */}
              <circle cx="0" cy="0" r="4" fill="#FF9933">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M 50 150 Q 125 80, 200 150 T 350 150"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="0" cy="0" r="4" fill="#60A5FA">
                <animateMotion
                  dur="4s"
                  begin="1s"
                  repeatCount="indefinite"
                  path="M 50 150 Q 125 80, 200 150 T 350 150"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="4s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="0" cy="0" r="4" fill="#34D399">
                <animateMotion
                  dur="4s"
                  begin="2s"
                  repeatCount="indefinite"
                  path="M 50 150 Q 125 80, 200 150 T 350 150"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="4s"
                  begin="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Connecting Sub-lines */}
              <line
                x1="50"
                y1="150"
                x2="125"
                y2="80"
                stroke="#60A5FA"
                strokeWidth="2"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.5;0.2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="200"
                y1="150"
                x2="275"
                y2="80"
                stroke="#A78BFA"
                strokeWidth="2"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.5;0.2"
                  dur="3s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </line>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
