"use client";
"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const ContactHero = ({
  subtitle = "CONTACT 2M CORP",
  title = "Get expert help for your next project",
  description = "Reach out for sales, support, or consulting — our local team is ready to assist.",
}: {
  subtitle?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <section
      className="relative bg-white py-12 lg:py-16 pt-24 lg:pt-28"
      style={{
        backgroundImage: "url('/home/bg-wave.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[45%_55%]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)]">
              {subtitle}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-3xl font-bold leading-[1.2] text-[var(--color-foreground)] lg:text-4xl xl:text-5xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed text-[var(--color-foreground)]/70"
            >
              {description} Tell us about your needs and we'll provide a
              tailored plan — from licensing and migration to custom development
              and analytics.
            </motion.p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#form"
                className="inline-block px-6 py-3 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-full font-semibold shadow"
              >
                Contact Sales
              </Link>
              <Link
                href="mailto:sales@2m-corp.com"
                className="inline-block px-6 py-3 border border-[var(--color-border)] bg-transparent rounded-full font-semibold"
              >
                Email Sales
              </Link>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative SVG / visual - similar to AboutHero */}
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="contactGrad"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>
                <filter id="contactGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g opacity="0.08">
                <path
                  d="M180 80 L200 70 L220 75 L240 65 L250 80 L260 100 L255 130 L245 160 L235 180 L220 200 L200 210 L180 205 L165 190 L155 170 L150 145 L155 115 L165 95 Z"
                  fill="#1a3a5f"
                />
              </g>

              <g>
                <line
                  x1="50"
                  y1="220"
                  x2="350"
                  y2="220"
                  stroke="#1a3a5f"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <path
                  d="M 50 200 Q 100 180, 125 160 T 200 100 T 275 60 T 350 50"
                  stroke="url(#contactGrad)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 50 200 Q 100 180, 125 160 T 200 100 T 275 60 T 350 50 L 350 220 L 50 220 Z"
                  fill="url(#contactGrad)"
                  opacity="0.08"
                />
              </g>

              <g filter="url(#contactGlow)">
                <circle
                  cx="200"
                  cy="150"
                  r="36"
                  fill="#FF9933"
                  opacity="0.12"
                />
                <circle cx="200" cy="150" r="22" fill="#FF9933" />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
