export const pricingPageData = {
  header: {
    badge: "Neural_Subscription",
    title: "Flexible Access Protocols",
    subtitle: "Select the intelligence tier that matches your operational requirements. All plans include 256-bit encryption.",
  },
  plans: [
    {
      id: "starter",
      name: "Starter_Node",
      price: "0",
      period: "/month",
      description: "Ideal for individual developers exploring neural architectures.",
      features: [
        "500 AI Generations / mo",
        "Standard Neural Processing",
        "Public Showcase Access",
        "Community Support",
        "Basic API Integration"
      ],
      isPopular: false,
      ctaText: "Begin_Free_Protocol",
    },
    {
      id: "pro",
      name: "Pro_Architect",
      price: "49",
      period: "/month",
      description: "Advanced tools for professional creators and scaling startups.",
      features: [
        "Unlimited AI Generations",
        "Priority Neural Processing",
        "Private Neural Vault",
        "24/7 Dedicated Support",
        "Advanced Bridge API",
        "4K Multi-modal Exports"
      ],
      isPopular: true,
      ctaText: "Execute_Pro_Plan",
    },
    {
      id: "enterprise",
      name: "Enterprise_Core",
      price: "Custom",
      period: "",
      description: "Full-scale neural infrastructure for global organizations.",
      features: [
        "Custom Model Training",
        "Isolated Dedicated Servers",
        "White-label Integration",
        "SLA Guarantee",
        "Unlimited Team Seats",
        "Custom Security Layer"
      ],
      isPopular: false,
      ctaText: "Contact_System_Admin",
    }
  ]
};