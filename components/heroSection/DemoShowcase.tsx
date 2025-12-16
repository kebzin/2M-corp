"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Clock,
  DollarSign,
  Bell,
  FileText,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const DemoShowcase = () => {
  const floatingElements = [
    {
      Icon: Clock,
      label: "10",
      type: "progress",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      position: { left: "5%", top: "10%" },
      delay: 0.2,
    },
    {
      Icon: DollarSign,
      type: "icon",
      bgColor: "bg-blue-600",
      iconColor: "text-white",
      position: { left: "8%", bottom: "15%" },
      delay: 0.4,
    },
    {
      Icon: Bell,
      type: "notification",
      bgColor: "bg-red-500",
      iconColor: "text-white",
      position: { right: "6%", top: "25%" },
      delay: 0.6,
    },
    {
      Icon: FileText,
      label: "Invoice",
      type: "document",
      bgColor: "bg-gray-100",
      textColor: "text-blue-600",
      position: { right: "4%", top: "8%" },
      delay: 0.3,
    },
    {
      type: "status",
      bgColor: "bg-blue-900",
      position: { right: "5%", bottom: "20%" },
      delay: 0.5,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1e3d] via-[#0d2847] to-[#0a1e3d] py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex min-h-[500px] items-center justify-center">
          {/* Floating Elements */}
          {floatingElements.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.3,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              animate={{
                y: [0, -15, 0, -8, 0],
                x: [0, 8, -8, 4, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: item.delay },
                scale: { duration: 0.6, delay: item.delay },
                y: {
                  duration: 5 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 4 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
              className="absolute hidden lg:block"
              style={item.position}
            >
              {item.type === "progress" && (
                <div
                  className={`flex h-32 w-32 items-center justify-center rounded-3xl ${item.bgColor} shadow-2xl backdrop-blur-sm`}
                >
                  <div className="relative">
                    <svg className="h-24 w-24 -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="6"
                        strokeDasharray="251"
                        strokeDashoffset="75"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#1a3a5f]">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {item.type === "icon" && item.Icon && (
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl ${item.bgColor} shadow-2xl backdrop-blur-sm`}
                >
                  <item.Icon className={`h-10 w-10 ${item.iconColor}`} />
                </div>
              )}

              {item.type === "notification" && (
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${item.bgColor} shadow-2xl backdrop-blur-sm animate-pulse`}
                >
                  {item.Icon && (
                    <item.Icon className={`h-8 w-8 ${item.iconColor}`} />
                  )}
                </div>
              )}

              {item.type === "document" && (
                <div
                  className={`flex items-center gap-3 rounded-2xl ${item.bgColor} px-6 py-4 shadow-2xl backdrop-blur-sm`}
                >
                  {item.Icon && (
                    <item.Icon className={`h-6 w-6 ${item.textColor}`} />
                  )}
                  <span className={`text-sm font-semibold ${item.textColor}`}>
                    {item.label}
                  </span>
                </div>
              )}

              {item.type === "status" && (
                <div
                  className={`rounded-2xl ${item.bgColor} px-6 py-4 shadow-2xl backdrop-blur-sm`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-white">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span>Up Time</span>
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full w-4/5 bg-green-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-white">
                      <TrendingDown className="h-4 w-4 text-red-400" />
                      <span>Down time</span>
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full w-1/5 bg-red-400" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Center Content */}
          <div className="relative z-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left: Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                {/* Dashboard Header */}
                <div className="border-b bg-gradient-to-r from-blue-50 to-gray-50 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-blue-600">
                      2M Analytics
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-16 rounded-full bg-gray-300" />
                      <div className="h-2 w-16 rounded-full bg-gray-300" />
                      <div className="h-2 w-16 rounded-full bg-gray-300" />
                      <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-300">
                        <div className="h-full w-full bg-gradient-to-br from-blue-400 to-blue-600" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-gray-600">
                    Transactions
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-2 gap-4 p-6">
                  {/* Sidebar */}
                  <div className="space-y-3">
                    <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                      Reports
                    </div>
                    <div className="space-y-2 pl-2">
                      <div className="text-sm font-semibold text-blue-600">
                        Dashboard
                      </div>
                      <div className="text-sm text-gray-500">KYC</div>
                      <div className="text-xs text-gray-400">KYC Report</div>
                    </div>
                  </div>

                  {/* Main Content - Statistics */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700">
                        Project Statistics
                      </h3>
                      <button className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                        Export
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-lg bg-gray-50 p-3 transition-all hover:bg-blue-50 hover:shadow-md cursor-pointer">
                          <div className="mb-1 text-xs text-gray-500">
                            All Projects
                          </div>
                          <div className="text-xl font-bold text-gray-800">
                            313
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3 transition-all hover:bg-blue-50 hover:shadow-md cursor-pointer">
                          <div className="mb-1 text-xs text-gray-500">
                            Active Projects
                          </div>
                          <div className="text-xl font-bold text-gray-800">
                            342
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3 transition-all hover:bg-blue-50 hover:shadow-md cursor-pointer">
                          <div className="mb-1 text-xs text-gray-500">
                            Completed
                          </div>
                          <div className="text-xl font-bold text-gray-800">
                            02
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3 transition-all hover:bg-blue-50 hover:shadow-md cursor-pointer">
                          <div className="mb-1 text-xs text-gray-500">
                            In Progress
                          </div>
                          <div className="text-xl font-bold text-gray-800">
                            00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Experience the Power of a{" "}
                <span className="text-primary">Custom Dashboard</span>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-300 lg:text-lg">
                Transform your data management with 2M Corp's tailored analytics
                platforms. From real-time monitoring to comprehensive reporting,
                our custom solutions put powerful insights at your fingertips.
              </p>
              <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 lg:text-lg">
                Get Started With a Demo
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;
