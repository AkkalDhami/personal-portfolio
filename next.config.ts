import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx$/
});

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  typedRoutes: true,
  redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/backend-fundamentals-01",
        permanent: true
      }
    ];
  }
};

export default withMDX(nextConfig);
