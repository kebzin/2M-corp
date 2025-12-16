"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Download,
  Rocket,
  Users,
  Search,
  UserCheck,
  Handshake,
  Cpu,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  description: string;
};

const Footer = () => {
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
    <footer>
      {/* Contact Section */}
      <section className="bg-[#3A4F5F] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column - Content and Stats */}
            <div className="text-white">
              <h2 className="mb-2 text-4xl font-bold leading-tight">
                Let&apos;s Talk! Have Questions?
              </h2>
              <h3 className="mb-6 text-4xl font-bold leading-tight">
                We&apos;re Here to{" "}
                <span className="relative inline-block">
                  Help
                  <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-400"></span>
                </span>
                ....
              </h3>

              <p className="mb-12 text-lg text-gray-300">
                Fill all your details in the form and one of our business
                consultant
                <br />
                will get in touch you within 24 hours.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8">
                {/* Row 1 */}
                <div>
                  <Rocket className="mb-3 size-8 text-blue-400" />
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-gray-300">Years of</div>
                  <div className="text-sm text-gray-300">Experience</div>
                </div>
                <div>
                  <Users className="mb-3 size-8 text-blue-400" />
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-gray-300">Expert Team</div>
                  <div className="text-sm text-gray-300">Members</div>
                </div>
                <div>
                  <Search className="mb-3 size-8 text-purple-400" />
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-gray-300">Projects</div>
                  <div className="text-sm text-gray-300">Completed</div>
                </div>

                {/* Row 2 */}
                <div>
                  <UserCheck className="mb-3 size-8 text-yellow-400" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-gray-300">Countries</div>
                  <div className="text-sm text-gray-300">Across Africa</div>
                </div>
                <div>
                  <Handshake className="mb-3 size-8 text-pink-400" />
                  <div className="text-2xl font-bold">Government</div>
                  <div className="text-sm text-gray-300">& International</div>
                  <div className="text-sm text-gray-300">Partners</div>
                </div>
                <div>
                  <Cpu className="mb-3 size-8 text-blue-300" />
                  <div className="text-2xl font-bold">Data & Software</div>
                  <div className="text-sm text-gray-300">Solutions</div>
                  <div className="text-sm text-gray-300">Provider</div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="self-start rounded-2xl border bg-white p-8 shadow-xl">
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
                            Business email{" "}
                            <span className="text-red-500">*</span>
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
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-white/10 bg-[#3A4F5F]"></div>

      {/* Footer Links Section */}
      <div className="bg-[#2C3E50] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="mb-6 inline-block">
                <img
                  src="/logos/logo-white.svg"
                  alt="2M Corp"
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mb-6 text-sm leading-relaxed text-gray-300">
                2M Corp specializes in Data Analytics and Software Development
                with 20+ years of experience serving institutions across Africa.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Facebook className="size-4" />
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Twitter className="size-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/2m-corp-gambia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Linkedin className="size-4" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-base font-semibold">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-projects"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-base font-semibold">Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/services/custom-software"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/data-collection"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Data Collection & Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/microsoft-365"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Microsoft 365
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/data-visualization"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Data Visualization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/monitoring-evaluation"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Monitoring & Evaluation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/training"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <h3 className="mb-6 text-base font-semibold">Sectors</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/sectors/government"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Government Agencies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors/healthcare"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors/financial"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Financial Institutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors/social-protection"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Social Protection
                  </Link>
                </li>
              </ul>
            </div>

            {/* Reach us */}
            <div>
              <h3 className="mb-6 text-base font-semibold">Reach us</h3>
              <div className="space-y-4 text-sm">
                <div className="space-y-2">
                  <a
                    href="mailto:info@2m-corp.com"
                    className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                  >
                    <span>✉</span>
                    <span>info@2m-corp.com</span>
                  </a>
                  <a
                    href="mailto:sales@2m-corp.com"
                    className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                  >
                    <span>✉</span>
                    <span>sales@2m-corp.com</span>
                  </a>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 inline-block">🇬🇲</span>
                    <div>
                      <p className="font-semibold">The Gambia</p>
                      <p className="text-gray-300">Fajara M Section, Bakau</p>
                      <p className="text-gray-300">KSMD, The Gambia</p>
                      <p className="text-gray-300">West Africa</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-gray-300 text-xs">
                      +220 449 6266 | +220 248 1590
                    </p>
                    <p className="text-gray-300 text-xs">
                      +220 594 7766 | +220 995 3346
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2025 2M Corp. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
