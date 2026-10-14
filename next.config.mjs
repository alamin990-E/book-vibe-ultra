/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    remotePatterns: [
       {
      protocol: "https",
      hostname: "i.ibb.co.com",
    },
    {
      protocol: "https",
      hostname: "covers.openlibrary.org",
    },
    ],
  },
};

export default nextConfig;
