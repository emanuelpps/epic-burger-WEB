/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "res.cloudinary.com",
      "https://res.cloudinary.com/",
      "res-console.cloudinary.com",
    ],
  },
};

export default nextConfig;
