"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Search,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";

const ServiceProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Analysis",
      description:
        "We begin by understanding your business needs, challenges, and objectives through comprehensive consultations and requirements gathering.",
      color: "blue",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy & Planning",
      description:
        "Our experts develop a tailored solution strategy, create detailed project roadmaps, and establish clear milestones for success.",
      color: "orange",
    },
    {
      number: "03",
      icon: Code,
      title: "Design & Development",
      description:
        "We build your solution using cutting-edge technologies, following industry best practices and maintaining transparent communication throughout.",
      color: "purple",
    },
    {
      number: "04",
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing procedures ensure your solution is secure, reliable, and performs optimally across all scenarios and use cases.",
      color: "teal",
    },
    {
      number: "05",
      icon: Rocket,
      title: "Deployment & Launch",
      description:
        "We handle seamless deployment, provide comprehensive training to your team, and ensure smooth transition to the new system.",
      color: "orange",
    },
    {
      number: "06",
      icon: HeadphonesIcon,
      title: "Support & Maintenance",
      description:
        "Ongoing technical support, regular updates, and continuous optimization keep your solution running at peak performance.",
      color: "blue",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      icon: "text-blue-600",
      accent: "bg-blue-600",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-[#FF9933]",
      icon: "text-[#FF9933]",
      accent: "bg-[#FF9933]",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
      icon: "text-purple-600",
      accent: "bg-purple-600",
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      text: "text-teal-600",
      icon: "text-teal-600",
      accent: "bg-teal-600",
    },
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 lg:mb-12 max-w-4xl"
        >
          <span className="mb-3 inline-block rounded-full bg-[#FF9933]/10 px-4 py-1 text-sm font-medium text-[#FF9933]">
            Our Process
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a3a5f] mb-4">
            How we deliver{" "}
            <span className="text-[#FF9933]">exceptional results</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl">
            Our proven six-step process ensures every project is delivered on
            time, within budget, and exceeds expectations. From initial
            consultation to ongoing support, we're with you every step of the
            way.
          </p>
        </motion.div>

        {/* Process Flow Diagram */}
        <div className="relative max-w-7xl mx-auto">
          {/* Background Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          {/* Horizontal Flow on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-4 items-start lg:items-center relative">
            {processSteps.map((step, index) => {
              const colors =
                colorClasses[step.color as keyof typeof colorClasses];

              return (
                <React.Fragment key={index}>
                  {/* Step Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative z-10"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Card Container with Border */}
                      <div
                        className={`group relative ${colors.bg} ${colors.border} border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full`}
                      >
                        {/* Icon Circle */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 lg:w-14 lg:h-14 ${colors.accent} rounded-xl flex items-center justify-center shadow-lg mb-3 mx-auto relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                          <step.icon className="w-8 h-8 lg:w-7 lg:h-7 text-white relative z-10" />
                        </motion.div>

                        {/* Number Badge */}
                        <div
                          className={`inline-flex items-center justify-center w-8 h-8 ${colors.accent} text-white font-bold text-sm rounded-full mb-3 shadow-md`}
                        >
                          {step.number}
                        </div>

                        {/* Title */}
                        <h3 className="text-base lg:text-sm font-bold text-[#1a3a5f] mb-2">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Decorative Corner Accent */}
                        <div
                          className={`absolute top-0 right-0 w-12 h-12 ${colors.accent} opacity-10 rounded-bl-full`}
                        />
                      </div>

                      {/* Connecting Line with Animation - Vertical on Mobile */}
                      {index < processSteps.length - 1 && (
                        <div className="relative my-4 lg:hidden">
                          <div className="w-0.5 h-8 bg-gray-200 mx-auto relative overflow-hidden">
                            <motion.div
                              initial={{ y: "-100%" }}
                              animate={{ y: "100%" }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: index * 0.3,
                              }}
                              className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-[#FF9933] to-transparent"
                            />
                          </div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto -mt-1" />
                        </div>
                      )}
                    </div>

                    {/* Connecting Arrow with Flow Animation - Horizontal on Desktop */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-24 -right-2 z-20">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="drop-shadow-sm"
                        >
                          <defs>
                            <linearGradient
                              id={`arrowGradient${index}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#9CA3AF"
                                stopOpacity="0.3"
                              />
                              <stop
                                offset="50%"
                                stopColor="#FF9933"
                                stopOpacity="0.8"
                              >
                                <animate
                                  attributeName="offset"
                                  values="0;1;0"
                                  dur="2s"
                                  repeatCount="indefinite"
                                  begin={`${index * 0.3}s`}
                                />
                              </stop>
                              <stop
                                offset="100%"
                                stopColor="#9CA3AF"
                                stopOpacity="0.3"
                              />
                            </linearGradient>
                          </defs>
                          {/* Arrow Line */}
                          <path
                            d="M2 16h24"
                            stroke={`url(#arrowGradient${index})`}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          {/* Arrow Head */}
                          <path
                            d="M22 12l4 4-4 4"
                            stroke="#FF9933"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.6"
                          />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#1a3a5f] to-[#0a1e3d] rounded-2xl p-6 lg:p-8 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how our proven process can help bring your vision to
              life with exceptional results.
            </p>
            <button className="group inline-flex items-center gap-3 bg-[#FF9933] hover:bg-[#e68a2e] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span>Get Started Today</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
