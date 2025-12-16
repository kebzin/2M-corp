import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesListSection from "@/components/services/ServicesListSection";
import FintechTransformationSection from "@/components/services/FintechTransformationSection";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ServiceProcessSection from "@/components/services/ServiceProcessSection";
import ServicesFAQ from "@/components/services/ServicesFAQ";

export const metadata: Metadata = {
  title: "Services | 2M Corp",
  description:
    "Comprehensive software solutions, data analytics, Microsoft 365 implementation, and cybersecurity services across Africa.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesListSection />
      <WhyChooseSection />
      <FintechTransformationSection />
      <ServiceProcessSection />
      <ServicesFAQ />
    </main>
  );
}
