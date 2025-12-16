"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Building2,
  Calendar,
  MapPin,
  Tag,
  CheckCircle2,
  Target,
  Lightbulb,
  Mail,
  User,
  ArrowLeft,
  Code,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    client: string;
    year: string;
    category: string;
    location: string;
    tags: string[];
    description: string;
    scope: string[];
    technologies: string[];
    impact: string;
    reference: {
      name: string;
      email: string;
    };
  };
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#1a3a5f] via-[#0a1e3d] to-[#1a3a5f] py-24 lg:py-32 pt-32 lg:pt-40 overflow-hidden"
        style={{
          backgroundImage: "url('/home/bg-wave.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9933]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2  hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Projects</span>
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg backdrop-blur-sm ${
                project.category === "Data Analytics"
                  ? "bg-blue-500/90 text-white"
                  : "bg-purple-500/90 text-white"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              {project.category}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-4xl font-bold text-[#1a3a5f] lg:text-5xl xl:text-6xl max-w-5xl leading-tight"
          >
            {project.title}
          </motion.h1>

          {/* Meta Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20">
              <Building2 className="h-5 w-5 text-[#FF9933]" />
              <span className="text-base text-[#1a3a5f] font-medium">
                {project.client}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20">
              <Calendar className="h-5 w-5 text-[#FF9933]" />
              <span className="text-base text-[#1a3a5f] font-medium">
                {project.year}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-[#FF9933]" />
              <span className="text-base text-[#1a3a5f] font-medium">
                {project.location}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            {/* Left Column - Main Content */}
            <div className="space-y-16">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-[#FF9933] to-orange-300 rounded-full" />
                <h2 className="mb-6 text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
                  Project Overview
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 pl-2">
                  {project.description}
                </p>
              </motion.div>

              {/* Project Scope */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-8 lg:p-10 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF9933] to-orange-600 shadow-lg">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
                    Project Scope
                  </h2>
                </div>
                <ul className="space-y-5">
                  {project.scope.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF9933]/10 group-hover:bg-[#FF9933]/20 transition-colors">
                          <CheckCircle2 className="h-5 w-5 text-[#FF9933] group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-3xl bg-gradient-to-br from-[#FF9933]/5 via-orange-50 to-[#FF9933]/10 p-10 lg:p-12 border-2 border-[#FF9933]/30 shadow-2xl overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9933]/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-200/30 rounded-full blur-2xl -z-10" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF9933] to-orange-600 shadow-xl">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
                    Project Impact
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-800 font-medium">
                  {project.impact}
                </p>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-8 self-start">
              {/* Technologies Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="rounded-2xl border-2 border-gray-200 bg-white p-7 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a5f] to-[#0a1e3d]">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a5f]">
                    Technologies & Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="inline-block rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 hover:border-[#FF9933] hover:bg-[#FF9933]/5 transition-all cursor-default shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Tags Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border-2 border-[#FF9933]/30 bg-gradient-to-br from-white to-orange-50/30 p-7 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF9933] to-orange-600">
                    <Tag className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a5f]">
                    Project Tags
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#FF9933]/15 px-4 py-2.5 text-sm font-semibold text-[#FF9933] border-2 border-[#FF9933]/30 hover:bg-[#FF9933]/25 transition-colors cursor-default shadow-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FF9933]" />
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Reference Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border-2 border-[#1a3a5f]/20 bg-gradient-to-br from-[#1a3a5f] via-[#0a1e3d] to-[#1a3a5f] p-7 shadow-2xl text-white overflow-hidden group"
              >
                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF9933]/20 rounded-full blur-3xl group-hover:bg-[#FF9933]/30 transition-colors" />

                <h3 className="mb-6 text-xl font-bold relative z-10">
                  Project Reference
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-orange-600 shadow-lg">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-0.5">
                        Contact Person
                      </p>
                      <p className="font-semibold">{project.reference.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-orange-600 shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/60 mb-0.5">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${project.reference.email}`}
                        className="text-sm font-medium text-white hover:text-[#FF9933] transition-colors break-all block"
                      >
                        {project.reference.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative rounded-2xl bg-gradient-to-br from-[#FF9933] via-orange-600 to-[#FF9933] p-8 shadow-2xl text-white overflow-hidden group"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-xl">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">
                    Interested in Similar Projects?
                  </h3>
                  <p className="mb-6 text-sm text-white/95 leading-relaxed">
                    Contact us to discuss how we can help with your data
                    analytics or software development needs.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-[#FF9933] hover:bg-gray-50 hover:scale-105 transition-all shadow-lg group"
                  >
                    Get in Touch
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
