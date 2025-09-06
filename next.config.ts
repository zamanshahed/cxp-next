import type { NextConfig } from "next";
import createNextPWA from "next-pwa";

const withPWA = createNextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // disable in dev
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  plugins: { "@tailwindcss/postcss": {} },
};

export default withPWA(nextConfig);
