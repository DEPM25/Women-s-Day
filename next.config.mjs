/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/Women-s-Day",
  assetPrefix: "/Women-s-Day",
};

export default nextConfig
