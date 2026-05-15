"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
// ERROR FIX: Path diarahkan ke data ecosystem, bukan docs
import { featureTags } from "@/data/ecosystem/data"; 
import ecosystemAnimation from "@/public/assets/lottie/ecosystem.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface FeatureTag {
  id: number;
  label: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  color: string;
}

export default function NeuralNexus() {
  return (
    <div className="relative w-full flex items-center justify-center overflow-visible">
      
      {/* CENTRAL LOTTIE NEXUS */}
      <div className="relative z-20 w-full max-w-3xl">
        <Lottie 
          animationData={ecosystemAnimation} 
          loop={true} 
          className="w-full h-full drop-shadow-[0_0_50px_rgba(16,185,129,0.2)]"
        />
      </div>

      {/* FLOATING TECH TAGS */}
      {(featureTags as FeatureTag[]).map((tag) => (
        <motion.div
          key={tag.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0] 
          }}
          transition={{ 
            delay: 0.2 * tag.id,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ 
            position: 'absolute',
            top: tag.top,
            bottom: tag.bottom,
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
            
            {/* Scanning Line Effect */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-all overflow-hidden">
              <div className="w-full h-full bg-white/20 animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
      
    </div>
  );
}