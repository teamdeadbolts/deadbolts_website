/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Outputs a Single-Page Application (SPA).
  // distDir: './build', // Changes the build output directory to `./dist/`.

   eslint: {
    ignoreDuringBuilds: true, // TODO: Jank
  },
}

export default nextConfig