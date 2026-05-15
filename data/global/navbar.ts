export const navbarData = {
  logo: "/assets/logos/logo-300x300.png",
  brandName: "HAREND",
  // Gabungan navigasi multi-page yang kita diskusikan
  navLinks: [
    {
      id: 1,
      title: "Explore",
      path: "/explore",
      label: "NEURAL_LABS", 
    },
    {
      id: 2,
      title: "Solutions",
      path: "/solutions",
      isDropdown: true,
      dropdownLinks: [
        { title: "Creative Studio", path: "/solutions/creative" },
        { title: "Enterprise AI", path: "/solutions/enterprise" },
        { title: "FinTech Bridge", path: "/solutions/fintech" },
      ],
    },
    {
      id: 3,
      title: "Ecosystem",
      path: "/ecosystem",
      label: "MODELS",
    },
    {
      id: 4,
      title: "Docs",
      path: "/docs",
      label: "DEV_PORTAL",
    },
  ],
  actionLinks: {
    pricing: {
      title: "Pricing",
      path: "/pricing",
    },
    cta: {
      title: "Launch_App",
      path: "/app",
    },
  },
};