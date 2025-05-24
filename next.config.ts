// import type { NextConfig } from "next";

import { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: { unoptimized: true },
};

module.exports = nextConfig;
