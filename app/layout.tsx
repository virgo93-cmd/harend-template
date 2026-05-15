import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/global/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorEffect from "@/components/ui/CursorEffect";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050505]">
        {/* Kursor Efek di layer global */}
        <CursorEffect />
        
        {/* Navigasi Utama */}
        <Navbar />
        
        {/* Main Content Area */}
        {children}

        {/* Footer Perusahaan */}
        <Footer />
      </body>
    </html>
  );
}