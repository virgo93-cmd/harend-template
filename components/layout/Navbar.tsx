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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? "bg-black/60 backdrop-blur-xl py-3 border-b border-white/5" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-360 mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24">
          
          {/* LOGO & BRAND */}
          <NextLink href="/" className="flex items-center gap-3 group cursor-pointer">
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

          {/* CENTER NAVIGATION */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Explore Link */}
            <NextLink
              href="/explore"
              className="group relative flex flex-col items-center py-2"
            >
              <span className={`text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                isActive("/explore") ? "text-cyan-500" : "text-white/20 group-hover:text-cyan-500/50"
              }`}>
                Neural_Hub
              </span>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive("/explore") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  [
                </span>
                <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isActive("/explore") ? "text-cyan-400" : "text-white/40 group-hover:text-white"
                }`}>
                  Explore
                </span>
                <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive("/explore") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  ]
                </span>
              </div>
              {isActive("/explore") && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              )}
            </NextLink>

            {/* Solutions Link */}
            <NextLink
              href="/solutions"
              className="group relative flex flex-col items-center py-2"
            >
              <span className={`text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                isActive("/solutions") ? "text-cyan-500" : "text-white/20 group-hover:text-cyan-500/50"
              }`}>
                Neural_Matrix
              </span>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive("/solutions") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  [
                </span>
                <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isActive("/solutions") ? "text-cyan-400" : "text-white/40 group-hover:text-white"
                }`}>
                  Solutions
                </span>
                <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive("/solutions") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  ]
                </span>
              </div>
              {isActive("/solutions") && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              )}
            </NextLink>

            {/* Ecosystem Link */}
            <NextLink
              href="/ecosystem"
              className="group relative flex flex-col items-center py-2"
            >
              <span className={`text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                isActive("/ecosystem") ? "text-emerald-500" : "text-white/20 group-hover:text-emerald-500/50"
              }`}>
                Neural_Ecosystem
              </span>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] text-emerald-500 transition-opacity ${isActive("/ecosystem") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  [
                </span>
                <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isActive("/ecosystem") ? "text-emerald-400" : "text-white/40 group-hover:text-white"
                }`}>
                  Ecosystem
                </span>
                <span className={`font-mono text-[10px] text-emerald-500 transition-opacity ${isActive("/ecosystem") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  ]
                </span>
              </div>
              {isActive("/ecosystem") && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              )}
            </NextLink>

            {/* Docs Link - NEW */}
            <NextLink
              href="/docs"
              className="group relative flex flex-col items-center py-2"
            >
              <span className={`text-[8px] font-mono tracking-[0.3em] mb-1 uppercase transition-colors ${
                isActive("/docs") ? "text-emerald-500" : "text-white/20 group-hover:text-emerald-500/50"
              }`}>
                Neural_Manual
              </span>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] text-emerald-500 transition-opacity ${isActive("/docs") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  [
                </span>
                <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isActive("/docs") ? "text-emerald-400" : "text-white/40 group-hover:text-white"
                }`}>
                  Docs
                </span>
                <span className={`font-mono text-[10px] text-emerald-500 transition-opacity ${isActive("/docs") ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  ]
                </span>
              </div>
              {isActive("/docs") && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              )}
            </NextLink>

            {/* Navigasi Dinamis Lainnya */}
            {navbarData.navLinks.filter(l => !["/explore", "/solutions", "/ecosystem", "/docs"].includes(l.path)).map((link) => (
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
                  <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    [
                  </span>
                  <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                    isActive(link.path) ? "text-cyan-400" : "text-white/40 group-hover:text-white"
                  }`}>
                    {link.title}
                  </span>
                  <span className={`font-mono text-[10px] text-cyan-500 transition-opacity ${isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    ]
                  </span>
                </div>
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                )}
              </NextLink>
            ))}
          </div>

          {/* RIGHT ACTION */}
          <div className="flex items-center gap-8">
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