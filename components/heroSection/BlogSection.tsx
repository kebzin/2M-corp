"use client";

import React from "react";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { blogPosts } from "@/lib/constants/blog";

const BlogSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
          >
            <Tag className="h-4 w-4" />
            Insights & Updates
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-[#1a3a5f] lg:text-5xl"
          >
            Latest from Our Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg text-gray-600"
          >
            Stay updated with industry insights, project stories, and technical
            expertise from our team of data scientists, developers, and
            consultants.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a3a5f]/80 to-primary/60">
                  <div className="text-center text-white">
                    <div className="mb-2 text-6xl">📝</div>
                    <div className="text-sm font-semibold">{post.category}</div>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1a3a5f]">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-[#1a3a5f] transition-colors group-hover:text-primary">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="mb-4 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-xl">
                    {post.author.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a3a5f]">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/20"></div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            variant={"link"}
            className="group inline-flex items-center gap-2 rounded-xl  px-8 py-4 text-lg font-semibold   "
          >
            View All Articles
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
