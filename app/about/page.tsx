import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us - 2M Corp | 20+ Years of Excellence in Data Analytics & Software",
  description:
    "Learn about 2M Corp's journey, our team of experts, and how we've been delivering world-class data analytics and software solutions across Africa for over two decades.",
};

import AboutHero from "@/components/about/AboutHero";
import OurVision from "@/components/about/OurVision";
import OurMission from "@/components/about/OurMission";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import TeamSection from "@/components/about/TeamSection";
import PartnersSection from "@/components/about/PartnersSection";
import AboutFAQ from "@/components/about/AboutFAQ";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurVision />
      <OurMission />
      <WhatMakesUsDifferent />
      <TeamSection />
      <PartnersSection />
      <AboutFAQ />
    </main>
  );
}
