// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React strict mode
  env: {
    CUSTOM_API_URL: "https://api.example.com", // Environment variables
  },
  images: {
    domains: ["example.com"], // Allow external images from these domains
  },
  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true, // Indicates a 301 redirect
      },
    ];
  },
};

export default nextConfig;
