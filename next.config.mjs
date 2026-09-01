/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable if you deploy behind Docker/Node runtime and want a minimal image.
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
