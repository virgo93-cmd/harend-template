"use client";

import Image from "next/image";
import { featuresData } from "@/data/sections/features";
import { motion, Variants } from "framer-motion";

export default function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative w-full bg-ai-black py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-360 mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* SISI KIRI: BINGKAI ASIMETRIS + GAMBAR (LCP OPTIMIZED) */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative w-72 h-96 lg:w-md lg:h-140"
            >
              <div className="absolute -inset-4 border border-cyan-500/20 rounded-[60px_20px_100px_40px] z-0 animate-pulse" />
              
              <div className="relative w-full h-full overflow-hidden rounded-[40px_10px_80px_20px] border border-white/10 group shadow-2xl">
                <Image
                  src="/assets/img/features_bg.2667x4000.jpg"
                  alt="Neural Feature"
                  fill
                  priority // Tambahkan ini untuk mengganti loading="eager" (LCP Optimization)
                  sizes="(max-width: 768px) 288px, (max-width: 1200px) 448px, 448px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-8 left-6 font-mono text-[9px] lg:text-[11px] text-cyan-400 opacity-0 group-hover:opacity-70 transition-opacity pointer-events-none leading-relaxed">
                  <p>{"fn init_neural_link() {"}</p>
                  <p className="pl-4">{"let sync = core.process();"}</p>
                  <p className="pl-4">{"if sync.is_stable() {"}</p>
                  <p className="pl-8">{"stream.push(MODULAR_BOT);"}</p>
                  <p className="pl-4">{"}"}</p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Floating Chart */}
              <motion.div 
                animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -right-6 -bottom-6 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
              >
                <div className="w-20 h-10 lg:w-28 lg:h-14">
                   <svg viewBox="0 0 100 40" className="w-full h-full stroke-cyan-400 fill-none stroke-2">
                     <motion.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, repeat: Infinity }}
                       d="M0 35 L 20 15 L 40 25 L 60 5 L 80 20 L 100 0" 
                     />
                   </svg>
                </div>
                <p className="text-[9px] text-white/30 mt-2 font-black uppercase tracking-widest text-center">SYNK_RATE: 98%</p>
              </motion.div>
            </motion.div>
          </div>

          {/* SISI KANAN: LIST FITUR */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {featuresData.features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className="flex items-start gap-6 group cursor-default"
                >
                  <div className="relative shrink-0 w-14 h-14 rounded-2xl border border-white/5 bg-white/2 flex items-center justify-center group-hover:border-cyan-500 transition-all duration-500">
                    <Image 
                      src={feature.icon} 
                      alt={feature.title} 
                      width={24} 
                      height={24} 
                      className="filter grayscale group-hover:grayscale-0 transition-all" 
                    />
                    <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white italic uppercase mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/25 text-xs lg:text-sm leading-relaxed max-w-sm group-hover:text-white/50 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-300 aspect-square bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />
    </section>
  );
}