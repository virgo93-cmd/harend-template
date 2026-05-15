import Hero from "@/components/sections/Hero";
import ExplorePreview from "@/components/sections/ExplorePreview";
import Features from "@/components/sections/Features";
import EcosystemPreview from "@/components/sections/EcosystemPreview";
import PricingPreview from "@/components/sections/PricingPreview";
import Testimonials from "@/components/sections/Testimonials";

const SectionDivider = () => (
  <div className="w-full px-6 md:px-12 lg:px-24">
    <div className="w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="w-full bg-[#050505]">
      {/* 1. Hero Section */}
      <Hero />
      
      <SectionDivider />
      
      {/* 2. Explore Preview */}
      <ExplorePreview />

      <SectionDivider />

      {/* 3. Features Section */}
      <Features />

      <SectionDivider />

      {/* 4. Ecosystem Preview */}
      <EcosystemPreview />

      <SectionDivider />

      {/* 5. Pricing Preview */}
      <PricingPreview />

      <SectionDivider />

      {/* 6. Testimonials Section */}
      <Testimonials />
    </main>
  );
}