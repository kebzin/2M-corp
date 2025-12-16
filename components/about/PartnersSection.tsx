"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  description: string;
  website: string;
  category: string;
}

const PartnersSection = () => {
  const partners: Partner[] = [
    {
      name: "Microsoft",
      logo: "/partners/microsoft.svg",
      description: "Cloud computing, AI, and enterprise solutions",
      website: "https://www.microsoft.com",
      category: "Cloud & Enterprise",
    },
    {
      name: "Palo Alto Networks",
      logo: "/partners/palo-alto.png",
      description: "Next-generation cybersecurity solutions",
      website: "https://www.paloaltonetworks.com",
      category: "Cybersecurity",
    },
    {
      name: "Sophos",
      logo: "/partners/sophos.png",
      description: "Advanced endpoint and network security",
      website: "https://www.sophos.com",
      category: "Cybersecurity",
    },
    {
      name: "Untangle",
      logo: "/partners/untangle.png",
      description: "Network security and connectivity solutions",
      website: "https://www.untangle.com",
      category: "Network Security",
    },
    {
      name: "Fortinet",
      logo: "/partners/fortinet.svg",
      description: "Integrated cybersecurity platform",
      website: "https://www.fortinet.com",
      category: "Cybersecurity",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="mb-3 inline-block rounded-full bg-[#FF9933]/10 px-4 py-1 text-sm font-medium text-[#FF9933]">
            Our Partners
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a3a5f] mb-4">
            Our Technology Partners
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with global leaders to deliver enterprise-grade
            solutions
          </p>
          Our Technology Partners
        </motion.div>

        {/* Partner Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col items-center justify-center bg-white border border-gray-200 hover:border-[#FF9933] rounded-xl p-4 aspect-square transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Partner Logo */}
              <div className="relative w-full flex-1 flex items-center justify-center mb-3">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Partner Name */}
              <div className="text-center">
                <h3 className="text-xs font-semibold text-gray-700 group-hover:text-[#FF9933] transition-colors">
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "50+", label: "Partner Organizations" },
            { value: "15+", label: "Countries" },
            { value: "100+", label: "Projects Delivered" },
            { value: "20+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#1a3a5f] to-[#0a1e3d] text-white"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#FF9933] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
