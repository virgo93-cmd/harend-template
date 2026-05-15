"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/data/sections/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.reviews.length) % testimonialsData.reviews.length);
  };

  return (
    <section className="relative w-full bg-ai-black pb-24 lg:pb-32 overflow-hidden">
      {/* MODERN WEB3 DIVIDER */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-6 md:px-12 lg:px-24 pt-16 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* SISI KIRI: HEADER */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
                <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">
                  {testimonialsData.subtitle}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white italic uppercase tracking-tighter leading-tight">
                {testimonialsData.title}
              </h2>
              
              <p className="text-white/30 text-sm md:text-base font-medium leading-relaxed">
                {testimonialsData.description}
              </p>
            </motion.div>
          </div>

          {/* SISI KANAN: SLIDER */}
          <div className="w-full lg:w-2/3 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-80">
              <AnimatePresence mode="popLayout" initial={false}>
                {testimonialsData.reviews.slice(currentIndex, currentIndex + 2).map((review) => (
                  <motion.div
                    key={`${review.id}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative p-8 rounded-4xl bg-white/3 border border-white/5 backdrop-blur-xl group hover:border-purple-500/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500/20 group-hover:border-purple-500 transition-colors">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold uppercase italic tracking-wider text-sm">
                          {review.name}
                        </h4>
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed italic font-medium">
                      "{review.comment}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-purple-500 transition-all group"
              >
                <svg className="w-5 h-5 text-white/30 group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-purple-500 transition-all group bg-linear-to-br from-purple-500 to-magenta-600 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="flex-1 h-px bg-white/10 relative overflow-hidden ml-4">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: `${(currentIndex / (testimonialsData.reviews.length - 1)) * 100 - 100}%` }}
                  className="absolute inset-0 bg-linear-to-r from-purple-500 to-magenta-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}