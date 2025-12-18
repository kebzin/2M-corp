"use client";

import React from "react";
import {
  Check,
  Users,
  Cloud,
  Shield,
  Smartphone,
  Mail,
  Video,
  FileText,
  Cpu,
  Globe,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

// contentData kept inline only for fallback demos; prefer `product.content` from constants
const contentData: Record<string, any> = {};

const SubProductDetail = ({ product }: { product: any }) => {
  const data = product.content ?? contentData[product.slug];

  // map icon key string -> lucide component
  const iconMap: Record<string, any> = {
    video: Video,
    mail: Mail,
    cloud: Cloud,
    filetext: FileText,
    users: Users,
    smartphone: Smartphone,
    cpu: Cpu,
    globe: Globe,
    "shield-check": ShieldCheck,
    shield: Shield,
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[var(--color-primary)]">
          {product.title}
        </h3>
        {product.tagline && (
          <p className="text-sm text-[var(--color-muted-foreground)]">
            {product.tagline}
          </p>
        )}
      </div>

      <div className="prose prose-sm max-w-none text-[var(--color-muted-foreground)] mb-6">
        <p>{product.description}</p>
      </div>

      {/* Why section */}
      {(product.why || data?.why) && (
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
            Why this service
          </h4>
          <p className="text-[var(--color-muted-foreground)]">
            {product.why ?? data.why}
          </p>
        </div>
      )}

      {data ? (
        <>
          {/* Includes list */}
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-[var(--card)] p-6 border border-[var(--color-border)]">
              <h4 className="font-semibold text-lg mb-3 text-[var(--color-primary)]">
                Includes Everything You Need
              </h4>
              <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                {(data?.includes ?? []).map((inc: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex flex-col justify-between rounded-xl bg-[var(--card)] p-6 border border-[var(--color-border)]">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-[var(--color-primary)]">
                  Get Started
                </h4>
                <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                  Talk to our certified specialists for licensing, migration and
                  deployment support.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-md font-semibold"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 border border-[var(--color-border)] text-[var(--color-muted-foreground)] rounded-md"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Core Apps */}
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Essential Apps Included
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(data?.apps ?? []).map((app: any, idx: number) => {
                const Icon =
                  typeof app.icon === "string"
                    ? iconMap[app.icon] ?? Video
                    : app.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[var(--card)] rounded-xl p-5 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-xl mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h5 className="font-semibold mb-2 text-[var(--color-primary)]">
                      {app.name}
                    </h5>
                    <p className="text-sm text-[var(--color-muted-foreground)] mb-3">
                      {app.description}
                    </p>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {app.features.map((f: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-[var(--card)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm"
                        >
                          <Check className="h-4 w-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--color-muted-foreground)]">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features (from product.features or data.features) */}
          {(product.features || data?.features) && (
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Key Features
              </h4>
              <ul className="grid md:grid-cols-2 gap-3 list-none">
                {(product.features ?? data.features).map(
                  (f: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-[var(--card)] border border-[var(--color-border)] rounded-md p-3"
                    >
                      <Check className="h-5 w-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--color-muted-foreground)]">
                        {f}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Plans */}
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Choose the Right Plan
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(data?.plans ?? []).map((plan: any, idx: number) => (
                <div
                  key={idx}
                  className={`bg-[var(--card)] rounded-xl p-6 shadow ${
                    plan.recommended ? "ring-4 ring-[var(--color-primary)]" : ""
                  }`}
                >
                  {plan.recommended && (
                    <div className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-center py-1 text-sm font-semibold rounded-md mb-3">
                      Recommended
                    </div>
                  )}
                  <h5 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                    {plan.name}
                  </h5>
                  <p className="text-2xl font-bold text-[var(--color-primary)] mb-3">
                    {plan.price}
                  </p>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {plan.features.map((f: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-[var(--card)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm"
                      >
                        <Check className="h-4 w-4 text-[var(--color-primary)] flex-shrink-0" />
                        <span className="text-[var(--color-muted-foreground)]">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-4 py-2 rounded-md font-semibold ${
                      plan.recommended
                        ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
                        : "bg-[var(--card)] border border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Perfect For Your Business Needs
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {(product.useCases ?? data?.useCases ?? []).map(
                (uc: any, i: number) => {
                  const Icon =
                    typeof uc.icon === "string"
                      ? iconMap[uc.icon] ?? Users
                      : uc.icon;
                  return (
                    <div
                      key={i}
                      className="text-center p-6 rounded-xl border border-[var(--color-border)] bg-[var(--card)]"
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl mb-4">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h5 className="text-lg font-bold mb-2 text-[var(--color-primary)]">
                        {uc.title}
                      </h5>
                      <p className="text-sm text-[var(--color-muted-foreground)]">
                        {uc.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--sidebar-primary)] rounded-xl text-[var(--color-primary-foreground)] p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h4 className="text-3xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="text-lg text-[var(--color-primary-foreground)]/90 mb-6">
                Let our certified experts help you choose the right plan and
                migrate your business to the cloud.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[var(--color-primary-foreground)] text-[var(--color-primary)] rounded-md font-semibold"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/products/microsoft"
                  className="px-6 py-3 bg-[var(--card)] border border-[var(--color-border)] text-[var(--color-primary-foreground)] rounded-md"
                >
                  View All Microsoft Products
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Fallback generic layout
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-md border border-gray-100 bg-gray-50 p-4">
            <h4 className="font-semibold text-sm text-[#1a3a5f] mb-2">
              Key Features
            </h4>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Feature 1 for {product.title}</li>
              <li>Feature 2 for {product.title}</li>
              <li>Feature 3 for {product.title}</li>
            </ul>
          </div>

          <div className="rounded-md border border-gray-100 bg-gray-50 p-4">
            <h4 className="font-semibold text-sm text-[#1a3a5f] mb-2">
              Integrations
            </h4>
            <p className="text-sm text-gray-600">
              Connectors for payment gateways, KYC, and analytics.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubProductDetail;
