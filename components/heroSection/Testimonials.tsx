"use client";

import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Fatou Jallow",
      position: "Director of Health Information Systems",
      organization: "Ministry of Health, The Gambia",
      image: "👩‍⚕️",
      rating: 5,
      quote:
        "2M Corp transformed our health facility data management system. Their expertise in data analytics and custom software development enabled us to track patient outcomes across 50+ facilities in real-time. The impact on our decision-making has been remarkable.",
    },
    {
      name: "Omar Ceesay",
      position: "Chief Technology Officer",
      organization: "West African Development Bank",
      image: "👨‍💼",
      rating: 5,
      quote:
        "Working with 2M Corp on our digital transformation was a game-changer. Their team delivered a robust banking solution that handles thousands of transactions daily. Their understanding of financial systems in Africa is unmatched.",
    },
    {
      name: "Sarah Mensah",
      position: "Program Manager",
      organization: "UNICEF West Africa Regional Office",
      image: "👩‍💼",
      rating: 5,
      quote:
        "The social protection monitoring system developed by 2M Corp has been instrumental in tracking our program's impact across multiple countries. Their M&E expertise and technical capabilities exceeded our expectations.",
    },
    {
      name: "Mamadou Diallo",
      position: "Operations Director",
      organization: "Regional Money Transfer Network",
      image: "👨‍💻",
      rating: 5,
      quote:
        "2M Corp built our mobile money platform that now serves over 100,000 users. Their attention to security, scalability, and user experience made all the difference. The system has been running flawlessly for 3 years.",
    },
    {
      name: "Dr. Aminata Touray",
      position: "Research Coordinator",
      organization: "African Development Research Institute",
      image: "👩‍🔬",
      rating: 5,
      quote:
        "The data collection and analysis tools provided by 2M Corp revolutionized our research methodology. Their STATA training program upskilled our entire team, and their survey design expertise ensured high-quality data collection.",
    },
    {
      name: "Ibrahim Kamara",
      position: "IT Manager",
      organization: "National Social Security Agency",
      image: "👨‍💼",
      rating: 5,
      quote:
        "Implementing Microsoft 365 across our organization was seamless thanks to 2M Corp's consulting services. They understood our needs, customized the solution perfectly, and provided excellent post-implementation support.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
          >
            <Star className="h-4 w-4 fill-primary" />
            Client Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-[#1a3a5f] lg:text-5xl"
          >
            Trusted by Leading Organizations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg text-gray-600"
          >
            Hear from our partners across Africa about how 2M Corp's solutions
            have transformed their operations and driven measurable results.
          </motion.p>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="mx-auto w-full max-w-7xl"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8 shadow-lg">
                  {/* Star Rating */}
                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="mb-8 text-sm leading-relaxed text-gray-700">
                    {testimonial.quote}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-100 to-purple-100 text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-[#1a3a5f]">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {testimonial.position} at {testimonial.organization}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-12" />
          <CarouselNext className="right-0 translate-x-12" />
        </Carousel>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-gray-600">
            Join 100+ organizations that trust 2M Corp for their digital
            transformation
          </p>
          <button className="rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
