/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site is plain HTML/CSS/JS, so it can be hosted anywhere
  // (Vercel, Netlify, GitHub Pages) and moved to a custom domain freely.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
