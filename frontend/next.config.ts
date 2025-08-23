import type { NextConfig } from "next/types";
import path from "path";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};

export default nextConfig;
