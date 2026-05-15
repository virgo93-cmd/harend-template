"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Mail, Fingerprint, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { navbarData } from "@/data/global/navbar";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-120 overflow-hidden rounded-[40px] border border-white/10 bg-[#050505] p-1 shadow-2xl"
          >
            {/* Animated Border Gradient Decorative */}
            <div className="absolute -inset-1 animate-pulse bg-linear-to-r from-cyan-500/20 via-magenta-500/20 to-cyan-500/20 blur-xl pointer-events-none" />

            <div className="relative rounded-[38px] bg-black/60 p-8 lg:p-12">
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute right-8 top-8 text-white/20 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="mb-10 flex flex-col items-center text-center">
                <div className="mb-6 flex items-center gap-3">
                  <Image 
                    src={navbarData.logo} 
                    alt="Logo" 
                    width={32} 
                    height={32} 
                    className="rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
                  />
                  <span className="text-xl font-black italic tracking-tighter text-white uppercase">
                    {navbarData.brandName}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Neural_Gateway</h3>
                  <p className="text-[10px] font-mono tracking-[0.3em] text-cyan-500/60 uppercase">
                    Secure Access Protocol v1.0
                  </p>
                </div>
              </div>

              {/* Form Access */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  {/* Email Input */}
                  <div className="relative group">
                    <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                      User_Identity
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-cyan-500 transition-colors" size={16} />
                      <input 
                        type="email" 
                        placeholder="EMAIL_ADDRESS"
                        className="w-full rounded-2xl border border-white/5 bg-white/5 py-4 pl-12 pr-4 font-mono text-[11px] text-white outline-none transition-all focus:border-cyan-500/50 focus:bg-white/10"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="relative group">
                    <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                      Access_Key
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-magenta-500 transition-colors" size={16} />
                      <input 
                        type="password" 
                        placeholder="ENCRYPTED_KEY"
                        className="w-full rounded-2xl border border-white/5 bg-white/5 py-4 pl-12 pr-4 font-mono text-[11px] text-white outline-none transition-all focus:border-magenta-500/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                </div>

                <button className="relative w-full overflow-hidden rounded-2xl bg-cyan-500 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  Execute_Login
                </button>
              </form>

              {/* Social Divider */}
              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white/10">Auth_Bridge</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              {/* Social Login */}
              <div className="flex gap-4">
                <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/5 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:border-white/20">
                  <Fingerprint size={14} className="text-cyan-500" /> Google
                </button>
                <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/5 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:border-white/20">
                  <ShieldCheck size={14} className="text-magenta-500" /> Github
                </button>
              </div>

              <p className="mt-10 text-center text-[9px] font-medium text-white/20 uppercase tracking-widest">
                Protected by Harend Encryption Protocol
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}