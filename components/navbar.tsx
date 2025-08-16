"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar({
  hideLogo = false,
  alwaysHamburger = false,
}: {
  hideLogo?: boolean;
  alwaysHamburger?: boolean;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/roster", label: "Roster" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-end items-center h-20">
            {!hideLogo && (
              <Link href="/" className="flex items-center mr-auto">
                <Image
                  src="/feeshnet-logo.png"
                  alt="Feeshnet"
                  width={140}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
            )}

            {/* Desktop Navigation - Hidden when alwaysHamburger is true */}
            {!alwaysHamburger && (
              <div className="hidden lg:flex items-center space-x-12">
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`minimal-hover font-medium text-lg transition-colors duration-300 ${
                      isScrolled ? "text-gray-800" : "text-gray-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Hamburger menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                alwaysHamburger ? "block" : "lg:hidden"
              } ${isScrolled ? "text-gray-800" : "text-gray-800"}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-cream">
          <div className="flex h-full">
            {/* Left side - Background image */}
            <div className="hidden md:block md:w-1/2 relative">
              <Image
                src="/nav_image.png"
                alt="Feeshnet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
            </div>

            {/* Right side - Navigation */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-12 lg:px-16 relative">
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 p-2 text-navy hover:text-orange transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation links */}
              <nav className="space-y-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-4xl md:text-5xl font-light text-navy hover:text-orange transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social icons */}
              <div className="absolute bottom-8 right-8 flex space-x-4">
                <a
                  href="https://instagram.com/feeshnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:text-orange transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.663.072-4.949.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/feeshnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:text-orange transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
