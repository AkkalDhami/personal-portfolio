import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx$/
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  typedRoutes: true
};

export default withMDX(nextConfig);
