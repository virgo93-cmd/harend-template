"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPageData } from "@/data/pricing/data";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-magenta-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.3em] text-cyan-500 uppercase mb-6"
          >
            {pricingPageData.header.badge}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 italic"
          >
            {pricingPageData.header.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/40 text-sm md:text-base leading-relaxed"
          >
            {pricingPageData.header.subtitle}
          </motion.p>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPageData.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 3) }}
              className={`relative flex flex-col p-1 rounded-[40px] transition-all duration-500 group ${
                plan.isPopular 
                  ? "bg-linear-to-b from-cyan-500/50 via-magenta-500/50 to-transparent shadow-[0_0_50px_rgba(6,182,212,0.15)]" 
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {/* Inner Card */}
              <div className="flex flex-col h-full bg-[#080808] rounded-[38px] p-8 lg:p-10 overflow-hidden relative border border-white/5">
                {/* Popular Badge - FIXED CLASS */}
                {plan.isPopular && (
                  <div className="absolute top-8 -right-9 rotate-45 bg-cyan-500 text-black text-[9px] font-black px-10 py-1 uppercase tracking-widest shadow-lg">
                    Most_Active
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-10">
                  <h3 className="text-[11px] font-mono tracking-[0.4em] text-white/30 uppercase mb-4 group-hover:text-cyan-400 transition-colors">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black text-white tracking-tighter italic">${plan.price}</span>
                    <span className="text-white/20 text-xs font-medium uppercase tracking-widest">{plan.period}</span>
                  </div>
                  <p className="text-white/40 text-[12px] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 group/item">
                      <div className="mt-1 rounded-full p-0.5 bg-cyan-500/10 border border-cyan-500/20 group-hover/item:border-cyan-500 transition-colors">
                        <Check size={10} className="text-cyan-500" />
                      </div>
                      <span className="text-[12px] text-white/60 group-hover/item:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    plan.isPopular 
                      ? "bg-cyan-500 text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]" 
                      : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
            All transactions are processed through Neural_Secure gateway v2.4
          </p>
        </motion.div>
      </div>
    </main>
  );
}