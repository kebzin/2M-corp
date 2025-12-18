"use client";

import React, { useEffect, useState } from "react";
import { Check, Users } from "lucide-react";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";

type SubProduct = {
  id: string;
  title: string;
  slug: string;
  tagline?: string;
  description?: string;
  featured?: boolean;
  status?: string;
  why?: string;
};

const ProductDetailContainer = ({
  subproducts,
  defaultActive,
  sectionTitle,
  sectionDescription,
}: {
  subproducts: SubProduct[];
  defaultActive?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}) => {
  const [active, setActive] = useState<string | null>(null);

  // Helper: split a single description into `n` paragraph strings
  const splitIntoParagraphs = (text: string, n = 3) => {
    if (!text) return [];
    // Split into sentences via punctuation followed by space
    const sentences = text
      .split(/(?<=[.?!])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

    if (sentences.length <= n) return sentences;

    const per = Math.ceil(sentences.length / n);
    const paragraphs: string[] = [];
    for (let i = 0; i < sentences.length; i += per) {
      paragraphs.push(sentences.slice(i, i + per).join(" "));
    }
    // If we produced fewer than n, that's fine; otherwise return as is
    return paragraphs;
  };

  useEffect(() => {
    const ids = subproducts.map((s) => s.slug);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [subproducts]);
  if (!subproducts || subproducts.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <p className="text-gray-600">
          No sub-products available for this product.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <span className="mb-3 inline-block rounded-full bg-[#FF9933]/10 px-4 py-1 text-sm font-medium text-[#FF9933]">
          PRODUCT DETAILS
        </span>
        <h2 className="mb-4 text-3xl font-bold text-[#1a3a5f] lg:text-4xl max-w-3xl">
          {sectionTitle}
        </h2>
        <p className="text-base leading-relaxed text-gray-600 lg:text-lg max-w-3xl">
          {sectionDescription}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left sidebar with list + download */}
        <aside className="space-y-6">
          <div className="rounded-xl bg-[var(--card)] p-6 border border-[var(--color-border)]">
            <h4 className="font-semibold text-[var(--color-primary)] mb-4">
              All Sub-products
            </h4>
            <ul className="text-[var(--color-muted-foreground)] space-y-2">
              {subproducts.map((s) => (
                <li
                  key={s.id}
                  className="border-b border-[var(--color-border)]/50 pb-2"
                >
                  <a
                    className={`flex items-center justify-between gap-3 py-2 px-2 rounded-md transition-colors ${
                      active === s.slug
                        ? "bg-[var(--color-primary)]/6 text-[var(--color-primary)]"
                        : "hover:bg-[var(--card)]/50"
                    }`}
                  >
                    <span className="font-medium">{s.title}</span>
                    {s.featured && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-3 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
                        Featured
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--color-border)]">
            <img
              src="/home/bg-counter-img-min.png"
              alt="product"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <a
                href="/contact"
                className="inline-block px-4 py-2 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-md"
              >
                Request Quote
              </a>
            </div>
          </div>
        </aside>

        {/* Main content - render each subproduct as a section */}
        <div className="lg:col-span-2 space-y-10">
          {subproducts.map((s, idx) => (
            <section
              id={s.slug}
              key={s.id}
              className={`rounded-lg p-6 border border-[var(--color-border)] bg-[var(--card)] transition-shadow ${
                idx % 2 === 0 ? "hover:shadow-lg" : "hover:shadow-xl"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                    {s.title}
                  </h3>
                  {s.tagline && (
                    <p className="text-sm text-[var(--color-muted-foreground)] mt-2">
                      {s.tagline}
                    </p>
                  )}
                  {s.description && (
                    <p className="mt-4 text-[var(--color-muted-foreground)]">
                      {s.description}
                    </p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <div className="w-full h-40 bg-gray-100 rounded overflow-hidden">
                    <img
                      src="/home/bg-wave.webp"
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {/* Why */}
                {s.why && (
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                      Why this service
                    </h4>
                    <p className="text-[var(--color-muted-foreground)]">
                      {s.why}
                    </p>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContainer;
