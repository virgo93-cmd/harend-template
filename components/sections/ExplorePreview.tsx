"use client";

import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { exploreData } from "@/data/explore/data";

export default function ExplorePreview() {
  // Kita ambil cuma 4 item pertama buat tampilan landing page
  const previewItems = exploreData.slice(0, 4);

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* HEADER MINI */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-3 py-1 mb-4 border border-cyan-500/30 rounded-full bg-cyan-500/5"
            >
              <span className="text-[9px] font-mono text-cyan-500 uppercase tracking-[0.4em]">
                Neural_Archive: Preview_Mode
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              Neural_Discovery<span className="text-cyan-500">.</span>Archive
            </h2>
          </div>

          <NextLink 
            href="/explore"
            className="group flex items-center gap-4 px-6 py-3 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
              Enter Full Archive
            </span>
            <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-cyan-500 transition-all" />
          </NextLink>
        </div>

        {/* COMPACT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-4/5 rounded-3xl overflow-hidden border border-white/5 bg-[#0a0a0a]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Minimalis - Hanya muncul saat Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[8px] font-mono text-cyan-400 uppercase mb-1 tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-base font-black text-white uppercase italic leading-none mb-4">
                  {item.title}
                </h3>
                <NextLink 
                  href="/explore" 
                  className="w-full py-2 bg-white/10 backdrop-blur-md text-[9px] font-black uppercase text-white text-center rounded-lg hover:bg-cyan-500 hover:text-black transition-all"
                >
                  View Detail
                </NextLink>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}