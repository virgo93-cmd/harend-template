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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#050505] min-h-screen flex flex-col">
        {/* Navbar di layer paling atas */}
        <Navbar />
        
        {/* Main content dikasih container biar gak nabrak fixed navbar */}
        <div className="flex-1 flex flex-col relative z-0">
          {children}
        </div>

        <Footer />

        {/* Efek kursor ditaruh paling bawah biar nggak nge-block klik navigasi */}
        <CursorEffect />
      </body>
    </html>
  );
}