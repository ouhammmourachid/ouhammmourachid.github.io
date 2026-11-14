/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export for GitHub Pages. Only for builds: Next 13.5's dev server wrongly
    // rejects /work/[slug] ("missing generateStaticParams") when export mode is on.
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
}

module.exports = nextConfig
