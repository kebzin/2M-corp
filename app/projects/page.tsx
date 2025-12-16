import React from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import ProjectsFAQ from "@/components/projects/ProjectsFAQ";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects & Case Studies | 2M Corp - Data & Software Services",
  description:
    "Explore 2M Corp's portfolio of successful data analytics and software development projects across Africa and Asia. Projects for World Bank, UNICEF, government ministries, and private enterprises.",
  keywords:
    "projects, case studies, World Bank projects, UNICEF surveys, impact evaluations, software implementations, ERP, openIMIS, Kaarange MIS, data collection, The Gambia, Africa",
  openGraph: {
    title: "Our Projects | 2M Corp",
    description:
      "Successful data and software projects delivered for international organizations, governments, and enterprises.",
    type: "website",
  },
};

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsHero />
      <ProjectsShowcase />
      <ProjectsFAQ />
    </div>
  );
};

export default ProjectsPage;
