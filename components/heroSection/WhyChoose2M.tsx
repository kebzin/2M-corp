"use client";

import React from "react";
import { motion } from "motion/react";
import { Shield, Rocket, Users } from "lucide-react";

const WhyChoose2M = () => {
  const reasons = [
    {
      Icon: Shield,
      title: "Certified & Reliable",
      description:
        "Our solutions meet international standards with ISO compliance, data security certifications, and proven methodologies trusted by governments and institutions.",
    },
    {
      Icon: Rocket,
      title: "20+ Years Experience",
      description:
        "Launch your data analytics or software solution with confidence backed by over two decades of expertise in large-scale projects across Africa.",
    },
    {
      Icon: Users,
      title: "Complete Partnership",
      description:
        "Experience a fully collaborative approach with dedicated project teams, comprehensive training, and ongoing support tailored to your needs.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1e3d] via-[#0d2847] to-[#1a3a5f] py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Why Leading Organizations Choose 2M Corp?
          </h2>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left - Feature Cards */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/15"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <reason.Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-white lg:text-2xl">
                      {reason.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative h-[600px] w-[300px] overflow-hidden rounded-[3rem] bg-gray-900 p-3 shadow-2xl">
                {/* Screen */}
                <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3">
                    <div className="flex items-center justify-between text-white">
                      <div className="text-xs font-medium">9:41</div>
                      <div className="flex gap-1">
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                        <div className="h-3 w-3 rounded-full bg-white/30" />
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4">
                    {/* Header with logo */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                          <div className="text-xl font-bold text-white">2M</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-800">
                            2M Analytics
                          </div>
                          <div className="text-xs text-gray-500">Dashboard</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200" />
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 text-white shadow-lg">
                      <div className="mb-2 text-xs opacity-90">
                        Total Projects Value
                      </div>
                      <div className="mb-3 text-2xl font-bold">$•••,•••.••</div>
                      <div className="flex items-center justify-between">
                        <button className="rounded-lg bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          Add money
                        </button>
                        <button className="rounded-lg bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          Transfer
                        </button>
                        <button className="rounded-lg bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          More
                        </button>
                      </div>
                    </div>

                    {/* Info Card */}
                    <div className="mb-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 shadow-md">
                      <div className="text-xs font-medium text-gray-800">
                        Refer & Earn up to
                      </div>
                      <div className="mb-1 text-lg font-bold text-gray-900">
                        $100 for every referral
                      </div>
                      <div className="text-xs text-gray-700">
                        Share your experience
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="rounded-2xl bg-gray-50 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="text-sm font-bold text-gray-800">
                          Recent transactions
                        </div>
                        <button className="text-xs text-blue-600">
                          View all
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                            <div className="text-xs">📊</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-800">
                              Data Survey Project
                            </div>
                            <div className="text-xs text-gray-500">Today</div>
                          </div>
                          <div className="text-sm font-bold text-gray-800">
                            $45.90
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                            <div className="text-xs">💻</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-800">
                              Software Development
                            </div>
                            <div className="text-xs text-gray-500">
                              Yesterday
                            </div>
                          </div>
                          <div className="text-sm font-bold text-gray-800">
                            $61.93
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-blue-50 p-3 text-center">
                        <div className="mb-1 text-xs text-gray-600">Active</div>
                        <div className="text-lg font-bold text-blue-600">
                          24
                        </div>
                      </div>
                      <div className="rounded-xl bg-green-50 p-3 text-center">
                        <div className="mb-1 text-xs text-gray-600">
                          Completed
                        </div>
                        <div className="text-lg font-bold text-green-600">
                          $1M+
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 to-blue-500/20 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose2M;
