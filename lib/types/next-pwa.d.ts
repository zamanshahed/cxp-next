// next-pwa.d.ts
declare module "next-pwa" {
  import { NextConfig } from "next";
  type PWAConfig = {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    [key: string]: any;
  };

  export default function createNextPWA(
    pwaConfig: PWAConfig
  ): (nextConfig: NextConfig) => NextConfig;
}
