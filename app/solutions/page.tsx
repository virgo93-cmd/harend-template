"use client";

import { motion } from "framer-motion";
import { industrySolutions, solutionsHeader, techHighlights } from "@/data/solutions/data";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      
      {/* --- BACKGROUND AMBIENT SYSTEM --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-150 h-150 bg-cyan-500/10 blur-[180px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-purple-500/10 blur-[180px] rounded-full opacity-50" />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-400 mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
          >
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.4em] animate-pulse">
              {solutionsHeader.badge}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6"
          >
            {solutionsHeader.title.split('_')[0]}_<span className="text-cyan-500">{solutionsHeader.title.split('_')[1]}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/40 text-sm md:text-base font-light leading-relaxed italic"
          >
            "{solutionsHeader.subtitle}"
          </motion.p>
        </div>

        {/* INDUSTRY SOLUTIONS GRID (MOCKUP STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {industrySolutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-4xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-white/20"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-${item.color}-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Node */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]`} />
                </div>

                <div className="mb-6">
                  <span className={`text-[10px] font-mono text-${item.color}-500 uppercase tracking-widest mb-1 block`}>
                    {item.title}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight">
                    {item.subtitle}
                  </h3>
                </div>

                <p className="text-[12px] text-white/40 font-light leading-relaxed mb-8 grow">
                  {item.description}
                </p>

                {/* Tech Badge */}
                <div className="flex items-center gap-2 mb-8">
                  <div className={`h-1 w-1 rounded-full bg-${item.color}-500 animate-ping`} />
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-tighter">
                    {item.techBadge}
                  </span>
                </div>

                <button className={`w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black group-hover:border-${item.color}-500/50`}>
                  Remix_Node
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TECH HIGHLIGHTS SECTION (BOTTOM) */}
        <div className="pt-20 border-t border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {techHighlights.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <tech.icon className="w-5 h-5 text-cyan-500" />
                  <h4 className="text-[11px] font-black text-white uppercase tracking-widest font-mono">
                    {tech.title}
                  </h4>
                </div>
                <p className="text-[11px] text-white/30 font-light leading-relaxed italic">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}