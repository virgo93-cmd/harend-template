"use client";

import { useState } from "react"; // 1. Tambah useState
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import { heroData } from "@/data/sections/hero";
import AuthModal from "@/components/ui/AuthModal"; // 2. Import AuthModal

export default function Hero() {
  const [isAuthOpen, setIsAuthOpen] = useState(false); // 3. State modal
  const scrollingPartners = [...heroData.partners, ...heroData.partners, ...heroData.partners];

  return (
    <section className="relative w-full overflow-hidden bg-ai-black">
      {/* NEON LINE ANIMATION CONTAINER */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-0 overflow-hidden rounded-b-[60px] lg:rounded-b-[100px]">
        <div className="absolute -inset-full bg-conic-gradient(from_0deg,transparent_20%,#3b82f6_40%,#a855f7_60%,transparent_80%) animate-spin-slow opacity-50" />
        <div className="absolute inset-0.5 bg-ai-black rounded-b-[58px] lg:rounded-b-[98px]" />
      </div>

      {/* Main Glassmorphism Shape Layer */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-white/5 backdrop-blur-md border-b border-white/10 rounded-b-[60px] lg:rounded-b-[100px] z-10 flex flex-col justify-end overflow-hidden">
        
        {/* MARQUEE BAR */}
        <div className="relative w-full bg-linear-to-r from-cyan-500/20 via-magenta-500/20 to-cyan-500/20 backdrop-blur-2xl border-t border-white/10 py-8 lg:py-12">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-black/60 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-black/60 to-transparent pointer-events-none" />

          <div className="flex w-max animate-marquee gap-20 lg:gap-40 px-4 items-center">
            {scrollingPartners.map((item, index) => (
              <span 
                key={index} 
                className="text-white text-2xl lg:text-4xl font-black tracking-[0.3em] uppercase whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background Mesh Gradient */}
      <div className="pointer-events-none absolute -top-40 -left-20 w-full max-w-360 aspect-video opacity-30 blur-[140px] z-20">
        <div className="absolute inset-0 bg-linear-to-br from-ai-blue/30 via-transparent to-ai-purple/20 animate-pulse"></div>
      </div>

      {/* LOTTIE BACKGROUND BEHIND TITLE */}
      <div className="absolute top-0 left-0 h-full pointer-events-none z-0">
        <Lottie 
          animationData={heroData.backgroundData} 
          loop={true} 
          rendererSettings={{
            preserveAspectRatio: 'xMinYMin slice',
            progressiveLoad: true,
            hideOnTransparent: true
          }}
          className="h-full w-auto"
        />
      </div>

      <div className="relative z-30 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 w-full max-w-360 mx-auto gap-12 text-white pt-10 pb-28 md:pt-12 md:pb-40">
        
        {/* Left Side: Content */}
        <div className="relative flex flex-col items-start text-left w-full lg:w-[45%] shrink-0">
          <div className="relative z-10">
            <h1 className="font-extrabold tracking-tight leading-[1.1]">
              <span className="block text-4xl md:text-5xl lg:text-[3.8rem]">
                {heroData.titleLine1}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-[3.8rem] mb-4">
                {heroData.titleLine2}
              </span>
              
              <span className="inline-block whitespace-nowrap text-3xl md:text-4xl lg:text-[2.8rem] bg-linear-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
                <Typewriter
                  options={{
                    strings: heroData.features,
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30,
                    cursor: "|",
                  }}
                />
              </span>
            </h1>
            
            <p className="mt-8 text-base md:text-lg text-white/50 max-w-xl leading-relaxed font-medium">
              {heroData.subtitle}
            </p>

            <div className="mt-10">
              {/* 4. Tambah Trigger Modal */}
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="px-10 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:bg-linear-to-r hover:from-cyan-400 hover:to-magenta-500 hover:text-white active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Animation */}
        <div className="w-full lg:w-[55%] flex items-center justify-center relative min-h-100 lg:min-h-120 overflow-visible">
          <Lottie 
            animationData={heroData.animationData} 
            loop={true} 
            className="w-full h-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.4)]"
          />
        </div>
      </div>

      {/* 5. Render Modal */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </section>
  );
}