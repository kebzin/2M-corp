"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Detect scroll for navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-40 w-full transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
        <div
          className={`flex h-20 items-center justify-between rounded-full bg-white px-8 transition-all duration-300 ${
            isScrolled ? "shadow-2xl backdrop-blur-lg" : "shadow-lg"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <img
              src="/logos/logo-color.svg"
              alt="2M Corp"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[15px] font-medium transition-colors hover:text-primary"
                >
                  <span className={isActive ? "text-primary" : "text-gray-700"}>
                    {link.label}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                  <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full bg-primary px-6 py-5 font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="size-6 text-gray-900" />
            ) : (
              <Menu className="size-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="mt-2 animate-in slide-in-from-top-5 rounded-b-2xl border-t border-gray-200 bg-white shadow-xl duration-200 lg:hidden"
        >
          <div className="mx-6 flex flex-col space-y-1 py-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              asChild
              className="mt-4 rounded-full bg-primary px-6 py-5 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
