"use client";

import React from "react";
import { motion } from "motion/react";
import { servicesFAQ } from "@/lib/constants/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServicesFAQ = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a3a5f]/5 to-[#FF9933]/5 p-12">
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Background Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="url(#faq-gradient)"
                  opacity="0.1"
                />

                {/* Question Mark Icon - Central */}
                <g>
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    fill="url(#icon-gradient)"
                  />
                  <path
                    d="M200 240 Q200 220 200 210 Q200 190 215 180 Q230 170 240 155 Q245 145 245 135 Q245 115 230 105 Q215 95 200 95 Q185 95 170 105 Q155 115 155 135"
                    stroke="white"
                    strokeWidth="12"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="200" cy="265" r="8" fill="white" />
                </g>

                {/* Floating Question Marks */}
                <g opacity="0.4">
                  <text
                    x="80"
                    y="100"
                    fontSize="40"
                    fill="url(#text-gradient)"
                    fontWeight="bold"
                  >
                    ?
                  </text>
                  <text
                    x="320"
                    y="120"
                    fontSize="32"
                    fill="url(#text-gradient)"
                    fontWeight="bold"
                  >
                    ?
                  </text>
                  <text
                    x="60"
                    y="300"
                    fontSize="36"
                    fill="url(#text-gradient)"
                    fontWeight="bold"
                  >
                    ?
                  </text>
                  <text
                    x="340"
                    y="280"
                    fontSize="28"
                    fill="url(#text-gradient)"
                    fontWeight="bold"
                  >
                    ?
                  </text>
                </g>

                {/* Animated Circles */}
                <circle cx="100" cy="150" r="4" fill="#FF9933" opacity="0.6">
                  <animate
                    attributeName="cy"
                    values="150;145;150"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="300" cy="180" r="6" fill="#1a3a5f" opacity="0.4">
                  <animate
                    attributeName="cy"
                    values="180;175;180"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="90" cy="250" r="5" fill="#FF9933" opacity="0.5">
                  <animate
                    attributeName="cy"
                    values="250;245;250"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="320" cy="320" r="4" fill="#1a3a5f" opacity="0.6">
                  <animate
                    attributeName="cy"
                    values="320;315;320"
                    dur="4.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient
                    id="faq-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1a3a5f" />
                    <stop offset="100%" stopColor="#FF9933" />
                  </linearGradient>
                  <linearGradient
                    id="icon-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF9933" />
                    <stop offset="100%" stopColor="#ff7a00" />
                  </linearGradient>
                  <linearGradient
                    id="text-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1a3a5f" />
                    <stop offset="100%" stopColor="#FF9933" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Decorative blur element */}
            <div className="absolute -right-8 top-1/4 w-32 h-64 opacity-20">
              <div className="w-full h-full bg-gradient-to-b from-[#FF9933]/30 to-transparent blur-3xl" />
            </div>
          </motion.div>

          {/* Right Column - FAQ Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FF9933]/10 px-4 py-2 mb-6 border border-[#FF9933]/20">
                <span className="text-sm font-semibold text-[#FF9933] uppercase tracking-wider">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a3a5f] lg:text-5xl mb-4">
                Looking for answers?
              </h2>
            </div>

            {/* FAQ Accordion */}
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-0 border-t border-gray-200"
            >
              {servicesFAQ.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200 group"
                >
                  <AccordionTrigger className="text-base font-semibold text-[#1a3a5f] hover:no-underline py-6 hover:text-[#FF9933] data-[state=open]:text-[#FF9933]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-gray-700 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
