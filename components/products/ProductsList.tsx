"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Cloud,
  Shield,
  Heart,
  Users,
  Check,
  Star,
  Sparkles,
} from "lucide-react";
import { Products } from "@/lib/constants/products";
import { Button } from "../ui/button";
import Link from "next/link";

const iconMap: Record<string, any> = {
  UserGroupIcon: Users,
  ShieldCheckIcon: Shield,
  HeartIcon: Heart,
  CloudIcon: Cloud,
};

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: {
    bg: "from-blue-500 to-blue-600",
    border: "border-blue-200",
    text: "text-blue-600",
  },
  navy: {
    bg: "from-[#1a3a5f] to-[#0a1e3d]",
    border: "border-[#1a3a5f]/20",
    text: "text-[#1a3a5f]",
  },
  teal: {
    bg: "from-teal-500 to-teal-600",
    border: "border-teal-200",
    text: "text-teal-600",
  },
  purple: {
    bg: "from-purple-500 to-purple-600",
    border: "border-purple-200",
    text: "text-purple-600",
  },
};

const ProductsList = () => {
  // Flatten all products with category info
  //   const allProducts = Products.flatMap((category) =>
  //     category.products.map((product) => ({
  //       ...product,
  //       categoryId: category.id,
  //       categoryTitle: category.title,
  //       categoryIcon: category.icon,
  //       categoryColor: category.color,
  //       categoryBadge: category.badge,
  //     }))
  //   );

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" max-w-4xl  mb-12"
        >
          <div className="inline-flex  gap-2 rounded-full bg-[#FF9933]/10 px-4 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-[#FF9933]" />
            <span className="text-sm font-semibold text-[#FF9933]">
              Product Portfolio
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#1a3a5f] lg:text-5xl mb-4">
            Explore Our Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive suite of enterprise software, security solutions, and
            custom platforms tailored for African organizations.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {Products.map((product, index) => {
            const Icon = iconMap[product.icon] || Cloud;
            const colors = colorMap[product.color] || colorMap.blue;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 9) * 0.05 }}
                viewport={{ once: true }}
                className="break-inside-avoid mb-6"
              >
                <div className="group relative rounded-2xl border-2 border-gray-200 bg-white p-6 hover:border-[#FF9933]/30 hover:shadow-xl transition-all">
                  {/* Featured Badge */}
                  {product.badge && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-orange-600 shadow-lg">
                        <Star className="h-5 w-5 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors.bg} shadow-md`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {product.title}
                      </div>
                      {product.id && (
                        <div className="text-xs text-[#FF9933] font-medium mt-0.5">
                          {product.slug}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Content */}
                  <h3 className="text-xl font-bold text-[#1a3a5f] mb-2 group-hover:text-[#FF9933] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF9933] mb-3">
                    {product.id}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Status */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold tracking-wider">
                        Solutions
                      </span>

                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                        {product.products.length}
                      </div>
                    </div>

                    <Link href={`/products/${product.slug}`}>
                      <Button className="cursor-pointer" variant={"link"}>
                        Learn More &rarr;
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {Products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsList;
