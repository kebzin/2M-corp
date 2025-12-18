"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type Author = { name: string; role?: string; avatar?: string };
type Post = {
  id: number | string;
  title: string;
  excerpt?: string;
  image?: string;
  category?: string;
  date?: string;
  readTime?: string;
  author?: Author;
};

const BlogPostHero: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <section
      className="relative bg-white py-12 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(15,23,42,0.02), transparent) , url('/home/bg-wave.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400"
            >
              {post.category ?? "Article"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold leading-tight text-[#0f172a] lg:text-4xl"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-6 flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-base">
                {post.author?.avatar ?? "👩‍💻"}
              </div>
              <div>
                <div className="font-medium text-[#0f172a]">
                  {post.author?.name}
                </div>
                <div className="text-xs text-gray-500">
                  {post.date} • {post.readTime}
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base leading-relaxed text-[#0f172a]/80"
            >
              {post.excerpt}
            </motion.p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-muted-foreground)]"
              >
                Back to articles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary-foreground)]"
              >
                Work with us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            {post.image ? (
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={540}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden bg-gray-100 h-48" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostHero;
