"use client";

import React from "react";
import { Button } from "@/components/ui/button"; // Adjust path to your shadcn button
import {
  ArrowRight,
  Check,
  AlertTriangle,
  MoreHorizontal,
  Package,
  Truck,
  Box,
} from "lucide-react";
import Image from "next/image";

export default function SubProductHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Decorative Lines (Optional SVG placeholder) */}
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full stroke-gray-900 fill-none"
        >
          <path d="M0 20 Q 50 10 100 30" strokeWidth="0.5" />
          <path d="M0 40 Q 50 30 100 50" strokeWidth="0.5" />
          <path d="M0 60 Q 50 50 100 70" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* LEFT COLUMN: Content */}
          <div className="flex flex-col items-start space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600 shadow-sm">
              Smarter Insights
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Track, Analyze, and <br />
              Grow Your Product
            </h1>

            {/* Subheadline */}
            <p className="max-w-[600px] text-lg text-gray-500 md:text-xl leading-relaxed">
              Get real-time analytics on your sales, customers, and trends to
              make confident decisions that drive growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col w-full sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 rounded-lg px-8"
              >
                Start Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg px-8"
              >
                Learn more
              </Button>
            </div>

            {/* Features List */}
            <ul className="space-y-4 pt-4">
              {[
                "Real-time performance tracking",
                "Actionable customer insights",
                "Clear sales trend analysis",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Social Proof / Logos */}
            <div className="pt-8">
              <p className="text-sm font-medium text-gray-500 mb-4">
                Trusted by the best in the business
              </p>
              <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale">
                {/* Replace these divs with <Image /> components for real logos */}
                <span className="text-lg font-serif font-bold text-gray-800">
                  Mercedes-Benz
                </span>
                <span className="text-lg font-serif font-bold text-gray-800">
                  MISSISSIPPI
                </span>
                <span className="text-lg font-sans font-bold text-gray-800 flex items-center gap-1">
                  <span className="text-2xl">★</span> STAR
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visuals */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none h-[600px] flex items-center justify-center">
            {/* BACK CARD (Analytics) - Rotated Left */}
            <div className="absolute top-10 left-10 lg:left-0 w-72 lg:w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 transform -rotate-6 transition-transform hover:rotate-0 z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Anatomy detected
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">
                    Your product reach increasing beyond our predictions.
                  </p>
                </div>
                <div className="h-8 w-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-gray-500" />
                </div>
              </div>

              {/* Fake Bar Chart */}
              <div className="flex items-end justify-between h-32 gap-2 mb-6 px-2">
                <div className="w-4 bg-gray-100 rounded-t-sm h-[30%]"></div>
                <div className="w-4 bg-gray-200 rounded-t-sm h-[50%]"></div>
                <div className="w-4 bg-gray-200 rounded-t-sm h-[40%]"></div>
                <div className="w-6 bg-black rounded-t-md h-[90%] shadow-lg"></div>{" "}
                {/* Highlighted Bar */}
                <div className="w-4 bg-gray-200 rounded-t-sm h-[45%]"></div>
                <div className="w-4 bg-gray-100 rounded-t-sm h-[35%]"></div>
              </div>

              <div>
                <span className="block text-4xl font-bold text-gray-900">
                  96.5%
                </span>
                <span className="text-sm text-gray-500">Prediction 78%</span>
              </div>
            </div>

            {/* FRONT CARD (User/Orders) - Slight Rotation */}
            <div className="absolute bottom-10 right-4 lg:right-10 w-80 lg:w-96 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-6 transform translate-y-12 lg:translate-y-0 z-20">
              {/* User Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden relative">
                    {/* Avatar Placeholder */}
                    <Image
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack"
                      alt="Jack"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      @jackwilliams
                    </p>
                    <p className="text-xs text-gray-500">Business</p>
                  </div>
                </div>
                <MoreHorizontal className="text-gray-400 h-5 w-5" />
              </div>

              {/* Stats */}
              <div className="mb-6 border-b border-gray-100 pb-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-gray-900">
                    4,689
                  </span>
                  <span className="text-sm text-gray-500">Orders</span>
                </div>

                {/* Status Pills */}
                <div className="flex gap-2 text-xs font-medium text-gray-700">
                  <span className="px-2 py-1 bg-gray-100 rounded-md flex items-center gap-1 border border-gray-200">
                    <Box className="h-3 w-3" /> Packed
                  </span>
                  <span className="px-2 py-1 bg-transparent rounded-md flex items-center gap-1 border border-gray-200">
                    <Truck className="h-3 w-3" /> Shipped
                  </span>
                  <span className="px-2 py-1 bg-transparent rounded-md flex items-center gap-1 border border-gray-200">
                    <Package className="h-3 w-3" /> Received
                  </span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-5">
                <ProgressItem
                  label="Packing Pending"
                  value={4250}
                  percent={75}
                />
                <ProgressItem
                  label="Packing in Progress"
                  value={2150}
                  percent={45}
                />
                <ProgressItem
                  label="Packing Complete"
                  value={1750}
                  percent={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for the Progress Bars
function ProgressItem({
  label,
  value,
  percent,
}: {
  label: string;
  value: number;
  percent: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-400">{value}</span>
      </div>
      {/* Custom Progress Bar using divs for exact styling match */}
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
