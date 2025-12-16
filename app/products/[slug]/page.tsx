import React from "react";
import ProductShowHero from "@/components/products/ProductShowHero";
import ProductDetailContainer from "@/components/products/ProductDetailContainer";
import { Products } from "@/lib/constants/products";
import { notFound } from "next/navigation";

type Params = {
  params: { slug: string };
};

const findProductBySlug = (slug: string) => {
  // Search top-level categories by slug first

  const cat = Products.find((c) => c.slug === slug || c.id === slug);
  if (cat)
    return {
      title: cat.title,
      description: cat.description,
      color: cat.color,
      icon: undefined,
    };

  // Search nested products
  for (const category of Products) {
    const prod = category.products.find(
      (p) => p.slug === slug || p.id === slug
    );
    if (prod)
      return {
        title: prod.title,
        description: prod.description,
        color: category.color,
        icon: undefined,
      };
  }

  return null;
};

const ProductPage = async ({ params }: Params) => {
  const { slug } = await params;

  // console.log(slug);

  const data = findProductBySlug(slug);
  if (!data) return notFound();

  // Derive subproducts for the given slug: if slug is a category, show its products; if slug is subproduct, show siblings from same category
  interface Product {
    id: string;
    slug: string;
    title: string;
    description: string;
    // Add other fields as needed
  }

  interface ProductCategory {
    id: string;
    slug: string;
    title: string;
    description: string;
    color: string;
    products: Product[];
    // Add other fields as needed
  }

  interface ProductData {
    title: string;
    description: string;
    color: string;
    icon: undefined;
  }

  let subproducts: Product[] = [];
  const category = Products.find((c) => c.slug === slug || c.id === slug);
  if (category) {
    subproducts = category.products;
  } else {
    for (const c of Products) {
      const prod = c.products.find((p) => p.slug === slug || p.id === slug);
      if (prod) {
        subproducts = c.products;
        break;
      }
    }
  }

  return (
    <div>
      <ProductShowHero
        title={`${data.title} For Your Business`}
        description={data.description}
        color={data.color}
      />
      <ProductDetailContainer
        subproducts={subproducts}
        sectionTitle={`${data.title} Details`}
        sectionDescription={`Explore ${data.title} sub-products, features, and integrations.`}
      />
    </div>
  );
};

export default ProductPage;
