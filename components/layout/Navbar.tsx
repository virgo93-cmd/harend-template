"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { default as NextLink } from "next/link";
import { usePathname } from "next/navigation";
import { navbarData } from "@/data/global/navbar";
import AuthModal from "@/components/ui/AuthModal";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
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
            ? "bg-black/90 backdrop-blur-2xl py-3 border-b border-white/5" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-360 mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24">
          
          <NextLink href="/" className="flex items-center gap-3 group cursor-pointer z-[160]">
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

          {/* DESKTOP NAVIGATION */}
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

          <div className="flex items-center gap-4 lg:gap-8 z-[160]">
            <NextLink 
              href="/pricing"
              className={`hidden md:block text-[11px] font-black uppercase tracking-widest transition-colors ${
                isActive("/pricing") ? "text-white" : "text-white/40 hover:text-white"
              }`}
            >
              {navbarData.actionLinks.pricing.title}
            </NextLink>

            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="relative px-6 py-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden group transition-all hover:border-cyan-500/50 shadow-2xl"
            >
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-[11px] font-black text-white uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                  Get Access
                </span>
                <svg className="w-3 h-3 text-white group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white transition-transform active:scale-90"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <NavbarMobile 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen} 
        onAuthOpen={() => setIsAuthModalOpen(true)}
      />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}