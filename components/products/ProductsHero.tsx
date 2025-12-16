"use client";

import React from "react";
import { motion } from "motion/react";
import { Package, Layers, Database, Cpu } from "lucide-react";

const ProductsHero = () => {
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
              OUR PRODUCTS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-3xl font-bold leading-[1.2] text-[#1a3a5f] lg:text-4xl xl:text-5xl"
            >
              Powerful Products Built for{" "}
              <span className="text-primary">African Organizations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed text-[#1a3a5f]/70"
            >
              Discover our suite of enterprise-grade software solutions designed
              to streamline operations, enhance data management, and drive
              digital transformation across health, finance, and education
              sectors.
            </motion.p>
          </div>

          {/* Right SVG Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <svg
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Background Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="url(#bg-gradient)"
                  opacity="0.1"
                />

                {/* Central Product Hub */}
                <g>
                  {/* Main Circle */}
                  <circle cx="250" cy="250" r="60" fill="url(#hub-gradient)" />
                  <circle cx="250" cy="250" r="50" fill="white" opacity="0.2" />

                  {/* Central Icon */}
                  <g transform="translate(230, 230)">
                    <rect
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      rx="8"
                      fill="white"
                      opacity="0.9"
                    />
                    <path
                      d="M10 15 L30 15 M10 20 L30 20 M10 25 L30 25"
                      stroke="#FF9933"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                </g>

                {/* Product Nodes - 6 surrounding products */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const x = 250 + Math.cos(angle) * 140;
                  const y = 250 + Math.sin(angle) * 140;

                  return (
                    <g key={i}>
                      {/* Connection Line */}
                      <line
                        x1="250"
                        y1="250"
                        x2={x}
                        y2={y}
                        stroke="url(#line-gradient)"
                        strokeWidth="2"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.2;0.6;0.2"
                          dur={`${3 + i * 0.5}s`}
                          repeatCount="indefinite"
                        />
                      </line>

                      {/* Product Node */}
                      <circle
                        cx={x}
                        cy={y}
                        r="35"
                        fill="url(#node-gradient)"
                        opacity="0.9"
                      >
                        <animate
                          attributeName="r"
                          values="35;38;35"
                          dur={`${4 + i * 0.3}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={x} cy={y} r="30" fill="white" />

                      {/* Icon representations */}
                      <g transform={`translate(${x - 12}, ${y - 12})`}>
                        {i % 3 === 0 && (
                          <rect
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                            rx="4"
                            fill="none"
                            stroke="#1a3a5f"
                            strokeWidth="2"
                          />
                        )}
                        {i % 3 === 1 && (
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill="none"
                            stroke="#FF9933"
                            strokeWidth="2"
                          />
                        )}
                        {i % 3 === 2 && (
                          <path
                            d="M2 2 L22 2 L22 22 L2 22 Z M2 8 L22 8"
                            stroke="#1a3a5f"
                            strokeWidth="2"
                            fill="none"
                          />
                        )}
                      </g>

                      {/* Glow Effect */}
                      <circle
                        cx={x}
                        cy={y}
                        r="40"
                        fill="none"
                        stroke="#FF9933"
                        strokeWidth="1"
                        opacity="0.2"
                      >
                        <animate
                          attributeName="r"
                          values="40;50;40"
                          dur={`${3 + i * 0.4}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.2;0;0.2"
                          dur={`${3 + i * 0.4}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                })}

                {/* Floating Data Particles */}
                {[...Array(8)].map((_, i) => {
                  const angle = i * 45 * (Math.PI / 180);
                  const radius = 180 + (i % 2) * 20;
                  const x = 250 + Math.cos(angle) * radius;
                  const y = 250 + Math.sin(angle) * radius;

                  return (
                    <circle
                      key={`particle-${i}`}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="#FF9933"
                      opacity="0.6"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`0 250 250`}
                        to={`360 250 250`}
                        dur={`${20 + i * 2}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.3;0.8;0.3"
                        dur={`${2 + i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })}

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient
                    id="bg-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1a3a5f" />
                    <stop offset="100%" stopColor="#FF9933" />
                  </linearGradient>
                  <linearGradient
                    id="hub-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF9933" />
                    <stop offset="100%" stopColor="#ff7a00" />
                  </linearGradient>
                  <linearGradient
                    id="node-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1a3a5f" />
                    <stop offset="50%" stopColor="#2a4a6f" />
                    <stop offset="100%" stopColor="#1a3a5f" />
                  </linearGradient>
                  <linearGradient
                    id="line-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#1a3a5f" opacity="0.5" />
                    <stop offset="50%" stopColor="#FF9933" />
                    <stop offset="100%" stopColor="#1a3a5f" opacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
