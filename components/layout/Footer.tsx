"use client";

import Image from "next/image";
import NextLink from "next/link";
import { footerData } from "@/data/global/footer";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050505] pt-12 pb-6 overflow-hidden">
      
      {/* --- PREMIUM WEB3 EFFECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-emerald-500/2 to-transparent" />
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* BRAND SECTION */}
          <div className="md:col-span-4 space-y-4">
            <NextLink href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 p-px rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative w-full h-full rounded-md overflow-hidden bg-black">
                  <Image 
                    src="/assets/logos/logo-300x300.png" 
                    alt="Logo" 
                    fill 
                    sizes="40px"
                    className="object-cover p-1.5 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-white uppercase italic leading-none">
                  {footerData.companyName}
                </span>
                <span className="text-[7px] font-mono tracking-[0.5em] text-emerald-500 mt-1 uppercase opacity-50">
                  Neural_Infrastructure
                </span>
              </div>
            </NextLink>
            <p className="text-[11px] text-white/30 font-light italic leading-relaxed max-w-60">
              {footerData.tagline}
            </p>
          </div>

          {/* LINKS SECTION */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerData.links.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-white/10">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <NextLink 
                        href={item.path}
                        className="text-[11px] font-medium text-white/30 hover:text-emerald-400 transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-px bg-white/10 transition-all duration-300 group-hover:w-3 group-hover:bg-emerald-500" />
                        {item.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-mono text-white/10 uppercase tracking-widest">
            {footerData.copyright}
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/5 bg-white/2 backdrop-blur-sm">
              <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,1)]" />
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
                System_Node_Stable
              </span>
            </div>
            <div className="hidden md:block h-3 w-px bg-white/5" />
            <span className="hidden md:block text-[8px] font-black text-white/5 uppercase tracking-[0.3em]">
              Harend_Neural_Network_v1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}