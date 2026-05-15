"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { default as NextLink } from "next/link";
import { usePathname } from "next/navigation";
import { navbarData } from "@/data/global/navbar";
import AuthModal from "@/components/ui/AuthModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  if (!mounted) return null;

  return (
    <>
      <nav
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/95 backdrop-blur-2xl py-4 border-b border-white/5" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24">
          
          {/* LOGO & BRAND */}
          <NextLink href="/" className="flex items-center gap-3 group cursor-pointer z-[110]">
            <Image 
              src={navbarData.logo} 
              alt={navbarData.brandName} 
              width={32} 
              height={32} 
              className="rounded-lg transition-transform group-hover:scale-110"
            />
            <div className="flex items-end gap-1">
              <span className="text-xl font-black tracking-tighter text-white leading-none italic uppercase group-hover:text-cyan-400 transition-colors">
                {navbarData.brandName}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mb-1 animate-pulse"></span>
            </div>
          </NextLink>

          {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-10">
            {navbarData.navLinks.map((link) => (
              <NextLink
                key={link.id}
                href={link.path}
                className="group relative flex flex-col items-center py-2"
              >
                <span className={`text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                  isActive(link.path) ? "text-cyan-500" : "text-white/20 group-hover:text-cyan-500/50"
                }`}>
                  {link.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>[</span>
                  <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                    isActive(link.path) ? "text-cyan-400" : "text-white/40 group-hover:text-white"
                  }`}>{link.title}</span>
                  <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>]</span>
                </div>
              </NextLink>
            ))}
          </div>

          {/* RIGHT ACTION & HAMBURGER */}
          <div className="flex items-center gap-4 lg:gap-8 z-[110]">
            <NextLink 
              href="/pricing"
              className={`hidden md:block text-[11px] font-black uppercase tracking-widest transition-colors ${
                isActive("/pricing") ? "text-white" : "text-white/40 hover:text-white"
              }`}
            >
              Pricing
            </NextLink>

            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="relative px-6 py-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden group transition-all hover:border-cyan-500/50 shadow-2xl"
            >
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-[11px] font-black text-white uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                  Get Access
                </span>
              </div>
            </button>

            {/* HAMBURGER BUTTON */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white active:scale-90 transition-transform"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-full h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY (Blok Terpisah biar nggak acak-acakan) */}
        <div className={`fixed inset-0 bg-[#050505] z-[90] lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}>
          {navbarData.navLinks.map((link) => (
            <NextLink
              key={link.id}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col items-center group"
            >
              <span className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-[0.4em] mb-2">
                {link.label}
              </span>
              <span className={`text-3xl font-black uppercase italic tracking-tighter ${
                isActive(link.path) ? "text-cyan-400" : "text-white"
              }`}>
                {link.title}
              </span>
            </NextLink>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsAuthModalOpen(true);
            }}
            className="mt-6 px-10 py-4 rounded-full bg-cyan-500 text-xs font-black text-black uppercase tracking-[0.2em]"
          >
            Access_Neural_Hub
          </button>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}