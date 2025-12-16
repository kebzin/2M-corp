"use client";

import React from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  Code2,
  Smartphone,
  Cloud,
  Activity,
  PieChart,
  GraduationCap,
} from "lucide-react";

const PlatformShowcase = () => {
  const floatingIcons = [
    {
      icon: "💻",
      label: "Data Analytics",
      bgColor: "bg-blue-200",
      position: { left: "2rem", top: "4rem" },
      delay: 0.2,
    },
    {
      icon: "🏪",
      label: "Custom Software",
      bgColor: "bg-green-200",
      position: { left: "3rem", top: "14rem" },
      delay: 0.4,
    },
    {
      icon: "📱",
      label: "Mobile Solutions",
      bgColor: "bg-purple-200",
      position: { left: "4rem", bottom: "8rem" },
      delay: 0.6,
    },
    {
      icon: "💳",
      label: "Microsoft 365",
      bgColor: "bg-gray-300",
      position: { right: "2rem", top: "6rem" },
      delay: 0.3,
    },
    {
      icon: "👤",
      label: "M&E Systems",
      bgColor: "bg-pink-200",
      position: { right: "3rem", top: "11rem" },
      delay: 0.5,
    },
    {
      icon: "💰",
      label: "Data Visualization",
      bgColor: "bg-teal-200",
      position: { right: "4rem", bottom: "10rem" },
      delay: 0.7,
    },
    {
      icon: "🎁",
      label: "Training Programs",
      bgColor: "bg-yellow-200",
      position: { right: "5rem", bottom: "4rem" },
      delay: 0.8,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex min-h-[500px] items-center justify-center">
          {/* Floating Feature Icons */}
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.3,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: item.position.left ? 0 : 0,
                y: 0,
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: item.delay },
                scale: { duration: 0.6, delay: item.delay },
                x: { duration: 0.8, delay: item.delay, type: "spring" },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute hidden lg:block"
              style={item.position}
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-2xl ${item.bgColor} shadow-lg`}
              >
                <span className="text-3xl">{item.icon}</span>
              </div>
            </motion.div>
          ))}

          {/* Center Content */}
          <div className="relative z-10 max-w-3xl text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center justify-center gap-4"
            >
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg">
                <img
                  src="/logos/logo-color.svg"
                  alt="2M Corp"
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#1a3a5f] lg:text-3xl">
                  2M Corp
                </h3>
                <p className="text-sm text-[#5a6c7d]">
                  Data & Software Solutions
                </p>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold text-[#1a3a5f] lg:text-4xl xl:text-5xl"
            >
              Comprehensive Data Analytics & Software Development Platform
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#5a6c7d] lg:text-lg"
            >
              A comprehensive suite designed to drive data-driven decisions &
              digital transformation. Our expert-led solutions platform is armed
              with highly customizable services that support every business
              model. From impact evaluations to custom software development,
              we&apos;re the one-stop solution to transform organizations across
              Africa with scalable, flexible, and future-proof solutions.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl lg:text-lg">
                Explore 2M Solutions
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
