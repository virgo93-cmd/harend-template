"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import NextLink from "next/link";
import { pricingPageData } from "@/data/pricing/data";

export default function PricingPreview() {
  const plans = pricingPageData.plans;

  return (
    <section className="relative py-20 lg:py-24 bg-[#050505] overflow-hidden">
      {/* WEB3 SECTION DIVIDER (ATAS) */}
      <div className="absolute top-0 left-0 w-full px-6 md:px-12 lg:px-24">
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* HEADER MINI */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/2"
          >
            <span className="text-[9px] font-mono text-cyan-500 uppercase tracking-[0.4em]">
              Neural_Access: Pricing
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Choose Your <span className="text-cyan-500">Node.</span>
          </h2>
        </div>

        {/* COMPACT PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 lg:p-8 rounded-3xl border transition-all duration-500 ${
                plan.isPopular 
                  ? "bg-white/5 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.1)]" 
                  : "bg-[#0a0a0a] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-base lg:text-lg font-black text-white uppercase italic tracking-widest">{plan.name}</h3>
                  <p className="text-[9px] lg:text-[10px] text-white/40 uppercase tracking-widest mt-1 max-w-60">{plan.description}</p>
                </div>
                {plan.isPopular && (
                  <span className="px-2 py-1 bg-cyan-500 text-black text-[8px] font-black uppercase rounded-sm">Popular</span>
                )}
              </div>

              <div className="mb-6 lg:mb-8">
                <span className="text-3xl lg:text-4xl font-black text-white">{plan.price}</span>
                <span className="text-[9px] lg:text-[10px] text-white/20 uppercase ml-2 tracking-widest">
                  {plan.period}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.slice(0, 4).map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className="shrink-0 w-4 h-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Check size={10} className="text-cyan-500" />
                    </div>
                    <span className="text-[10px] lg:text-[11px] text-white/50">{feature}</span>
                  </div>
                ))}
              </div>

              <NextLink href="/pricing" className="block w-full mt-auto">
                <button 
                  className={`w-full py-3.5 rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest transition-all ${
                    plan.isPopular 
                      ? "bg-cyan-500 text-black hover:bg-white hover:scale-[1.02]" 
                      : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black hover:scale-[1.02]"
                  } active:scale-95`}
                >
                  {plan.ctaText}
                </button>
              </NextLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}