"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ecosystemHeader } from "@/data/ecosystem/data";
import ecosystemAnimation from "@/public/assets/lottie/ecosystem.json";

// Import Lottie secara dynamic untuk performa
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function EcosystemPage() {
  // Label teknis untuk tag yang melayang di sekitar Nexus utama
  const featureTags = [
    { label: "Neural_Link_v4", top: "20%", left: "15%", color: "cyan" },
    { label: "Realtime_Sync", top: "15%", right: "20%", color: "emerald" },
    { label: "Enterprise_Vault", bottom: "30%", left: "10%", color: "magenta" },
    { label: "GPU_Cluster_Alpha", bottom: "25%", right: "15%", color: "cyan" },
    { label: "Secure_Gateway", top: "50%", right: "5%", color: "emerald" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      
      {/* --- STATIC BACKGROUND GRID --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/5"
          >
            <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.4em] animate-pulse">
              {ecosystemHeader.badge}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6"
          >
            {ecosystemHeader.title.split('_')[0]}_<span className="text-emerald-500">{ecosystemHeader.title.split('_')[1]}</span>
          </motion.h1>
        </div>

        {/* --- MAIN VISUAL: LOTTIE AS CENTRAL NEXUS --- */}
        <div className="relative w-full min-h-150 md:min-h-200 flex items-center justify-center">
          
          {/* Central Lottie Nexus */}
          <div className="relative z-20 w-full max-w-3xl">
            <Lottie 
              animationData={ecosystemAnimation} 
              loop={true} 
              className="w-full h-full drop-shadow-[0_0_50px_rgba(16,185,129,0.2)]"
            />
          </div>

          {/* --- FLOATING TECH TAGS --- */}
          {featureTags.map((tag, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0] 
              }}
              transition={{ 
                delay: 0.5 + (idx * 0.2),
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ 
                position: 'absolute',
                top: tag.top,
                left: tag.left,
                right: tag.right
              }}
              className="z-30"
            >
              <div className="flex items-center gap-3 px-4 py-2 border border-white/10 bg-black/40 backdrop-blur-xl rounded-xl group hover:border-emerald-500/50 transition-all cursor-pointer">
                <div className={`h-1.5 w-1.5 rounded-full bg-${tag.color}-500 animate-pulse`} />
                <span className="text-[10px] font-black text-white/60 group-hover:text-white uppercase tracking-widest italic font-mono">
                  {tag.label}
                </span>
                
                {/* Canonical h-px for scanning line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-all overflow-hidden">
                  <div className="w-full h-full bg-white/20 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>

        {/* INFO FOOTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-10"
        >
          <p className="text-[11px] text-white/30 font-light italic leading-relaxed text-center max-w-xl">
            "{ecosystemHeader.subtitle}"
          </p>
        </motion.div>

      </div>
    </main>
  );
}