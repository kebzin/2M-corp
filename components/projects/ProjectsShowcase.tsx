"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Building2, Calendar, MapPin, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/constants/projects";

// Import projects data

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Data Analytics", "Software Solutions"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="relative bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="mb-3 inline-block rounded-full bg-[#FF9933]/10 px-4 py-1 text-sm font-medium text-[#FF9933]">
              Our Portfolio
            </span>
            <h2 className="mb-4 text-3xl font-bold text-[#1a3a5f] lg:text-4xl max-w-3xl">
              Delivering Impact Across Africa and Beyond
            </h2>
            <p className="text-base leading-relaxed text-gray-600 lg:text-lg max-w-3xl">
              From large-scale data collection to enterprise software
              implementation, our projects span government agencies,
              international organizations, and private sector clients.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#FF9933] text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    project.category === "Data Analytics"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="mb-4 flex flex-wrap gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5" />
                    <span className="truncate">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-[#1a3a5f] line-clamp-2 group-hover:text-[#FF9933] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="group/btn flex items-center gap-2 text-sm font-semibold text-[#FF9933] hover:gap-3 transition-all"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#FF9933] to-orange-600 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
