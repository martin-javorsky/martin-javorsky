/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProduction ? "/martin-javorsky" : undefined,
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      /**
       * Enables tree shaking of index.ts files. This is handy when the project uses index.ts as
       * barrel files for reexporting exports from other files (for instance, within a folder).
       *
       * These files shouldn't contain any side-effects.
       * https://github.com/vercel/next.js/issues/12557#issuecomment-994278512
       */
      {
        test: /index.ts/i,
        sideEffects: false,
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ];
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
