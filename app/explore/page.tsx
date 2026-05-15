"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { exploreData, exploreCategories } from "@/data/explore/data";

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredData = activeCategory === "all" 
    ? exploreData 
    : exploreData.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      
      {/* --- LIVING BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Grid Lines */}
        <div 
          className="absolute inset-0 opacity-15" 
          style={{ 
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }} 
        />
        
        {/* Pulsating Orbs - Fixed to Canonical Classes */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/10 -left-1/20 w-125 h-125 bg-cyan-500/20 blur-[150px] rounded-full" 
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -60, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/10 -right-1/20 w-150 h-150 bg-purple-500/20 blur-[180px] rounded-full" 
        />

        {/* Scanline Effect - Fixed to Canonical Class */}
        <div className="absolute inset-0 bg-size-[100%_4px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] animate-pulse pointer-events-none" />
      </div>

      <div className="max-w-400 mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-500/5"
          >
            <span className="text-[9px] font-mono text-cyan-500 uppercase tracking-[0.4em] animate-pulse">
              System_Active: Discovery_Mode
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6"
          >
            Neural_Discovery<span className="text-cyan-500">.</span>Hub
          </motion.h1>
          
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {exploreCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${
                  activeCategory === cat.id 
                    ? "text-white border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]" 
                    : "text-white/30 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className="relative z-10">{cat.label}</span>
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-cyan-500/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 4-COLUMN RESPONSIVE GRID - Fixed to Canonical Classes */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-3/4 rounded-4xl overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl hover:border-cyan-500/30 transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 z-20">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="h-1 w-1 rounded-full bg-cyan-500 animate-ping" />
                      <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[11px] text-white/50 line-clamp-2 mb-6 font-light italic leading-relaxed">
                      "{item.prompt}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <button className="flex-1 py-3 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all rounded-xl active:scale-95">
                        Remix_Node
                      </button>
                      <button className="p-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-magenta-500 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}