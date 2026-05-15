import { 
  Palette, 
  Target, 
  Home, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Layers 
} from "lucide-react";

export const solutionsHeader = {
  badge: "Neural_Systems: Active",
  title: "Industry_Solutions",
  subtitle: "Accelerating human creativity and business logic through high-precision neural networks."
};

export const industrySolutions = [
  {
    id: "studio-creative",
    title: "STUDIO_CREATIVE",
    subtitle: "Design_Production",
    description: "Accelerate asset creation with lightning-fast prototypes and high-fidelity concept art generation.",
    icon: Palette,
    color: "cyan",
    features: ["Concept Art", "Logo Generation", "Asset Scaling"],
    techBadge: "Real-time Processing"
  },
  {
    id: "ads-marketing",
    title: "ADS_MARKETING",
    subtitle: "Campaign_Content",
    description: "Dynamic visual content generation for rapid ad deployment across Meta, Google, and TikTok.",
    icon: Target,
    color: "magenta",
    features: ["A/B Visual Testing", "Social Formatting", "Auto-Captioning"],
    techBadge: "Marketing AI v4.0"
  },
  {
    id: "arch-interior",
    title: "ARCH_INTERIOR",
    subtitle: "Visualization_Render",
    description: "Instant high-end visualization from rough sketches to photorealistic 3D interior and exterior renders.",
    icon: Home,
    color: "gold",
    features: ["Sketch-to-Render", "Material Mapping", "Lighting Physics"],
    techBadge: "GPU-Accelerated"
  },
  {
    id: "core-technical",
    title: "CORE_TECHNICAL",
    subtitle: "Infrastructure_API",
    description: "Integrate our neural core directly into your enterprise application with server-grade API endpoints.",
    icon: Cpu,
    color: "purple",
    features: ["REST API", "Private Nodes", "SLA Guaranteed"],
    techBadge: "Enterprise Tier"
  }
];

export const techHighlights = [
  {
    title: "Ultra_Low_Latency",
    description: "Sub-second generation speeds powered by specialized hardware clusters.",
    icon: Zap
  },
  {
    title: "Data_Privacy",
    description: "End-to-end encryption for all neural processing and storage nodes.",
    icon: ShieldCheck
  },
  {
    title: "Global_Edge",
    description: "Deployed across 40+ global regions for consistent worldwide performance.",
    icon: Globe
  },
  {
    title: "Modular_Stack",
    description: "Easily swap neural models or customize weights for specific use cases.",
    icon: Layers
  }
];