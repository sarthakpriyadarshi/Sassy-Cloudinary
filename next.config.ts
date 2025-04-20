import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "aimg.clerk.dev",
      "img.clerk.com",
      "clerk.dev",
      "lh3.googleusercontent.com",
      "cdn.discordapp.com",
    ],
  },
  /* config options here */
};

export default nextConfig;
