"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPageData } from "@/data/pricing/data";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-24 md:pt-32 pb-20 px-6">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-magenta-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-cyan-500 uppercase mb-4 md:mb-6"
          >
            {pricingPageData.header.badge}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 md:mb-6 italic leading-none"
          >
            {pricingPageData.header.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-white/40 text-xs md:text-base leading-relaxed"
          >
            {pricingPageData.header.subtitle}
          </motion.p>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {pricingPageData.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} // Pake whileInView biar smooth pas scroll di HP
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index) }}
              className={`relative flex flex-col p-px rounded-[32px] md:rounded-[40px] transition-all duration-500 group overflow-hidden ${
                plan.isPopular 
                  ? "bg-linear-to-b from-cyan-500/50 via-magenta-500/50 to-transparent shadow-[0_0_50px_rgba(6,182,212,0.15)]" 
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {/* Inner Card */}
              <div className="flex flex-col h-full bg-[#080808] rounded-[31px] md:rounded-[38px] p-6 lg:p-10 overflow-hidden relative border border-white/5">
                
                {/* Popular Badge - Fixed for Mobile Responsiveness */}
                {plan.isPopular && (
                  <div className="absolute top-6 -right-10 rotate-45 bg-cyan-500 text-black text-[8px] font-black px-10 py-1 uppercase tracking-widest shadow-lg z-20">
                    Most_Active
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-8 md:mb-10">
                  <h3 className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3 md:mb-4">
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tighter italic">${plan.price}</span>
                    <span className="text-white/20 text-[10px] font-medium uppercase tracking-widest">{plan.period}</span>
                  </div>
                  <p className="text-white/40 text-[11px] md:text-[12px] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 group/item">
                      <div className="mt-1 shrink-0 rounded-full p-0.5 bg-cyan-500/10 border border-cyan-500/20 group-hover/item:border-cyan-500 transition-colors">
                        <Check size={8} className="text-cyan-500 md:size-[10px]" />
                      </div>
                      <span className="text-[11px] md:text-[12px] text-white/60 group-hover/item:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    plan.isPopular 
                      ? "bg-cyan-500 text-black hover:bg-white active:scale-95" 
                      : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black active:scale-95"
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center px-4"
        >
          <p className="text-[8px] md:text-[10px] font-mono text-white/20 tracking-widest uppercase">
            All transactions are processed through Neural_Secure gateway v2.4
          </p>
        </motion.div>
      </div>
    </main>
  );
}