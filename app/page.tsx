import type { Metadata } from "next";
import HeroSection from "@/components/heroSection/HeroSection";
import TrustedBy from "@/components/heroSection/TrustedBy";
import ImpactSection from "@/components/heroSection/ImpactSection";
import IndustrySolutions from "@/components/heroSection/IndustrySolutions";
import PlatformShowcase from "@/components/heroSection/PlatformShowcase";
import DemoShowcase from "@/components/heroSection/DemoShowcase";
import SolutionsFeatures from "@/components/heroSection/SolutionsFeatures";
import ClientSolutions from "@/components/heroSection/ClientSolutions";
import WhyChoose2M from "@/components/heroSection/WhyChoose2M";
import Testimonials from "@/components/heroSection/Testimonials";
import BlogSection from "@/components/heroSection/BlogSection";

export const metadata: Metadata = {
  title: "2M Corp - Data Analytics & Software Development Solutions in Africa",
  description:
    "Leading software solutions firm in The Gambia with 20+ years of experience in data analytics, custom software development, M&E systems, and Microsoft 365 implementation across Africa.",
  keywords: [
    "data analytics",
    "software development",
    "Microsoft 365",
    "monitoring and evaluation",
    "social protection systems",
    "data collection",
    "impact evaluation",
    "custom software",
    "Africa",
    "The Gambia",
    "STATA training",
    "SPSS",
    "survey design",
  ],
  authors: [{ name: "2M Corp" }],
  openGraph: {
    title: "2M Corp - Data Analytics & Software Development Solutions",
    description:
      "Transform your data into insights. Build custom software solutions. 20+ years serving institutions across Africa.",
    url: "https://2m-corp.com",
    siteName: "2M Corp",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "2M Corp - Data Analytics & Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2M Corp - Data Analytics & Software Development Solutions",
    description:
      "Transform your data into insights. Build custom software solutions. 20+ years serving institutions across Africa.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <ImpactSection />
      <IndustrySolutions />
      <PlatformShowcase />
      <DemoShowcase />
      <SolutionsFeatures />
      <ClientSolutions />
      <WhyChoose2M />
      <Testimonials />
      <BlogSection />
    </main>
  );
}
