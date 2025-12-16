"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Shield,
  BarChart3,
  Server,
  Grid3x3,
  FileCheck,
  UserCheck,
} from "lucide-react";

const FintechTransformationSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced security",
      description:
        "Implement robust security measures to effectively combat fraud and ensure your customer data remains protected and secure.",
      position: "top-left",
    },
    {
      icon: BarChart3,
      title: "Data-driven insights",
      description:
        "Leverage advanced analytics to gain real-time transaction insights. It improves customer experiences and optimizes your service offerings.",
      position: "top-right",
    },
    {
      icon: Server,
      title: "Scalable infrastructure",
      description:
        "Utilize flexible systems that support rapid deployment of new mobile payment services and enable fast market responsiveness.",
      position: "middle-left",
    },
    {
      icon: Grid3x3,
      title: "Integrated platforms",
      description:
        "Combine multiple payment systems into one unified platform to create a seamless transaction experience and enhance customer satisfaction & retention.",
      position: "middle-right",
    },
    {
      icon: FileCheck,
      title: "Streamlined compliance",
      description:
        "Adopt automated processes that ensure fast adherence to evolving regulations. This minimizes compliance risks and reduces manual effort.",
      position: "bottom-left",
    },
    {
      icon: UserCheck,
      title: "Efficient onboarding",
      description:
        "Simplify onboarding processes to reduce drop-off rates and make it easy for customers to sign up & start using your services.",
      position: "bottom-right",
    },
  ];

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
            Digital Transformation
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a3a5f] mb-4">
            Empowering businesses with{" "}
            <span className="text-[#FF9933]">digital transformation</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl">
            Delivering comprehensive solutions that drive innovation, enhance
            security, and optimize operations for sustainable business growth in
            the digital age.
          </p>
        </motion.div>

        {/* Hexagonal Hub Layout */}
        <div className="relative max-w-7xl mx-auto py-12">
          {/* SVG Connecting Lines with Animation */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <defs>
              {/* Enhanced gradient for more visible data flow */}
              <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9933" stopOpacity="0" />
                <stop offset="30%" stopColor="#FF9933" stopOpacity="1" />
                <stop offset="70%" stopColor="#FF9933" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Lines from outer hexagons to center with staggered animation */}
            {/* Top Left to Center */}
            <line
              x1="15%"
              y1="20%"
              x2="50%"
              y2="50%"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="15%"
              y1="20%"
              x2="50%"
              y2="50%"
              stroke="url(#dataFlow)"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0 500; 100 400; 0 500"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                from="500"
                to="0"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>

            {/* Top Right to Center */}
            <line
              x1="85%"
              y1="20%"
              x2="50%"
              y2="50%"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="85%"
              y1="20%"
              x2="50%"
              y2="50%"
              stroke="url(#dataFlow)"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0 500; 100 400; 0 500"
                dur="3s"
                repeatCount="indefinite"
                begin="0.5s"
              />
              <animate
                attributeName="stroke-dashoffset"
                from="500"
                to="0"
                dur="3s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </line>

            {/* Middle Left to Center */}
            <line
              x1="10%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="10%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke="url(#dataFlow)"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0 500; 100 400; 0 500"
                dur="3s"
                repeatCount="indefinite"
                begin="1s"
              />
              <animate
                attributeName="stroke-dashoffset"
                from="500"
                to="0"
                dur="3s"
                repeatCount="indefinite"
                begin="1s"
              />
            </line>

            {/* Middle Right to Center */}
            <line
              x1="90%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="90%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke="url(#dataFlow)"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0 500; 100 400; 0 500"
                dur="3s"
                repeatCount="indefinite"
                begin="1.5s"
              />
              <animate
                attributeName="stroke-dashoffset"
                from="500"
                to="0"
                dur="3s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </line>

            {/* Bottom Left to Center */}
            <line
              x1="15%"
              y1="80%"
              x2="50%"
              y2="50%"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="15%"
              y1="80%"
              x2="50%"
              y2="50%"
              stroke="url(#dataFlow)"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0 500; 100 400; 0 500"
                dur="3s"
                repeatCount="indefinite"
                begin="2s"
              />
              <animate
                attributeName="stroke-dashoffset"
                from="500"
                to="0"
                dur="3s"
                repeatCount="indefinite"
                begin="2s"
              />
            </line>

            {/* Bottom Right to Center */}
            <line
              x1="85%"
              y1="80%"
              x2="50%"
              y2="50%"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="85%"
              y1="80%"
              x2="50%"
              y2="50%"
              stroke="url(#dataFlow)"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0 500; 100 400; 0 500"
                dur="3s"
                repeatCount="indefinite"
                begin="2.5s"
              />
              <animate
                attributeName="stroke-dashoffset"
                from="500"
                to="0"
                dur="3s"
                repeatCount="indefinite"
                begin="2.5s"
              />
            </line>
          </svg>

          {/* Circular Layout Container for Benefits */}
          <div className="relative w-full h-[800px] lg:h-[600px]">
            {/* Top Left - Enhanced security */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 lg:left-[8%] w-full md:w-[280px]"
            >
              <div className="text-left">
                <div className="mb-4 inline-flex">
                  <div
                    className="w-16 h-16 border-2 border-blue-400 flex items-center justify-center bg-white"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1a3a5f] mb-2">
                  Enhanced security
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Implement robust security measures to effectively combat fraud
                  and ensure your customer data remains protected and secure.
                </p>
              </div>
            </motion.div>

            {/* Top Right - Data-driven insights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-0 right-0 lg:right-[8%] w-full md:w-[280px]"
            >
              <div className="text-right">
                <div className="mb-4 inline-flex float-right">
                  <div
                    className="w-16 h-16 border-2 border-orange-400 flex items-center justify-center bg-white"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <BarChart3 className="w-8 h-8 text-[#FF9933]" />
                  </div>
                </div>
                <div className="clear-right" />
                <h3 className="text-lg font-bold text-[#1a3a5f] mb-2">
                  Data-driven insights
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Leverage advanced analytics to gain real-time transaction
                  insights. It improves customer experiences and optimizes your
                  service offerings.
                </p>
              </div>
            </motion.div>

            {/* Middle Left - Scalable infrastructure */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full md:w-[280px]"
            >
              <div className="text-left">
                <div className="mb-4 inline-flex">
                  <div
                    className="w-16 h-16 border-2 border-orange-400 flex items-center justify-center bg-white"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <Server className="w-8 h-8 text-[#FF9933]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1a3a5f] mb-2">
                  Scalable infrastructure
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Utilize flexible systems that support rapid deployment of new
                  mobile payment services and enable fast market responsiveness.
                </p>
              </div>
            </motion.div>

            {/* Center Logo - 2M Corp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `
                        conic-gradient(
                          from 0deg,
                          transparent 0deg,
                          transparent 60deg,
                          #FF9933 120deg,
                          #FF9933 180deg,
                          transparent 240deg,
                          transparent 360deg
                        )
                      `,
                      animation: "spin 4s linear infinite",
                    }}
                  />
                  <div className="absolute inset-[2px] bg-white rounded-3xl" />
                </div>

                {/* Logo */}
                <div className="relative z-10">
                  <img
                    src="/logos/logo-color.svg"
                    alt="2M Corp"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>

              {/* Keyframe animation */}
              <style jsx>{`
                @keyframes spin {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </motion.div>

            {/* Middle Right - Integrated platforms */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-0 w-full md:w-[280px]"
            >
              <div className="text-right">
                <div className="mb-4 inline-flex float-right">
                  <div
                    className="w-16 h-16 border-2 border-orange-400 flex items-center justify-center bg-white"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <Grid3x3 className="w-8 h-8 text-[#FF9933]" />
                  </div>
                </div>
                <div className="clear-right" />
                <h3 className="text-lg font-bold text-[#1a3a5f] mb-2">
                  Integrated platforms
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Combine multiple payment systems into one unified platform to
                  create a seamless transaction experience and enhance customer
                  satisfaction & retention.
                </p>
              </div>
            </motion.div>

            {/* Bottom Left - Streamlined compliance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-0 left-0 lg:left-[8%] w-full md:w-[280px]"
            >
              <div className="text-left">
                <div className="mb-4 inline-flex">
                  <div
                    className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-white"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <FileCheck className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1a3a5f] mb-2">
                  Streamlined compliance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Adopt automated processes that ensure fast adherence to
                  evolving regulations. This minimizes compliance risks and
                  reduces manual effort.
                </p>
              </div>
            </motion.div>

            {/* Bottom Right - Efficient onboarding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-0 right-0 lg:right-[8%] w-full md:w-[280px]"
            >
              <div className="text-right">
                <div className="mb-4 inline-flex float-right">
                  <div
                    className="w-16 h-16 border-2 border-blue-400 flex items-center justify-center bg-white"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <UserCheck className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="clear-right" />
                <h3 className="text-lg font-bold text-[#1a3a5f] mb-2">
                  Efficient onboarding
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Simplify onboarding processes to reduce drop-off rates and
                  make it easy for customers to sign up & start using your
                  services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FintechTransformationSection;
