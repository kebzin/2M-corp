"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { TypingAnimation } from "../ui/typing-animation";
import { teamMembers } from "@/lib/constants/team";

const TeamSection = () => {
  return (
    <section className="bg-white py-12 lg:py-16">
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
            Our Team
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
            Meet Our Team
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals with 20+ years of combined expertise in data
            analytics, software development, and digital innovation across
            Africa.
          </p>
        </motion.div>
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group flex gap-6 bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#1a3a5f]/10 hover:border-[#FF9933]"
            >
              {/* Image Container */}
              <div className="relative w-1/3 flex-shrink-0 bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 15vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const initials = member.name
                        .split(" ")
                        .filter((n) => n.length > 0)
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase();
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-3xl lg:text-4xl font-bold text-gray-400">${initials}</div>`;
                    }
                  }}
                />
              </div>

              {/* Member Info */}
              <div className="flex-1 py-6 pr-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base lg:text-lg font-bold text-[#1a3a5f] mb-0.5 leading-tight transition-colors duration-300 group-hover:text-[#FF9933]">
                    {member.name}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium block mb-3 leading-none transition-colors duration-300 group-hover:text-[#FF9933]">
                    {member.role}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.socials.linkedin}
                    className="text-blue-400 hover:text-blue-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="text-yellow-500 hover:text-yellow-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socials.github}
                    className="text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="text-pink-400 hover:text-pink-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    aria-label={`${member.name} Instagram`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
