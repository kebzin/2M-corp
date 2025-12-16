"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/constants/services";

const ServicesListSection = () => {
  const colorClasses = {
    teal: {
      bg: "bg-teal-500/10",
      text: "text-teal-600",
      border: "border-teal-500",
      hover: "hover:border-teal-500",
    },
    orange: {
      bg: "bg-[#FF9933]/10",
      text: "text-[#FF9933]",
      border: "border-[#FF9933]",
      hover: "hover:border-[#FF9933]",
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      border: "border-blue-500",
      hover: "hover:border-blue-500",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-500",
      hover: "hover:border-purple-500",
    },
    cloud: {
      bg: "bg-sky-500/10",
      text: "text-sky-600",
      border: "border-sky-500",
      hover: "hover:border-sky-500",
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 max-w-4xl"
        >
          <span className="mb-3 inline-block rounded-full bg-[#FF9933]/10 px-4 py-1 text-sm font-medium text-[#FF9933]">
            What We Deliver
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a3a5f] mb-4">
            Transforming Ideas into Digital Solutions
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl">
            From data analytics to cybersecurity, we deliver cutting-edge
            technology solutions that drive growth, enhance security, and
            empower organizations across Africa to achieve their digital
            transformation goals.
          </p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-5 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const colors =
              colorClasses[service.color as keyof typeof colorClasses];

            // Define varied sizes for bento grid layout
            const gridClasses = [
              "md:col-span-1 md:row-span-1", // Data Analytics - small
              "md:col-span-1 md:row-span-2", // Software Solutions - tall
              "md:col-span-1 md:row-span-1", // Mobile Development - small
              "md:col-span-2 md:row-span-1 lg:col-span-1", // Cybersecurity - wide on md, normal on lg
              "md:col-span-1 md:row-span-1", // Cloud Services - small
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative bg-white border-2 border-gray-200 rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:border-[#FF9933] hover:shadow-xl ${gridClasses[index]}`}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50" />

                {/* Content */}
                <div className="relative h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`${colors.bg} ${colors.text} p-4 rounded-2xl w-fit mb-4 transition-transform duration-500 group-hover:scale-110`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1a3a5f] mb-3 group-hover:text-[#FF9933] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features - Only show for tall cards */}
                  {gridClasses[index].includes("row-span-2") && (
                    <ul className="space-y-2 mb-4 flex-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <Check
                            className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA Link */}
                  <Link href={service.href} className="mt-auto">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[#FF9933] font-semibold text-sm group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;
