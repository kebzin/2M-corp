import React from "react";
import { notFound } from "next/navigation";
import BlogPostHero from "@/components/heroSection/BlogPostHero";
import BlogShowLayout from "@/components/heroSection/BlogShowLayout";
import { blogPosts } from "@/lib/constants/blog";

// type Params = { slug: string };

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.title === decodeURIComponent(slug));

  if (!post) return notFound();

  return (
    <main>
      <BlogPostHero post={post} />
      <BlogShowLayout>
        <article className="mx-auto max-w-3xl px-2 lg:px-0 py-6">
          <div className="mb-4 flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]">
            <span className="inline-block rounded-full bg-[var(--card)] px-3 py-1 text-xs font-semibold">
              {post.category ?? "Article"}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>

          <p className="text-lg text-[var(--color-muted-foreground)] mb-6">
            {post.excerpt}
          </p>

          {post.image ? (
            <div className="mb-6 rounded-xl overflow-hidden shadow">
              {/* Using regular img for now to avoid next/image configuration issues */}
              <img
                src="/logos/logo-color.png"
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : null}

          <div className="prose prose-lg">
            {(post.content ?? []).map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-6">
            <div className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-lg">
              {post.author?.avatar ?? "👩‍💻"}
            </div>

            <div>
              <div className="font-semibold">{post.author?.name}</div>
              {post.author?.role ? (
                <div className="text-sm text-[var(--color-muted-foreground)]">
                  {post.author.role}
                </div>
              ) : null}
              <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                {/* Placeholder bio - if you want, add `author.bio` to the data and render it here. */}
                {post.author?.name} is a member of the 2M Corp team with
                expertise in{" "}
                {post.category?.toLowerCase() ?? "our practice areas"}.
              </p>
            </div>
          </div>
        </article>
      </BlogShowLayout>
    </main>
  );
};

export default BlogPostPage;
