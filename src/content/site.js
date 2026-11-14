// Site-wide text and links. Product case-study text lives in src/app/work/products.js.

export const SITE = 'https://ouhammmourachid.github.io'

export const LINKS = {
  github: 'https://github.com/ouhammmourachid',
  linkedin: 'https://www.linkedin.com/in/rachid-ouhammou-383347202/',
  email: 'contact.ouhammou@gmail.com',
  cv: '/cv/rachid-ouhammou-cv-en.pdf',
}

// Page path with the trailing slash `trailingSlash: true` produces: '/', '/work/talla/'
export const pathFor = (rest = '') => (rest ? `/${rest}/` : '/')

// Fill {placeholders} in a string
export const fill = (str, vars) => str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '')

export const copy = {
  tabs: { model: 'Model' },
  meta: {
    homeTitle: 'Rachid Ouhammou, Software & AI Engineer',
    homeDesc:
      'Software and AI engineer in Casablanca. Founder of PocketsHub and WakilAds, co-founder of Talla. I take products from idea to production.',
    caseTitle: '{name}, case study | Rachid Ouhammou',
    jobTitle: 'Software & AI Engineer',
  },
  plotter: {
    sub: 'SOFTWARE & AI ENGINEER, BUILT 3 SAAS PRODUCTS',
    subMob: ['SOFTWARE & AI ENGINEER', 'BUILT 3 SAAS PRODUCTS'],
    span: '6 YEARS, IDEA TO PRODUCTION',
    timeline: ['2019 CPGE', '2022 ENSAM', '2023 GENIUSITY', '2024 HOTMIX', '2025 FOUNDER', 'NOW'],
    command: 'Command:',
    commands: [
      'RECTANG  0,0  1152,592',
      'TEXT  "Rachid Ouhammou"',
      'CIRCLE  center 33.5731,-7.5898  radius 128',
      'DIMLINEAR  2019 to 2025',
      'RECTANG  ×3  PocketsHub, Talla, WakilAds',
      'PLOT  done, 1 sheet',
    ],
    replot: 'Replot',
    caseSuffix: 'case study',
  },
  home: {
    h1: 'Rachid Ouhammou, software and AI engineer in Casablanca',
    about: 'I design, build and launch SaaS products end to end, from the idea to production.',
    aboutMore: 'Full-stack code, generative AI and DevOps, so what I ship stays useful, fast and reliable.',
    layersH: 'Layers',
    blocksH: 'Blocks',
    historyH: 'History',
    layers: [
      { name: 'Backend', color: 'var(--fg)', items: 'Python, Django, FastAPI, Flask, Spring Boot, PocketBase, REST' },
      { name: 'AI', color: 'var(--hl)', items: 'LLMs, generative AI, GANs, TensorFlow, scikit-learn, OpenCV, Pandas' },
      { name: 'Cloud', color: 'var(--dim)', items: 'AWS, Azure, Vercel, Docker, Kubernetes, Jenkins, GitHub Actions' },
      { name: 'Frontend', color: 'var(--mark)', items: 'React, JavaScript, HTML, CSS' },
      { name: 'Data', color: 'var(--mute)', items: 'PostgreSQL, MongoDB, Oracle, SQL' },
    ],
    blocks: [
      { name: 'PocketsHub', slug: 'pocketshub', desc: 'Hosting for PocketBase backends: templates, an in-browser hook editor, one-click deploys and logs' },
      { name: 'Talla', slug: 'talla', desc: 'AI photo studio for fashion: one garment photo becomes studio shots and on-model videos' },
      { name: 'WakilAds', slug: 'wakilads', desc: 'AI agent that reads Meta ad accounts, explains results and suggests fixes you approve' },
      { name: 'Mermaid-py', desc: 'Open-source Python library on PyPI for mermaid-js diagrams' },
      { name: 'FindShip', desc: 'AI resume screening with Django, OpenAI and OpenCV' },
    ],
    history: [
      { year: '2025', text: 'Founder of PocketsHub and WakilAds, co-founder of Talla. Full-stack on all three' },
      { year: '2024', text: 'Freelance web engineer at Hotmix: hotmix.ma on Django, React and AWS' },
      { year: '2024', text: 'Data science intern at 3D Smart Factory: GAN image editing in production' },
      { year: '2023', text: 'Data science intern at Geniusity: AI model deployed on Azure' },
      { year: '2022', text: 'Engineering degree in AI & computer science, ENSAM Casablanca (2022–2024)' },
      { year: '2019', text: 'MPSI preparatory classes, CPGE Reda Slaoui, Agadir' },
    ],
    foot: 'Casablanca, Morocco. Arabic, French, English.',
  },
  cs: {
    sheet: 'Sheet {n} of {total}',
    fig: '{domain}, home page, November 2026',
    listed: 'As listed on {domain} in November 2026.',
  },
  notFound: {
    title: 'Sheet not found',
    text: 'This drawing is not in the set. The sheets that exist are listed below.',
  },
}
