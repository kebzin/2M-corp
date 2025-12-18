"use client";

import React, { useState } from "react";
import ContactHero from "@/components/common/ContactHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  description: string;
};

const ContactPage = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      description: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-background">
      <ContactHero />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left testimonial (new design) */}
          <aside className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[#6ee7f7]">
                Connect with
                <br />
                Our Sales Team
              </h2>

              <div className="w-24 h-1 rounded-sm mt-4 mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[#60a5fa]" />

              <p className="text-[var(--color-muted-foreground)] max-w-lg">
                Interested in EmpCloud services or have questions about pricing?
                Want to know more about our product offerings? We are here to
                assist you every step of the way. Contact our sales
                representative right now!
              </p>
            </div>

            <div className="relative mt-6 w-full max-w-md">
              {/* decorative overlapping squares */}
              <div
                className="absolute -left-6 -top-6 w-36 h-36 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#60a5fa] opacity-80 blur-sm"
                style={{ mixBlendMode: "multiply" }}
              />
              <div
                className="absolute left-6 top-12 w-48 h-48 rounded-2xl bg-gradient-to-br from-[#7c3aed]/90 to-[#60a5fa]/80 opacity-70"
                style={{ mixBlendMode: "multiply" }}
              />
              <div
                className="absolute -left-4 top-36 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#7c3aed]/80 to-[#60a5fa]/60 opacity-75"
                style={{ mixBlendMode: "multiply" }}
              />

              {/* image card */}
              <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
                <img
                  src="/home/bg-counter-img-min.png"
                  alt="sales representative"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </aside>

          <div className="self-start rounded-2xl border bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
              Contact Our Team
            </h3>
            <p className="text-sm text-[var(--color-muted-foreground)] mb-6">
              Whether you need help with a product, have a suggestion, or just
              want to chat, we're here for you.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name and Business Email Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Please enter your full name"
                            className="h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Business email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@company.com"
                            className="h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone Number and Company Name Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Phone number <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <PhoneInput
                            defaultCountry="GM"
                            className="h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    rules={{ required: "Company name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Company name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Provide your company name"
                            className="h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Service Interested In */}
                <FormField
                  control={form.control}
                  name="service"
                  rules={{ required: "Please select a service" }}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700">
                        Service interested in{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="custom-software">
                            Custom Software Development
                          </SelectItem>
                          <SelectItem value="data-collection">
                            Data Collection & Management
                          </SelectItem>
                          <SelectItem value="microsoft-365">
                            Microsoft 365 Implementation
                          </SelectItem>
                          <SelectItem value="data-visualization">
                            Data Visualization & Analysis
                          </SelectItem>
                          <SelectItem value="monitoring-evaluation">
                            Monitoring & Evaluation (M&E)
                          </SelectItem>
                          <SelectItem value="social-protection">
                            Social Protection Systems
                          </SelectItem>
                          <SelectItem value="training">
                            Training in Data Analysis
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Project Description */}
                <FormField
                  control={form.control}
                  name="description"
                  rules={{ required: "Project description is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Kindly describe your project idea{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Kindly provide information about the key features, integrations, users and markets"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Required Field Notice and Submit Button */}
                <div className="flex items-center justify-between">
                  <p className="text-xs italic text-red-500">
                    * All mark field is required.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-white transition-transform hover:scale-110 hover:bg-primary/90"
                  >
                    Send Now
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--card)]">
          <div className="w-full h-80 md:h-96">
            <iframe
              title="2M Corp Location"
              className="w-full h-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-16.99169921875%2C13.44433996741019%2C-16.575927734375%2C13.665392091189663&layer=mapnik"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
