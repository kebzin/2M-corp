import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Chatbot from "@/components/common/Chatbot";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.2m-corp.com"
  ),
  title: {
    default: "2M Corp | Data & Software Services | The Gambia",
    template: "%s | 2M Corp",
  },
  description:
    "Leading data and software services company in The Gambia providing tailored solutions to governments, international organizations, and private enterprises. Expert survey implementation, impact evaluations, and enterprise software development.",
  keywords: [
    "2M Corp",
    "data collection Gambia",
    "survey implementation West Africa",
    "openIMIS partner",
    "Microsoft Dynamics 365 Gambia",
    "World Bank consultant",
    "UNICEF data collection",
    "impact evaluation Africa",
    "software development Gambia",
    "CAPI surveys",
    "ODK KoboToolbox",
    "statistical analysis",
    "PowerBI dashboards",
    "Stata SPSS",
  ],
  authors: [{ name: "2M Corp" }],
  creator: "2M Corp",
  publisher: "2M Corp",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "2M Corp",
    title: "2M Corp | Data & Software Services | The Gambia",
    description:
      "Leading data and software services company providing survey implementation, impact evaluations, and enterprise software solutions across Africa and beyond.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "2M Corp - Data & Software Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2M Corp | Data & Software Services",
    description: "Leading data and software services company in The Gambia",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />

        <Navbar />
        {children}
        <Footer />
        <Chatbot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
