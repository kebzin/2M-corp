"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Link from "next/link";
import { motion } from "motion/react";

const HeroSection = () => {
  const words = [
    "Data Analytics",
    "Software Development",
    "Cloud Solutions",
    "Business Intelligence",
    "Digital Transformation",
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0B4C8C] via-[#0A3A6B] to-[#082B52]">
      {/* Subtle Code Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute right-0 top-20 font-mono text-[10px] leading-relaxed text-white">
          <div className="space-y-1">
            <div>&lt;!DOCTYPE html&gt;</div>
            <div>&lt;html lang=&quot;en&quot;&gt;</div>
            <div className="pl-4">&lt;head&gt;</div>
            <div className="pl-8">&lt;meta charset=&quot;UTF-8&quot;&gt;</div>
            <div className="pl-8">
              &lt;meta name=&quot;viewport&quot;
              content=&quot;width=device-width&quot;&gt;
            </div>
            <div className="pl-4">&lt;/head&gt;</div>
            <div className="pl-4">&lt;body&gt;</div>
            <div className="pl-8">&lt;!-- Content --&gt;</div>
            <div className="pl-4">&lt;/body&gt;</div>
            <div>&lt;/html&gt;</div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-40 lg:pb-20"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="z-10"
        >
          {/* Main Heading with animated word */}
          <h1 className="mb-6 text-3xl font-bold leading-[1.2] text-white lg:text-4xl xl:text-5xl">
            Launch your{" "}
            <TypingAnimation
              words={words}
              className="inline-block text-primary leading-[1.2]"
              typeSpeed={60}
              deleteSpeed={30}
              pauseDelay={1500}
              loop={true}
              showCursor={true}
              blinkCursor={true}
            />{" "}
            system, in a fast, secure, and reliable way
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/80 lg:text-base">
            2M Corp enables organizations to deliver world-class data analytics,
            custom software solutions, and Microsoft 365 implementations with
            speed, security, and scalability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              <Link href="/contact">Schedule a Strategy Call</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">20+</span>
              <span>Years Experience</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">50+</span>
              <span>Team Members</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">100+</span>
              <span>Projects Delivered</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Simple Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative z-10 flex items-center justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Placeholder illustration - replace with actual image */}
            <div className="relative h-[500px] w-full max-w-[550px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm border border-white/20">
              {/* Dashboard/Analytics Illustration */}
              <div className="flex h-full flex-col justify-center space-y-6">
                {/* Header Bar */}
                <div className="flex items-center justify-between rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="h-3 w-32 rounded-full bg-white/30" />
                  <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-white/30" />
                    <div className="size-3 rounded-full bg-white/30" />
                    <div className="size-3 rounded-full bg-white/30" />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="mb-2 h-2 w-16 rounded-full bg-white/30" />
                    <div className="h-6 w-24 rounded-lg bg-white/40" />
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="mb-2 h-2 w-16 rounded-full bg-white/30" />
                    <div className="h-6 w-24 rounded-lg bg-white/40" />
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-4 h-3 w-32 rounded-full bg-white/30" />
                  <div className="relative h-full">
                    {/* Chart bars */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2">
                      {[60, 80, 50, 90, 70, 85, 65, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.6,
                            delay: 0.8 + i * 0.1,
                            ease: "easeOut",
                          }}
                          className="w-full rounded-t-lg bg-primary/60 transition-all hover:bg-primary/80"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 size-20 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 size-20 rounded-full bg-blue-400/20 blur-2xl" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
