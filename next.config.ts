import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Hapus bagian eslint-nya dulu kalau dia bikin error merah di editor lu
};

export default nextConfig;