"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SubProductDetail from "./SubProductDetail";
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
  if (!subproducts || subproducts.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <p className="text-gray-600">
          No sub-products available for this product.
        </p>
      </div>
    );
  }

  const first = defaultActive || subproducts[0].slug;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      {/* Section header - follow site UI pattern */}

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
          {sectionTitle}{" "}
        </h2>
        <p className="text-base leading-relaxed text-gray-600 lg:text-lg max-w-3xl">
          {sectionDescription}
        </p>
      </motion.div>

      <Tabs defaultValue={first} className="w-full">
        <TabsList>
          {subproducts.map((s) => (
            <TabsTrigger key={s.id} value={s.slug} className="px-4 py-2">
              {s.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <Separator />

        <div className="mt-6">
          {subproducts.map((s) => (
            <TabsContent key={s.id} value={s.slug} className="p-0">
              <SubProductDetail product={s} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ProductDetailContainer;
