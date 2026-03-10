"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
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
    { href: "mailto:hello@feeshnet.com", label: "Contact", external: true },
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
          <div className="flex justify-between items-center h-20">
            {/* Logo - appears on scroll */}
            <Link
              href="/"
              className={`flex items-center transition-opacity duration-300 ${
                isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src="/feeshnet-logo.png"
                alt="Feeshnet"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.slice(1).map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium tracking-wider uppercase text-navy/60 hover:text-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium tracking-wider uppercase text-navy/60 hover:text-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-navy"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col justify-center items-center">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-2 text-navy hover:text-orange transition-colors"
          >
            <X size={32} />
          </button>

          <nav className="space-y-8 text-center">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-4xl font-light text-navy hover:text-orange transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-4xl font-light text-navy hover:text-orange transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Social */}
          <div className="absolute bottom-8 flex space-x-6">
            <a
              href="https://linkedin.com/company/feeshnet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy/40 hover:text-orange transition-colors tracking-wider uppercase"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/feeshnet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy/40 hover:text-orange transition-colors tracking-wider uppercase"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}
