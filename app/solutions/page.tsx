"use client";

import { motion } from "framer-motion";
import { industrySolutions, solutionsHeader, techHighlights } from "@/data/solutions/data";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-24 md:pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      
      {/* --- BACKGROUND AMBIENT SYSTEM --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 md:w-150 md:h-150 bg-cyan-500/10 blur-[100px] md:blur-[180px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 md:w-150 md:h-150 bg-purple-500/10 blur-[100px] md:blur-[180px] rounded-full opacity-50" />
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
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
          >
            <span className="text-[9px] md:text-[10px] font-mono text-cyan-400 uppercase tracking-[0.4em] animate-pulse">
              {solutionsHeader.badge}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none"
          >
            {solutionsHeader.title.split('_')[0]}_<span className="text-cyan-500">{solutionsHeader.title.split('_')[1]}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/40 text-xs md:text-base font-light leading-relaxed italic px-4"
          >
            "{solutionsHeader.subtitle}"
          </motion.p>
        </div>

        {/* INDUSTRY SOLUTIONS GRID - 2 Kolom di Mobile biar satset */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-32">
          {industrySolutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-5 md:p-8 rounded-[32px] md:rounded-4xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-white/20"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-${item.color}-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Node */}
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-6 md:mb-8 border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className={`w-5 h-5 md:w-7 md:h-7 text-${item.color}-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]`} />
                </div>

                <div className="mb-4 md:mb-6">
                  <span className={`text-[8px] md:text-[10px] font-mono text-${item.color}-500 uppercase tracking-widest mb-1 block`}>
                    {item.title}
                  </span>
                  <h3 className="text-sm md:text-xl font-black text-white uppercase italic tracking-tight leading-none">
                    {item.subtitle}
                  </h3>
                </div>

                <p className="text-[10px] md:text-[12px] text-white/40 font-light leading-relaxed mb-6 md:mb-8 grow line-clamp-3 md:line-clamp-none">
                  {item.description}
                </p>

                {/* Tech Badge */}
                <div className="flex items-center gap-2 mb-6 md:mb-8">
                  <div className={`h-1 w-1 rounded-full bg-${item.color}-500 animate-ping`} />
                  <span className="text-[8px] md:text-[9px] font-mono text-white/30 uppercase tracking-tighter">
                    {item.techBadge}
                  </span>
                </div>

                <button className={`w-full py-2.5 md:py-3.5 rounded-lg md:rounded-xl border border-white/10 bg-white/5 text-[8px] md:text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black group-hover:border-${item.color}-500/50 active:scale-95`}>
                  Remix_Node
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TECH HIGHLIGHTS SECTION (BOTTOM) */}
        <div className="pt-16 md:pt-20 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {techHighlights.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 md:gap-4"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <tech.icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-500" />
                  <h4 className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest font-mono">
                    {tech.title}
                  </h4>
                </div>
                <p className="text-[9px] md:text-[11px] text-white/30 font-light leading-relaxed italic">
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