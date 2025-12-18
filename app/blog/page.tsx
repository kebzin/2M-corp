import React from "react";
import BlogHero from "@/components/heroSection/BlogHero";
import { blogPosts } from "@/lib/constants/blog";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
          All Articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--card)] p-6"
            >
              <div className="mb-3 text-sm text-gray-500">
                {post.category} • {post.date}
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.title}`}
                className="text-primary font-semibold"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
