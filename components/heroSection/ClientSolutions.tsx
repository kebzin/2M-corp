"use client";

import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  MapPin,
  Clock,
} from "lucide-react";

const ClientSolutions = () => {
  const features = [
    {
      title: "Diverse Service Options",
      description:
        "Support varied solutions like data collection systems, survey design, impact evaluations, and custom software development for seamless project execution.",
    },
    {
      title: "Efficient Client Management",
      description:
        "Streamline client onboarding, project categorization, and compliance management with an advanced solution designed for speed, accuracy, and security.",
    },
    {
      title: "Real-Time Project Tracking",
      description:
        "Provide clients with dashboards offering insights into project progress, deliverables, and performance metrics to make informed decisions.",
    },
  ];

  const clients = [
    {
      name: "Government Agencies",
      location: "National Programs, Gambia",
      duration: "8a - 5p",
      image: "🏛️",
    },
    {
      name: "International Organizations",
      location: "West Africa Regional Office",
      duration: "8a - 5p",
      image: "🌍",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Card - Mobile/Tablet Mockup */}
              <div className="rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 p-8 shadow-2xl">
                <div className="mx-auto max-w-sm">
                  {/* Device Frame */}
                  <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                    {/* Screen Content */}
                    <div className="relative aspect-[9/16] bg-gradient-to-br from-blue-50 to-gray-50">
                      {/* Professional with laptop image placeholder */}
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                        <div className="text-center">
                          <div className="mb-4 text-6xl">💼</div>
                          <div className="text-sm font-semibold text-gray-600">
                            Professional Services
                          </div>
                        </div>
                      </div>

                      {/* Balance Card Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white p-4 shadow-lg">
                        <div className="mb-2 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                            <Building2 className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="text-sm font-medium text-gray-600">
                            Active Contracts
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          $ 250.45K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client List Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 max-w-xs rounded-3xl bg-white p-6 shadow-2xl"
              >
                <div className="space-y-4">
                  {clients.map((client, index) => (
                    <div
                      key={client.name}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-2xl">
                        {client.image}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-[#1a3a5f]">
                          {client.name}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="h-3 w-3" />
                          {client.location}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {client.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Barcode/QR Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -right-8 -top-8 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 p-6 shadow-2xl"
              >
                <div className="text-center">
                  <div className="mb-3 rounded-xl bg-white p-4">
                    <div className="text-xs font-bold text-gray-800">
                      PROJECT ID
                    </div>
                    <div className="my-2 space-y-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex justify-center gap-0.5">
                          {[...Array(12)].map((_, j) => (
                            <div
                              key={j}
                              className={`h-6 w-1 ${
                                Math.random() > 0.5
                                  ? "bg-gray-800"
                                  : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs font-mono text-gray-600">
                      2M-2024-P-10890
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-white">
                    <div>
                      <span className="text-gray-400">Client:</span> MoH
                    </div>
                    <div>
                      <span className="text-gray-400">Type:</span> Survey
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold text-[#1a3a5f] lg:text-5xl"
            >
              Client & Project Management
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-10 text-lg leading-relaxed text-gray-600"
            >
              Streamline project execution across sectors with comprehensive
              tools for survey management, data collection, impact tracking, and
              custom software delivery — all through our robust client
              management platform.
            </motion.p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#1a3a5f]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <button className="group inline-flex items-center gap-2 text-lg font-semibold text-primary transition-all hover:gap-3">
                Explore Client Solutions
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSolutions;
