/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export for GitHub Pages: `next build` writes the whole site to ./out
    output: 'export',
    // Every page exports as folder/index.html (/fr/, /work/talla/). GitHub Pages serves these
    // reliably; without it, /fr would clash between fr.html and the fr/ folder of case studies.
    trailingSlash: true,
    // A stray package-lock.json higher up the disk makes Next guess the wrong project root
    outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
