"use client";

import { motion } from "framer-motion";
import { introContent } from "@/data/docs/data";

export default function DocsPage() {
  return (
    /* JAWABANNYA DISINI: pt-44 untuk dorong konten jauh ke bawah Navbar */
    <div className="max-w-4xl mx-auto pt-44 pb-20 px-6 space-y-16 relative z-10">
      
      {/* SECTION: INTRO */}
      <section>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black uppercase italic tracking-tighter mb-8 text-white leading-none"
        >
          {introContent.title}
        </motion.h2>
        <p className="text-lg text-white/50 leading-relaxed font-light italic max-w-2xl">
          {introContent.description}
        </p>
      </section>

      {/* SECTION: TECH STACK / CORE VALUES */}
      <section>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-emerald-500/50">
          Corporate_Assets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {introContent.techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-sm flex justify-between items-center group hover:border-emerald-500/30 transition-all duration-500"
            >
              <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-white/20 uppercase">
                {tech.version}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}