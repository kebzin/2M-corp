import React from "react";
import ServiceDetailHeroSection from "@/components/services/ServiceDetailHeroSection";
import { services } from "@/lib/constants/services";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";

type Props = {
  params: { slug: string };
};

const ServicesShowPage = async ({ params }: Props) => {
  const { slug } = await params;

  // Format title from slug
  const title = slug
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const service = services.find((svc) => svc.title === title);

  return (
    <main>
      <ServiceDetailHeroSection
        title={service?.title}
        subtitle="SERVICE"
        description={service?.description}
      />
      {/* Service Detail Content Component can be added here */}
      <ServiceDetailContent service={service?.title} />
    </main>
  );
};

export default ServicesShowPage;
