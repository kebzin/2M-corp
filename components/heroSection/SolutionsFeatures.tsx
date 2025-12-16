"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const SolutionsFeatures = () => {
  const features = [
    {
      title: "A solution for everyone",
      description:
        "Our comprehensive data analytics and software solutions cater to government agencies, financial institutions, healthcare facilities, and international organizations across Africa, contributing to economic growth by enabling data-driven decision making at their fingertips.",
    },
    {
      title: "Multiple service options",
      description:
        "Our platform is equipped with extensive capabilities including data collection systems, survey design, impact evaluations, custom software development, Microsoft 365 implementation, and STATA training to make your organization's operations seamless and efficient.",
    },
    {
      title: "Customizable configurations",
      description:
        "You get dynamic configuration and customization options in our solutions to monitor and optimize system performance to meet your specific needs, from social protection systems to comprehensive M&E frameworks tailored for your sector.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content - Text and Features */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold text-[#1a3a5f] lg:text-5xl"
            >
              Data & Software Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-10 text-lg leading-relaxed text-gray-600"
            >
              Empowering government agencies, financial institutions, and
              international organizations across Africa with our comprehensive
              solutions to securely manage data, conduct surveys, and deliver
              custom software at their fingertips.
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#1a3a5f]">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <button className="group inline-flex items-center gap-2 text-lg font-semibold text-primary transition-all hover:gap-3">
                Explore further
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Professional with Phone Image */}
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Placeholder for professional image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                    <div className="text-center">
                      <div className="mb-4 text-8xl">👨‍💼</div>
                      <div className="text-lg font-semibold text-gray-700">
                        Professional using 2M Solutions
                      </div>
                    </div>
                  </div>

                  {/* Overlaid Phone Mockup */}
                  <div className="absolute bottom-8 right-8 w-48">
                    <div className="rounded-2xl bg-gray-900 p-2 shadow-2xl">
                      <div className="overflow-hidden rounded-xl bg-white">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white">
                          <div className="mb-2 text-xs font-medium">
                            Dashboard
                          </div>
                          <div className="text-lg font-bold">2M Analytics</div>
                        </div>
                        <div className="space-y-2 p-3">
                          <div className="rounded bg-gray-100 p-2 text-xs">
                            <div className="font-semibold text-gray-700">
                              Active Projects
                            </div>
                            <div className="text-blue-600">24 ongoing</div>
                          </div>
                          <div className="rounded bg-gray-100 p-2 text-xs">
                            <div className="font-semibold text-gray-700">
                              QR Code Access
                            </div>
                            <div className="text-green-600">✓ Enabled</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Payment Methods Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -left-8 top-1/4 rounded-2xl bg-white p-6 shadow-2xl"
              >
                <div className="mb-3 text-center">
                  <div className="mb-2 text-sm font-bold text-[#1a3a5f]">
                    Service Options
                  </div>
                  {/* Donut Chart */}
                  <div className="relative mx-auto h-32 w-32">
                    <svg
                      className="h-full w-full -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="12"
                        strokeDasharray="62 251"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="12"
                        strokeDasharray="50 251"
                        strokeDashoffset="-62"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="12"
                        strokeDasharray="50 251"
                        strokeDashoffset="-112"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="12"
                        strokeDasharray="44 251"
                        strokeDashoffset="-162"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="12"
                        strokeDasharray="45 251"
                        strokeDashoffset="-206"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs font-bold text-[#1a3a5f]">
                        Services
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Data Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      <span>Software</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                      <span>Microsoft 365</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                      <span>M&E Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>Training</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsFeatures;
