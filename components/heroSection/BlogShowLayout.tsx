import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/constants/blog";

type Props = {
  children: React.ReactNode;
};

const RecentItem = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/blog/${encodeURIComponent(post.title)}`}
      className="block mb-4"
    >
      <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--card)] shadow-sm">
        <img
          src="/logos/logo-color.png"
          alt="2M logo"
          className="w-12 h-12 object-contain rounded"
        />
        <div>
          <h4 className="text-sm font-semibold">{post.title}</h4>
          <p className="text-xs text-[var(--color-muted-foreground)]">
            {post.date}
          </p>
        </div>
      </div>
    </Link>
  );
};

const BlogShowLayout = ({ children }: Props) => {
  const recent = blogPosts.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-4 xl:col-span-3">
          <div className="rounded-md border bg-[var(--card)] p-6">
            <h3 className="text-lg font-bold mb-4">Recent News</h3>
            <div>
              {recent.map((p) => (
                <RecentItem key={p.id} post={p} />
              ))}
            </div>
          </div>
        </aside>

        <section className="lg:col-span-8 xl:col-span-9">{children}</section>
      </div>
    </div>
  );
};

export default BlogShowLayout;
