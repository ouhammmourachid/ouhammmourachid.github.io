import Link from 'next/link'
import Plotter from './components/Plotter'

const layers = [
  { name: 'Backend', color: 'var(--fg)', items: 'Python, Django, FastAPI, Flask, Spring Boot, PocketBase, REST' },
  { name: 'AI', color: 'var(--hl)', items: 'LLMs, generative AI, GANs, TensorFlow, scikit-learn, OpenCV, Pandas' },
  { name: 'Cloud', color: 'var(--dim)', items: 'AWS, Azure, Vercel, Docker, Kubernetes, Jenkins, GitHub Actions' },
  { name: 'Frontend', color: 'var(--mark)', items: 'React, JavaScript, HTML, CSS' },
  { name: 'Data', color: 'var(--mute)', items: 'PostgreSQL, MongoDB, Oracle, SQL' },
]

const blocks = [
  { name: 'PocketsHub', url: '/work/pocketshub', desc: 'Hosting for PocketBase backends: templates, an in-browser hook editor, one-click deploys and logs' },
  { name: 'Talla', url: '/work/talla', desc: 'AI photo studio for fashion: one garment photo becomes studio shots and on-model videos' },
  { name: 'WakilAds', url: '/work/wakilads', desc: 'AI agent that reads Meta ad accounts, explains results and suggests fixes you approve' },
  { name: 'Mermaid-py', desc: 'Open-source Python library on PyPI for mermaid-js diagrams' },
  { name: 'FindShip', desc: 'AI resume screening with Django, OpenAI and OpenCV' },
]

const history = [
  { year: '2025', text: 'Founder & full-stack developer. Built and launched three SaaS products' },
  { year: '2024', text: 'Freelance web engineer at Hotmix: hotmix.ma on Django, React and AWS' },
  { year: '2024', text: 'Data science intern at 3D Smart Factory: GAN image editing in production' },
  { year: '2023', text: 'Data science intern at Geniusity: AI model deployed on Azure' },
  { year: '2022', text: 'Engineering degree in AI & computer science, ENSAM Casablanca (2022–2024)' },
  { year: '2019', text: 'MPSI preparatory classes, CPGE Reda Slaoui, Agadir' },
]

export default function Home() {
  return (
    <main className="wrap">
      <h1 className="sr-only">Rachid Ouhammou, software and AI engineer in Casablanca</h1>
      <Plotter />

      <p className="pl-about">
        I design, build and launch SaaS products end to end, from the idea to production.{' '}
        <span>Full-stack code, generative AI and DevOps, so what I ship stays useful, fast and reliable.</span>
      </p>

      <div className="pl-grid">
        <section aria-labelledby="h-layers">
          <h2 id="h-layers">Layers</h2>
          <ul className="pl-list">
            {layers.map((l) => (
              <li key={l.name}>
                <i className="sw" style={{ background: l.color }} aria-hidden="true" />
                <div><b>{l.name}</b> <span>{l.items}</span></div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="h-blocks">
          <h2 id="h-blocks">Blocks</h2>
          <ul className="pl-list">
            {blocks.map((b) => (
              <li key={b.name}>
                <div>
                  <b>{b.url ? <Link href={b.url}>{b.name}</Link> : b.name}</b>{' '}
                  <span>{b.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="h-history">
          <h2 id="h-history">History</h2>
          <ul className="pl-list">
            {history.map((h) => (
              <li key={h.text}>
                <div><b>{h.year}</b> <span>{h.text}</span></div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="pl-mail">
        <b>Command:</b> MAIL <a href="mailto:contact.ouhammou@gmail.com">contact.ouhammou@gmail.com</a>{' '}
        <span className="pl-blink" aria-hidden="true" />
      </div>
      <footer className="pl-foot">
        <span>Casablanca, Morocco. Arabic, French, English.</span>
        <nav aria-label="Elsewhere">
          <a href="https://github.com/ouhammmourachid" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:contact.ouhammou@gmail.com">Email</a>
        </nav>
      </footer>
    </main>
  )
}
