"use client";

import React from "react";
import { motion } from "motion/react";
import { Shield, FileCheck, Zap, Users, TrendingUp, Award } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Proven Expertise",
      description:
        "Over 20 years of experience delivering data analytics and software solutions across Africa with a track record of successful implementations.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Standards",
      description:
        "Adherence to international standards and best practices, ensuring your solutions meet regulatory requirements and industry benchmarks.",
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description:
        "Fast deployment and seamless integration with your existing systems. Get up and running quickly without disrupting your operations.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "24/7 technical support and ongoing maintenance to ensure your systems run smoothly. Our team is always available when you need us.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "Future-proof technology that grows with your business. Our solutions are designed to adapt and scale as your needs evolve.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes ensure you receive reliable, high-performance solutions that exceed expectations.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16  max-w-4xl"
        >
          <span className="mb-3 inline-block rounded-full bg-[#FF9933]/10 px-4 py-1 text-sm font-medium text-[#FF9933]">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a3a5f] mb-4">
            Why your business would love{" "}
            <span className="text-[#FF9933]">2M Corp's</span> technology
            solutions
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl">
            If you are looking for a robust technology partner to make your
            business grow and keep customers satisfied, this is the solution for
            you. Here's why:
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex rounded-xl bg-gray-100 p-4 text-[#1a3a5f] transition-all duration-300 group-hover:bg-[#FF9933]/10 group-hover:text-[#FF9933]">
                <reason.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1a3a5f] mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
