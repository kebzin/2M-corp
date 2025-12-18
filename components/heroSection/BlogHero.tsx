"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const BlogHero: React.FC<Props> = ({ title, subtitle, description }) => {
  return (
    <section
      className="relative bg-white py-16 lg:py-24 pt-24 lg:pt-28"
      style={{
        backgroundImage: "url('/home/bg-wave.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400"
            >
              {subtitle ?? "INSIGHTS"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-6 text-3xl font-bold leading-[1.15] text-[#1a3a5f] lg:text-4xl xl:text-5xl"
            >
              {title ?? "Stories, Guides & Technical Insights"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base leading-relaxed text-[#1a3a5f]/80 max-w-2xl"
            >
              {description ??
                "Read project case studies, technical guides, and industry analysis from our team of experts. We share practical patterns for data analytics, systems integrations, and software engineering across Africa."}
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-primary-foreground)]"
              >
                Explore Articles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-muted-foreground)]"
              >
                Work With Us
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="blogGrad"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#FF9933" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              <g>
                <rect
                  x="0"
                  y="0"
                  width="400"
                  height="300"
                  rx="16"
                  fill="url(#blogGrad)"
                  opacity="0.08"
                />
                <circle cx="260" cy="100" r="48" fill="#fff" opacity="0.06" />
                <path
                  d="M40 220 Q 120 160 200 120 T 360 60"
                  stroke="#1a3a5f"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.12"
                />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
