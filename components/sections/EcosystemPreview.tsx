"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { ecosystemHeader } from "@/data/ecosystem/data";
import ecosystemAnimation from "@/public/assets/lottie/ecosystem.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function EcosystemPreview() {
  const featureTags = [
    { label: "Neural_Link_v4", top: "15%", left: "5%", color: "cyan" },
    { label: "Realtime_Sync", top: "10%", right: "10%", color: "emerald" },
    { label: "Secure_Gateway", bottom: "20%", right: "5%", color: "emerald" },
  ];

  return (
    <section className="relative py-12 bg-[#050505] overflow-hidden">
      {/* WEB3 SECTION DIVIDER (ATAS) */}
      <div className="absolute top-0 left-0 w-full px-6 md:px-12 lg:px-24">
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-emerald-500/2 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="max-w-xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-3 py-1 mb-4 border border-emerald-500/30 rounded-full bg-emerald-500/5"
            >
              <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.4em]">
                {ecosystemHeader.badge}
              </span>
            </motion.div>
            
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">
              {ecosystemHeader.title.split('_')[0]}_<span className="text-emerald-500">{ecosystemHeader.title.split('_')[1]}</span>
            </h2>
            
            <p className="text-[11px] text-white/30 font-light italic leading-relaxed max-w-60 mx-auto md:mx-0 mb-6">
              {ecosystemHeader.subtitle}
            </p>

            <div className="flex justify-center md:justify-start">
              <NextLink href="/ecosystem" className="group flex items-center gap-3 px-6 py-3 bg-white/2 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  Enter Ecosystem
                </span>
                <div className="w-4 h-px bg-white/20 group-hover:w-8 group-hover:bg-emerald-500 transition-all" />
              </NextLink>
            </div>
          </div>

          {/* Central Nexus Visual - Ukuran Diperkecil */}
          <div className="relative w-full max-w-xs aspect-square flex items-center justify-center">
            <div className="relative z-20 w-full h-full">
              <Lottie 
                animationData={ecosystemAnimation} 
                loop={true} 
                className="w-full h-full drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              />
            </div>

            {featureTags.map((tag, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  delay: idx * 0.2,
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ position: 'absolute', top: tag.top, left: tag.left, right: tag.right }}
                className="z-30 hidden sm:block"
              >
                <div className="px-2 py-1 border border-white/5 bg-black/40 backdrop-blur-xl rounded-md flex items-center gap-1.5">
                  <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[7px] font-black text-white/40 uppercase tracking-widest italic font-mono">
                    {tag.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}