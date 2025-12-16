import React from "react";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsList from "@/components/products/ProductsList";
import ProductsFeatures from "@/components/products/ProductsFeatures";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Solutions | 2M Corp - Enterprise Software & MIS",
  description:
    "Explore 2M Corp's suite of enterprise software products including openIMIS health insurance management, Kaarange MIS, ERP solutions, and custom data management systems.",
  keywords:
    "enterprise software, openIMIS, Kaarange MIS, ERP solutions, health insurance software, management information systems, data management, The Gambia, Africa",
  openGraph: {
    title: "Our Products | 2M Corp",
    description:
      "Enterprise software solutions and custom MIS platforms designed for African organizations.",
    type: "website",
  },
};

const ProductsPage = () => {
  return (
    <div>
      <ProductsHero />
      <ProductsList />
      <ProductsFeatures />
    </div>
  );
};

export default ProductsPage;
