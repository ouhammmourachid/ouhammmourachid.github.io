// Product sheets. Facts come from the CV and from each product's public site (read November 2026).
// Plans and prices change: update `plans` when the live pricing does.

export const products = [
  {
    slug: 'pocketshub',
    role: 'Founder & full-stack developer',
    name: 'PocketsHub',
    sheet: 2,
    url: 'https://pocketshub.com',
    domain: 'pocketshub.com',
    tagline: 'PocketBase backends, built in your browser.',
    status: 'Live',
    summary: 'A developer platform for PocketBase: start from a template, write hooks in the browser, deploy with one click.',
    problem:
      'PocketBase is a great one-file backend, but running it still means a server, deploys, logs and version upgrades to look after. PocketsHub takes that work away: pick a template, edit your hooks in the browser, and get a running backend with its own URL and admin panel.',
    steps: [
      { title: 'Pick a pocket', text: 'A pocket is a PocketBase schema plus its hook files. Start from a public one or write your own.' },
      { title: 'Deploy it', text: 'Choose a PocketBase version and get a running backend with its own URL and admin panel.' },
      { title: 'Change the hooks, redeploy', text: 'Edit pb_hooks in the browser, save, and push the change to your instances.' },
    ],
    features: [
      'Browser editor for pb_hooks and pb_migrations, with save and redeploy',
      'One-click deploys, each instance with its own URL and admin panel',
      'PocketBase version picker at deploy time',
      'Step-by-step deployment logs and live status',
      'Pull template updates into instances deployed from a pocket',
      'Public or private pockets to share or keep your templates',
    ],
    plans: {
      rows: [
        { name: 'Free', price: '$0 / mo', detail: 'Unlimited pockets, public or private' },
        { name: 'Starter', price: '$10 / mo', detail: '1 hosted PocketBase instance' },
        { name: 'Pro', price: '$25 / mo', detail: '5 hosted PocketBase instances' },
      ],
      note: 'Pockets are free on every plan. You pay only for the instances you host.',
    },
    platforms: ['PocketBase', 'JavaScript hooks', 'pb_migrations', 'Custom subdomains'],
    image: '/work/pocketshub.jpg',
    imageAlt: 'PocketsHub home page: a hook being edited in the browser, deployed, and answering a request',
  },
  {
    slug: 'talla',
    role: 'Co-founder & full-stack developer',
    name: 'Talla',
    sheet: 3,
    url: 'https://tallaai.com',
    domain: 'tallaai.com',
    tagline: 'Studio-quality fashion photos, on demand.',
    status: 'Live',
    summary: 'An AI photo studio for fashion sellers: one phone photo of a garment becomes model shots and video in minutes.',
    problem:
      'Clothing sellers need good model photos for their store, Instagram and ads, but a shoot means booking a studio, a photographer and models for every collection. Talla replaces the shoot: one photo of the garment, taken on a phone, becomes studio-quality model photos and video.',
    steps: [
      { title: 'Photograph the garment', text: 'A phone photo is enough: flat-lay, on a hanger or on a mannequin.' },
      { title: 'Get model shots', text: 'Talla puts the piece on a model in studio quality, and can show one model in every colour.' },
      { title: 'Turn it into video', text: 'Make short videos for reels, ads and product pages from the same image.' },
    ],
    features: [
      'Flat-lay or phone photo to on-model shot',
      'Mannequin photo to on-model shot',
      'One model shown in every colour of a product',
      'Image to short video for reels, ads and product pages',
      'Virtual try-on, background swap and AI lookbooks',
      'Made for abayas, kaftans and modest fashion as well as everyday wear',
      'Bilingual site and app, Arabic and English',
    ],
    plans: {
      rows: [
        { name: 'Starter', price: '$19 / mo', detail: '200 credits a month' },
        { name: 'Professional', price: '$49 / mo', detail: '700 credits a month' },
        { name: 'Business', price: 'Custom', detail: 'Custom credits' },
      ],
      note: '20 free credits at sign-up, no card needed. Up to 21% off with yearly billing.',
    },
    platforms: ['Arabic + English', '4K images', 'Short video', 'Store, Instagram and ads'],
    image: '/work/talla.jpg',
    imageAlt: 'Talla home page in Arabic, with a row of AI-generated model photos',
  },
  {
    slug: 'wakilads',
    role: 'Founder & full-stack developer',
    name: 'WakilAds',
    sheet: 4,
    url: 'https://wakilads.com',
    domain: 'wakilads.com',
    tagline: 'Your ads, run by just asking.',
    status: 'Beta',
    summary: 'A conversational agent that reads your Meta ads, explains them in plain words and prepares changes you approve.',
    problem:
      'Ads Manager is built for experts. Small businesses that have never run ads either pay an agency or guess, and money leaks into ads that do not work. WakilAds reads the account, says what is working in plain words, and prepares the changes worth making. Nothing goes live until you press Approve.',
    steps: [
      { title: 'Connect the ad account', text: 'Through Meta Business Manager partner access. No Facebook password is shared.' },
      { title: 'Ask, or read the daily check', text: 'Ask questions about your own numbers, or read the daily review of every campaign.' },
      { title: 'Approve what you want', text: 'Pauses, resumes and budget changes wait for your Approve before anything changes.' },
    ],
    features: [
      'Chat answers grounded in your own ad numbers',
      'Daily check that looks over every campaign and suggests changes',
      'Approval-gated actions: pause, resume, adjust daily budget',
      'Monthly spending limit, read-only mode and a stop-all-changes switch',
      'One project per business, with its own ad account, Page, pixel, limit and chat',
      'Reads every campaign in the account, including ones made outside WakilAds',
    ],
    plans: {
      rows: [{ name: 'Beta', price: 'Free', detail: 'Ad spend is still billed by Meta, as usual' }],
      note: 'Free while in beta.',
    },
    platforms: ['Meta Ads (live)', 'Google Ads (coming soon)', 'TikTok (coming soon)', 'Business Manager partner access'],
    image: '/work/wakilads.jpg',
    imageAlt: 'WakilAds home page: "Your ads, run by just asking", with Meta live and Google Ads and TikTok coming soon',
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
