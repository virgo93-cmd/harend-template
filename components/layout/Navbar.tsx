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
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/90 backdrop-blur-2xl py-3 border-b border-white/5" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-360 mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24">
          
          {/* LOGO & BRAND */}
          <NextLink href="/" className="flex items-center gap-3 group cursor-pointer z-[70]">
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

          {/* CENTER NAVIGATION - FIXED FOR MOBILE */}
          <div className={`${
            isMobileMenuOpen 
              ? "flex fixed inset-0 bg-[#050505] flex-col justify-center items-center gap-6 z-[65] pt-12" 
              : "hidden lg:flex items-center gap-10"
          }`}>
            
            {/* Explore Link */}
            <NextLink
              href="/explore"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative flex flex-col items-center py-2"
            >
              <span className={`text-[8px] lg:text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                isActive("/explore") ? "text-cyan-500" : "text-white/20 group-hover:text-cyan-500/50"
              }`}>
                Neural_Hub
              </span>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive("/explore") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>[</span>
                <span className={`text-lg lg:text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isActive("/explore") ? "text-cyan-400" : "text-white/60 group-hover:text-white"
                }`}>Explore</span>
                <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive("/explore") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>]</span>
              </div>
            </NextLink>

            {/* Solutions Link */}
            <NextLink
              href="/solutions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative flex flex-col items-center py-2"
            >
              <span className={`text-[8px] lg:text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                isActive("/solutions") ? "text-cyan-500" : "text-white/20 group-hover:text-cyan-500/50"
              }`}>
                Neural_Matrix
              </span>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive("/solutions") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>[</span>
                <span className={`text-lg lg:text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isActive("/solutions") ? "text-cyan-400" : "text-white/60 group-hover:text-white"
                }`}>Solutions</span>
                <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive("/solutions") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>]</span>
              </div>
            </NextLink>

            {/* Ecosystem Link */}
            <NextLink
              href="/ecosystem"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative flex flex-col items-center py-2"
            >
              <span className={`text-[8px] lg:text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                isActive("/ecosystem") ? "text-emerald-500" : "text-white/20 group-hover:text-emerald-500/50"
              }`}>
                Neural_Ecosystem
              </span>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] text-emerald-500 transition-opacity ${isActive("/ecosystem") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>[</span>
                <span className={`text-lg lg:text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isActive("/ecosystem") ? "text-emerald-400" : "text-white/60 group-hover:text-white"
                }`}>Ecosystem</span>
                <span className={`font-mono text-[10px] text-emerald-500 transition-opacity ${isActive("/ecosystem") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>]</span>
              </div>
            </NextLink>

            {/* Docs Link */}
            <NextLink
              href="/docs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative flex flex-col items-center py-2"
            >
              <span className={`text-[8px] lg:text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                isActive("/docs") ? "text-emerald-500" : "text-white/20 group-hover:text-emerald-500/50"
              }`}>
                Neural_Manual
              </span>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] text-emerald-500 transition-opacity ${isActive("/docs") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>[</span>
                <span className={`text-lg lg:text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isActive("/docs") ? "text-emerald-400" : "text-white/60 group-hover:text-white"
                }`}>Docs</span>
                <span className={`font-mono text-[10px] text-emerald-500 transition-opacity ${isActive("/docs") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>]</span>
              </div>
            </NextLink>

            {/* Dynamic Links */}
            {navbarData.navLinks.filter(l => !["/explore", "/solutions", "/ecosystem", "/docs"].includes(l.path)).map((link) => (
              <NextLink
                key={link.id}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative flex flex-col items-center py-2"
              >
                <span className={`text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                  isActive(link.path) ? "text-cyan-500" : "text-white/20 group-hover:text-cyan-500/50"
                }`}>
                  {link.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>[</span>
                  <span className={`text-lg lg:text-[11px] font-black uppercase tracking-widest transition-colors ${
                    isActive(link.path) ? "text-cyan-400" : "text-white/60 group-hover:text-white"
                  }`}>{link.title}</span>
                  <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>]</span>
                </div>
              </NextLink>
            ))}
          </div>

          {/* RIGHT ACTION */}
          <div className="flex items-center gap-4 lg:gap-8">
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
              className="relative px-6 py-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden group transition-all hover:border-cyan-500/50 shadow-2xl z-[70]"
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

            {/* HAMBURGER BUTTON */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white z-[75] transition-transform active:scale-90"
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

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}