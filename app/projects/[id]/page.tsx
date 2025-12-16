import React from "react";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { Metadata } from "next";
import { projects } from "@/lib/constants/projects";

// Import projects data

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | 2M Corp",
    };
  }

  return {
    title: `${project.title} | 2M Corp Projects`,
    description: project.description,
    keywords: [...project.tags, project.category, project.location].join(", "),
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
