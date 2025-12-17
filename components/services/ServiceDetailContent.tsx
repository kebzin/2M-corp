"use client";

import React from "react";
import { services } from "@/lib/constants/services";
import { Check } from "lucide-react";

type Props = {
  service?: any; // either a service object or a title string
};

const ServiceDetailContent: React.FC<Props> = ({ service }) => {
  // support passing the full service object or a title string
  const servicesData =
    typeof service === "string"
      ? services.find((svc) => svc.title === service)
      : service ?? undefined;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl bg-[var(--card)] p-6 border border-[var(--color-border)]">
              <h4 className="font-semibold text-[var(--color-primary)] mb-4">
                All Service lists
              </h4>
              <ul className="text-[var(--color-muted-foreground)] space-y-3">
                {services.map((s) => (
                  <li
                    key={s.title}
                    className="border-b border-[var(--color-border)] pb-2"
                  >
                    <a
                      href={"#"}
                      className={`block hover:text-[var(--color-primary)] ${
                        servicesData?.title === s.title ? "font-semibold" : ""
                      }`}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--color-border)]">
              <img
                src="/home/bg-counter-img-min.png"
                alt="company"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <a
                  href="/contact"
                  className="inline-block px-4 py-2 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-md"
                >
                  Discover our company
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/home/bg-wave.webp"
                alt="service"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>

              {Array.isArray(servicesData?.features) &&
              servicesData.features.length > 0 ? (
                <div className="space-y-6">
                  {servicesData.features.map((feat: any, idx: number) => {
                    const isString = typeof feat === "string";
                    const title = isString ? feat : feat.title;
                    const desc = isString ? null : feat.description;
                    const items =
                      !isString && Array.isArray(feat.items) ? feat.items : [];

                    return (
                      <section
                        key={idx}
                        className={`rounded-lg p-6 border border-[var(--color-border)] ${
                          idx % 2 === 0 ? "bg-[var(--card)]" : "bg-transparent"
                        }`}
                      >
                        <div
                          className="flex flex-col md:flex-row md:items-start md:gap-6"
                          id={`${idx}`}
                        >
                          <div className="md:flex-1">
                            <h4 className="text-xl font-semibold text-[var(--color-primary)]">
                              {title}
                            </h4>
                            {desc && (
                              <p className="text-[var(--color-muted-foreground)] mt-2">
                                {desc}
                              </p>
                            )}

                            {items.length > 0 && (
                              <ul className="mt-4 space-y-2 text-[var(--color-muted-foreground)]">
                                {items.map((it: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-3"
                                  >
                                    <span className="text-[var(--color-primary)] mt-1">
                                      <Check className="w-4 h-4" />
                                    </span>
                                    <span>{it}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {!items.length && (
                              <div className="mt-4">
                                <a
                                  href="/contact"
                                  className="inline-block text-sm font-semibold text-[var(--color-primary)]"
                                >
                                  Contact us to learn more →
                                </a>
                              </div>
                            )}
                          </div>

                          {/* <div className="mt-4 md:mt-0 md:w-48 md:flex-shrink-0">
                            <img
                              src={
                                servicesData?.image ??
                                "/home/bg-counter-img-min.png"
                              }
                              alt=""
                              className="w-full h-28 object-cover rounded"
                            />
                          </div> */}
                        </div>
                      </section>
                    );
                  })}
                </div>
              ) : (
                <p className="text-[var(--color-muted-foreground)]">
                  No feature details available for this service.
                </p>
              )}
            </div>

            {/* FAQ / Accordion placeholder */}
            {/* <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">
                Frequently Asked Questions
              </h4>
              <div className="space-y-3">
                <details className="border border-[var(--color-border)] rounded-md p-4">
                  <summary className="font-semibold cursor-pointer">
                    What services do you offer?
                  </summary>
                  <div className="mt-2 text-[var(--color-muted-foreground)]">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text.
                  </div>
                </details>

                <details className="border border-[var(--color-border)] rounded-md p-4">
                  <summary className="font-semibold cursor-pointer">
                    How can I request a demo?
                  </summary>
                  <div className="mt-2 text-[var(--color-muted-foreground)]">
                    Contact our sales team using the contact form or request a
                    demo via the contact page.
                  </div>
                </details>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailContent;
