"use client";

import { default as NextLink } from "next/link";
import { usePathname } from "next/navigation";
import { navbarData } from "@/data/global/navbar";

export default function NavbarMobile({ isOpen, setIsOpen, onAuthOpen }: any) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <div className={`fixed inset-0 bg-[#050505] z-[150] lg:hidden flex flex-col items-center justify-center transition-all duration-500 ${
      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
    }`}>
      <div className="flex flex-col items-center gap-8 w-full px-6">
        {navbarData.navLinks.map((link) => (
          <NextLink
            key={link.id}
            href={link.path}
            onClick={() => setIsOpen(false)}
            className="flex flex-col items-center group"
          >
            <span className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-[0.4em] mb-1">
              {link.label}
            </span>
            <span className={`text-3xl font-black uppercase italic tracking-tighter transition-colors ${
              isActive(link.path) ? "text-cyan-400" : "text-white"
            }`}>
              {link.title}
            </span>
          </NextLink>
        ))}
        
        <button
          onClick={() => {
            setIsOpen(false);
            onAuthOpen();
          }}
          className="mt-6 w-full max-w-[280px] py-4 rounded-full bg-cyan-500 text-[11px] font-black text-black uppercase tracking-[0.2em] active:scale-95 transition-transform"
        >
          Access_Neural_Hub
        </button>
      </div>
    </div>
  );
}