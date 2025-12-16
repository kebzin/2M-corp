"use client";

import React, { useState } from "react";
import type { JSX } from "react";
import { motion, AnimatePresence } from "motion/react";

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState("dataservices");

  // Icon component renderer
  const renderIcon = (iconName: string, className: string = "h-8 w-8") => {
    const icons: Record<string, JSX.Element> = {
      chart: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      database: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      analytics: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
      code: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      mobile: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      cloud: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      teams: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      microsoft: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
        </svg>
      ),
      support: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      monitoring: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      dashboard: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 13a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z"
          />
        </svg>
      ),
      report: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      users: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      payment: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      shield: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      training: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      certificate: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      education: (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    };
    return icons[iconName] || icons.chart;
  };

  const industries = [
    {
      id: "dataservices",
      label: "Data Services",
      title: "Data Analytics & Management",
      description:
        "Transform your data into actionable insights with our comprehensive data analysis, collection, and management services across Africa.",
      features: [
        "Large-scale impact evaluations with 20+ years of experience in health, education, and social protection sectors.",
        "Custom survey design and data collection using CAPI, PAPI, and advanced statistical methods.",
        "Data visualization and reporting with Power BI, Tableau, and custom dashboards for real-time insights.",
        "Statistical analysis using STATA, SPSS, R, and Python for evidence-based decision making.",
      ],
      ctaText: "Explore Data Services",
      image: "/home/data-services.jpg",
      cards: [
        {
          icon: "chart",
          label: "Data Visualization",
          position: "left-4 top-8 lg:left-8 lg:top-12",
          bgColor: "bg-blue-100",
          iconColor: "text-blue-600",
          textColor: "text-blue-600",
        },
        {
          icon: "database",
          label: "STATA · SPSS · R",
          position: "right-1/4 top-1/4",
          bgColor: "bg-[#1a3a5f]",
          iconColor: "text-white",
          textColor: "text-white",
          darkCard: true,
        },
        {
          icon: "analytics",
          label: "Impact Analysis",
          position: "bottom-8 right-4 lg:bottom-12 lg:right-8",
          bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
          iconColor: "text-primary",
          textColor: "text-primary",
        },
      ],
    },
    {
      id: "software",
      label: "Software Development",
      title: "Custom Software Solutions",
      description:
        "Enterprise-grade software development tailored to your business needs, from web applications to mobile solutions.",
      features: [
        "Full-stack development with modern technologies (Next.js, React, Node.js, .NET).",
        "Mobile app development for iOS and Android platforms.",
        "Cloud-based solutions with Microsoft Azure and AWS integration.",
        "Legacy system modernization and API development.",
      ],
      ctaText: "Explore Software Services",
      image: "/home/software-dev.jpg",
      cards: [
        {
          icon: "code",
          label: "Full-Stack Dev",
          position: "left-4 top-8 lg:left-8 lg:top-12",
          bgColor: "bg-purple-100",
          iconColor: "text-purple-600",
          textColor: "text-purple-600",
        },
        {
          icon: "mobile",
          label: "Mobile Apps",
          position: "right-1/4 top-1/4",
          bgColor: "bg-[#1a3a5f]",
          iconColor: "text-white",
          textColor: "text-white",
          darkCard: true,
        },
        {
          icon: "cloud",
          label: "Cloud Solutions",
          position: "bottom-8 right-4 lg:bottom-12 lg:right-8",
          bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
          iconColor: "text-primary",
          textColor: "text-primary",
        },
      ],
    },
    {
      id: "microsoft365",
      label: "Microsoft 365",
      title: "Microsoft 365 Solutions",
      description:
        "Maximize productivity with Microsoft 365 implementation, training, and ongoing support for your organization.",
      features: [
        "Complete Microsoft 365 setup and migration services.",
        "SharePoint, Teams, and OneDrive implementation and customization.",
        "Staff training and change management programs.",
        "Ongoing technical support and optimization.",
      ],
      ctaText: "Explore Microsoft 365 Services",
      image: "/home/m365-solutions.jpg",
      cards: [
        {
          icon: "teams",
          label: "Teams & SharePoint",
          position: "left-4 top-8 lg:left-8 lg:top-12",
          bgColor: "bg-green-100",
          iconColor: "text-green-600",
          textColor: "text-green-600",
        },
        {
          icon: "microsoft",
          label: "Microsoft 365",
          position: "right-1/4 top-1/4",
          bgColor: "bg-[#1a3a5f]",
          iconColor: "text-white",
          textColor: "text-white",
          darkCard: true,
        },
        {
          icon: "support",
          label: "24/7 Support",
          position: "bottom-8 right-4 lg:bottom-12 lg:right-8",
          bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
          iconColor: "text-primary",
          textColor: "text-primary",
        },
      ],
    },
    {
      id: "me",
      label: "M&E Systems",
      title: "Monitoring & Evaluation",
      description:
        "Design and implement robust M&E systems to track program performance and demonstrate impact.",
      features: [
        "M&E framework design aligned with donor requirements (World Bank, USAID, EU).",
        "Real-time data collection systems with mobile integration.",
        "Impact assessment using quasi-experimental and RCT methodologies.",
        "Automated reporting dashboards for stakeholder engagement.",
      ],
      ctaText: "Explore M&E Solutions",
      image: "/home/me-systems.jpg",
      cards: [
        {
          icon: "monitoring",
          label: "Real-time Monitoring",
          position: "left-4 top-8 lg:left-8 lg:top-12",
          bgColor: "bg-indigo-100",
          iconColor: "text-indigo-600",
          textColor: "text-indigo-600",
        },
        {
          icon: "dashboard",
          label: "Impact Dashboard",
          position: "right-1/4 top-1/4",
          bgColor: "bg-[#1a3a5f]",
          iconColor: "text-white",
          textColor: "text-white",
          darkCard: true,
        },
        {
          icon: "report",
          label: "Automated Reports",
          position: "bottom-8 right-4 lg:bottom-12 lg:right-8",
          bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
          iconColor: "text-primary",
          textColor: "text-primary",
        },
      ],
    },
    {
      id: "socialprotection",
      label: "Social Protection",
      title: "Social Protection Systems",
      description:
        "Build inclusive social protection programs with beneficiary management, payment systems, and data analytics.",
      features: [
        "Beneficiary registry design and management systems.",
        "Digital payment integration for cash transfer programs.",
        "Grievance redress mechanism implementation.",
        "Program monitoring and compliance reporting.",
      ],
      ctaText: "Explore Social Protection Solutions",
      image: "/home/social-protection.jpg",
      cards: [
        {
          icon: "users",
          label: "Beneficiary Registry",
          position: "left-4 top-8 lg:left-8 lg:top-12",
          bgColor: "bg-teal-100",
          iconColor: "text-teal-600",
          textColor: "text-teal-600",
        },
        {
          icon: "payment",
          label: "Digital Payments",
          position: "right-1/4 top-1/4",
          bgColor: "bg-[#1a3a5f]",
          iconColor: "text-white",
          textColor: "text-white",
          darkCard: true,
        },
        {
          icon: "shield",
          label: "Secure & Compliant",
          position: "bottom-8 right-4 lg:bottom-12 lg:right-8",
          bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
          iconColor: "text-primary",
          textColor: "text-primary",
        },
      ],
    },
    {
      id: "training",
      label: "Training",
      title: "Capacity Building & Training",
      description:
        "Empower your team with professional training in data analysis, statistical software, and research methodologies.",
      features: [
        "STATA, SPSS, R, and Python training for data professionals.",
        "Survey design and sampling methodology workshops.",
        "Microsoft 365 and Power BI certification programs.",
        "Custom training programs tailored to organizational needs.",
      ],
      ctaText: "Explore Training Programs",
      image: "/home/training-services.jpg",
      cards: [
        {
          icon: "training",
          label: "Professional Training",
          position: "left-4 top-8 lg:left-8 lg:top-12",
          bgColor: "bg-amber-100",
          iconColor: "text-amber-600",
          textColor: "text-amber-600",
        },
        {
          icon: "certificate",
          label: "Certification Programs",
          position: "right-1/4 top-1/4",
          bgColor: "bg-[#1a3a5f]",
          iconColor: "text-white",
          textColor: "text-white",
          darkCard: true,
        },
        {
          icon: "education",
          label: "Custom Workshops",
          position: "bottom-8 right-4 lg:bottom-12 lg:right-8",
          bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
          iconColor: "text-primary",
          textColor: "text-primary",
        },
      ],
    },
  ];

  const activeIndustry =
    industries.find((ind) => ind.id === activeTab) || industries[0];

  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#1a3a5f] lg:text-4xl xl:text-5xl">
            Comprehensive Solutions Across
            <br />
            Multiple Service Areas
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`relative px-6 pb-3 pt-3 text-sm font-medium transition-all duration-300 lg:text-base cursor-pointer ${
                  activeTab === industry.id
                    ? "text-[#1a3a5f]"
                    : "text-[#5a6c7d] hover:text-[#1a3a5f]"
                }`}
              >
                {industry.label}
                {activeTab === industry.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Separator line below tabs */}
          <div className="mt-0 h-px w-full bg-gray-200" />
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl bg-white shadow-lg"
          >
            <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-6 text-3xl font-bold text-[#1a3a5f] lg:text-4xl">
                  {activeIndustry.title}
                </h3>
                <p className="mb-8 text-base leading-relaxed text-[#5a6c7d] lg:text-lg">
                  {activeIndustry.description}
                </p>

                {/* Features List */}
                <ul className="mb-8 space-y-4">
                  {activeIndustry.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-relaxed text-[#5a6c7d] lg:text-base">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div>
                  <button className="group inline-flex items-center gap-2 text-base font-semibold text-primary transition-all hover:gap-3 lg:text-lg">
                    {activeIndustry.ctaText}
                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Content - Dynamic Cards */}
              <div className="relative flex items-center justify-center">
                <div className="relative h-[400px] w-full lg:h-[500px]">
                  {/* Main Background */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B4C8C] via-[#0A3A6B] to-[#082B52]">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]" />
                    </div>

                    {/* Dynamic Floating Cards */}
                    {activeIndustry.cards.map((card, index) => (
                      <motion.div
                        key={`${activeTab}-${index}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className={`absolute ${card.position} rounded-xl ${card.bgColor} p-4 shadow-xl lg:p-6`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-lg ${
                              card.darkCard ? "bg-white/10" : card.bgColor
                            } p-3`}
                          >
                            {renderIcon(
                              card.icon,
                              `h-6 w-6 lg:h-8 lg:w-8 ${card.iconColor}`
                            )}
                          </div>
                          <div>
                            <p
                              className={`text-xs font-semibold lg:text-sm ${card.textColor}`}
                            >
                              {card.label}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Download Brochure Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center lg:text-right"
        ></motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
