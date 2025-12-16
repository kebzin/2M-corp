"use client";

import React from "react";
import { Shield, Cloud, Heart, Users } from "lucide-react";

const ProductsFeatures = () => {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-[#1a3a5f] uppercase tracking-wider mb-4">
              Secure and scalable
            </div>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#1a3a5f] mb-6 leading-tight">
              {/* <span className="text-[#FF9933]"></span> */}
              <br />
              system that grows with you!
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your business doesn’t have to face even the slightest of problems
              when it comes to security and scalability. Our solutions comes
              with advanced security features and seamless scalability
              capabilities to keep your business thriving, growing, and
              outshining your competition at all times!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Shield className="h-5 w-5 text-[#1a3a5f]" />}
              title="Secure platform"
              text="PCI SSF-compliant solution to ensure the safety of sensitive data stored or transmitted."
            />

            <FeatureCard
              icon={<Cloud className="h-5 w-5 text-[#1a3a5f]" />}
              title="Multi-currency & multi-tenant"
              text="Trade in multi-currencies & operate multiple environments with its multi-tenant capabilities."
            />

            <FeatureCard
              icon={<Heart className="h-5 w-5 text-[#1a3a5f]" />}
              title="Tailored solutions"
              text="Rebrand your mobile wallet app by adding your logo & customize the solution as per your business needs."
            />

            <FeatureCard
              icon={<Users className="h-5 w-5 text-[#1a3a5f]" />}
              title="Seamless integration"
              text="Scale your business with seamless integration capabilities for smooth transition & functioning."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#F6F8FA] p-6 flex gap-4 items-start">
      <div className="h-12 w-12 rounded-lg bg-white grid place-items-center shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[#1a3a5f] mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default ProductsFeatures;
