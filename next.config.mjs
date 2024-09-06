/** @type {import('next').NextConfig} */
import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProduction ? "/martin-javorsky" : undefined,
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
    };
    return config;
  },
};

export default nextConfig;
