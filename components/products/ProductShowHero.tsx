"use client";

import React from "react";
import { motion } from "motion/react";
import { Shield } from "lucide-react";

const ProductShowHero = ({
  title,
  subtitle,
  description,
  color = "#1a3a5f",
  icon,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  color?: string;
  icon?: React.ReactNode;
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
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400"
            >
              PRODUCT
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold leading-[1.2] text-[#1a3a5f] lg:text-4xl xl:text-5xl"
            >
              {title} <span className="text-primary">{subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-[#1a3a5f]/70"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative SVG / visual - minimal placeholder similar to other heroes */}
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="psGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0.2" />
                </linearGradient>
                <filter id="psGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#psGlow)">
                <circle
                  cx="200"
                  cy="150"
                  r="40"
                  fill="#FF9933"
                  opacity="0.12"
                />
                <circle cx="200" cy="150" r="28" fill="#FF9933" />
              </g>

              <g>
                <rect
                  x="180"
                  y="130"
                  width="40"
                  height="40"
                  rx="8"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M195 145 L205 155 M205 145 L195 155"
                  stroke="#1a3a5f"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowHero;
