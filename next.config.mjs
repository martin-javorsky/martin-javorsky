/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProduction ? "/martin-javorsky" : undefined,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
