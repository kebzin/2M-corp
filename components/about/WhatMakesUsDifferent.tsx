"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Star,
  RefreshCw,
  Eye,
  Settings,
  Headphones,
  Heart,
} from "lucide-react";
import { TypingAnimation } from "../ui/typing-animation";

const WhatMakesUsDifferent = () => {
  const features = [
    {
      icon: Star,
      title: "Expertise",
      description:
        "We have gained expertise by working with leading organizations across Africa and delivering world-class data analytics and software solutions.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: RefreshCw,
      title: "Highly process oriented",
      description:
        "We have a well-defined process for all our tasks that helps in maintaining the holistic view of the projects.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Eye,
      title: "100% transparency",
      description:
        "Keeping 100% transparency is our mantra as we keep all the unexpected surprises away from you.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Settings,
      title: "Peace of mind",
      description:
        "We work with full dedication to ensure that the project gets completed on time. Thus, providing you the peace of mind.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Headphones,
      title: "Committed support",
      description:
        "Our proficient professionals are always committed to provide 24*7 support via calls, email, chat, and other media.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Heart,
      title: "Customer satisfaction",
      description:
        "Customer satisfaction is always our top priority and we ensure that by fulfilling all our client's requirements.",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="mb-3 inline-block rounded-full bg-[#FF9933]/10 px-4 py-1 text-sm font-medium text-[#FF9933]">
            What Makes Us Different
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
            What makes us different
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            2M Corp is a leading data analytics and software development firm
            and every organization&apos;s first choice. There are many things
            that makes 2M Corp different from the rest. Some of them are
            mentioned here.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center px-4"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div
                    className={`w-20 h-20 rounded-full ${feature.color} flex items-center justify-center`}
                  >
                    <Icon className="w-9 h-9" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#1a3a5f] mb-3 min-h-[60px] flex items-center justify-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
