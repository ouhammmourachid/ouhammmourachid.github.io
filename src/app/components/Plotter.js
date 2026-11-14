'use client'

import { Fragment, useRef, useState } from 'react'
import SheetBar from './SheetBar'

// Each box opens that product's sheet (case study)
const PRODUCTS = [
  { name: 'POCKETSHUB', url: '/work/pocketshub', short: '.com', full: 'pocketshub.com', label: 'PocketsHub case study' },
  { name: 'TALLA', url: '/work/talla', short: 'tallaai.com', full: 'tallaai.com', label: 'Talla case study' },
  { name: 'WAKILADS', url: '/work/wakilads', short: '.com', full: 'wakilads.com', label: 'WakilAds case study' },
]

const TIMELINE = ['2019 CPGE', '2022 ENSAM', '2023 GENIUSITY', '2024 HOTMIX', '2025 FOUNDER', 'NOW']

const COMMANDS = [
  { t: 0.1, text: 'RECTANG  0,0  1152,592' },
  { t: 0.9, text: 'TEXT  "Rachid Ouhammou"' },
  { t: 2.6, text: 'CIRCLE  center 33.5731,-7.5898  radius 128' },
  { t: 4.1, text: 'DIMLINEAR  2019 to 2025' },
  { t: 5.0, text: 'RECTANG  ×3  PocketsHub, Talla, WakilAds' },
  { t: 6.4, text: 'PLOT  done, 1 sheet', ok: true },
]

// --t is when a stroke starts, --d how long the pen takes
const s = (t, d) => ({ '--t': `${t}s`, ...(d ? { '--d': `${d}s` } : {}) })

/* Wide sheet, 1200 × 640 model units */
function DesktopSheet() {
  const ticks = [90, 430, 600, 770, 940, 1110]
  return (
    <svg className="pl-svg desk" viewBox="0 0 1200 640" aria-hidden="true">
      <defs>
        <clipPath id="pl-clip-d"><circle cx="960" cy="230" r="128" /></clipPath>
      </defs>
      <rect className="ln w" pathLength="1" x="24" y="24" width="1152" height="592" style={s(0.1, 1.2)} />
      <text className="tx" x="70" y="178" fontSize="104" style={s(0.9, 1.6)}>RACHID</text>
      <text className="tx" x="70" y="290" fontSize="104" style={s(1.6, 2)}>OUHAMMOU</text>
      <text className="ty" x="74" y="350" style={s(3.2)}>SOFTWARE &amp; AI ENGINEER, FOUNDER OF 3 SAAS PRODUCTS</text>
      <image className="photo" href="/rachid-bw.jpg" x="832" y="102" width="256" height="256" clipPath="url(#pl-clip-d)" preserveAspectRatio="xMidYMid slice" style={s(3.4)} />
      <circle className="ln w" pathLength="1" cx="960" cy="230" r="128" style={s(2.6, 0.9)} />
      <line className="cl" x1="800" y1="230" x2="1120" y2="230" />
      <line className="cl" x1="960" y1="70" x2="960" y2="390" />
      <path className="ln c" pathLength="1" d="M960 230 L1051 139 L1150 139" style={s(3.6, 0.5)} />
      <text className="tc" x="1058" y="130" style={s(4)}>R. OUHAMMOU</text>
      <path className="ln c" pathLength="1" d="M90 470 H1110 M90 455 V485 M1110 455 V485" style={s(4.1, 1)} />
      {ticks.map((x) => <circle key={x} className="tc" cx={x} cy="470" r="4" style={s(4.6)} />)}
      {TIMELINE.map((label, i) => (
        <text key={label} className="tc" x={ticks[i]} y="508" textAnchor={i === 0 ? 'start' : i === 5 ? 'end' : 'middle'} style={s(4.7)}>{label}</text>
      ))}
      <text className="tc" x="600" y="452" textAnchor="middle" style={s(4.8)}>6 YEARS, IDEA TO PRODUCTION</text>
      {PRODUCTS.map((p, i) => {
        const x = 90 + i * 360
        return (
          <a key={p.name} href={p.url} aria-label={p.label}>
            <rect className="hit" x={x} y="540" width="300" height="54" />
            <rect className="ln w" pathLength="1" x={x} y="540" width="300" height="54" style={s(5 + i * 0.3, 0.6)} />
            <text className="tw" x={x + 18} y="575" style={s(5.5 + i * 0.3)}>{p.name}</text>
            <text className="tc" x={x + 282} y="574" textAnchor="end" style={s(5.6 + i * 0.3)}>{p.short}</text>
          </a>
        )
      })}
    </svg>
  )
}

/* Tall sheet for phones, 600 × 1180 model units, so labels stay readable */
function MobileSheet() {
  const ticks = [680, 725, 770, 815, 860, 905]
  return (
    <svg className="pl-svg mob" viewBox="0 0 600 1180" aria-hidden="true">
      <defs>
        <clipPath id="pl-clip-m"><circle cx="230" cy="480" r="130" /></clipPath>
      </defs>
      <rect className="ln w" pathLength="1" x="14" y="14" width="572" height="1152" style={s(0.1, 1.2)} />
      <text className="tx" x="44" y="120" fontSize="74" style={s(0.9, 1.6)}>RACHID</text>
      <text className="tx" x="44" y="204" fontSize="74" style={s(1.6, 2)}>OUHAMMOU</text>
      <text className="ty" x="46" y="268" style={s(3.2)}>SOFTWARE &amp; AI ENGINEER</text>
      <text className="ty" x="46" y="296" style={s(3.3)}>FOUNDER OF 3 SAAS PRODUCTS</text>
      <image className="photo" href="/rachid-bw.jpg" x="100" y="350" width="260" height="260" clipPath="url(#pl-clip-m)" preserveAspectRatio="xMidYMid slice" style={s(3.4)} />
      <circle className="ln w" pathLength="1" cx="230" cy="480" r="130" style={s(2.6, 0.9)} />
      <line className="cl" x1="70" y1="480" x2="390" y2="480" />
      <line className="cl" x1="230" y1="320" x2="230" y2="640" />
      <path className="ln c" pathLength="1" d="M230 480 L322 388 L560 388" style={s(3.6, 0.5)} />
      <text className="tc" x="332" y="376" style={s(4)}>R. OUHAMMOU</text>
      <text className="tc" x="44" y="660" style={s(4.1)}>6 YEARS, IDEA TO PRODUCTION</text>
      <path className="ln c" pathLength="1" d="M70 680 V905 M55 680 H85 M55 905 H85" style={s(4.1, 1)} />
      {ticks.map((y) => <circle key={y} className="tc" cx="70" cy={y} r="4" style={s(4.6)} />)}
      {TIMELINE.map((label, i) => (
        <text key={label} className="tc" x="100" y={ticks[i] + 6} style={s(4.7)}>{label}</text>
      ))}
      {PRODUCTS.map((p, i) => {
        const y = 950 + i * 70
        return (
          <a key={p.name} href={p.url} aria-label={p.label}>
            <rect className="hit" x="44" y={y} width="512" height="56" />
            <rect className="ln w" pathLength="1" x="44" y={y} width="512" height="56" style={s(5 + i * 0.3, 0.6)} />
            <text className="tw" x="64" y={y + 37} style={s(5.5 + i * 0.3)}>{p.name}</text>
            <text className="tc" x="536" y={y + 35} textAnchor="end" style={s(5.6 + i * 0.3)}>{p.full}</text>
          </a>
        )
      })}
    </svg>
  )
}

export default function Plotter() {
  const view = useRef(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0, label: '' })
  const [run, setRun] = useState(0)

  // CAD-style readout in model units, measured against whichever sheet is showing
  function onMove(e) {
    const r = view.current.getBoundingClientRect()
    const svg = [...view.current.querySelectorAll('svg')].find((el) => el.getBoundingClientRect().width > 0)
    const k = (svg ? svg.viewBox.baseVal.width : 1200) / r.width
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    setCursor({ x, y, label: `${(x * k).toFixed(1)}, ${((r.height - y) * k).toFixed(1)}` })
  }

  return (
    <>
      <SheetBar active="model" />
      <div className="pl-view" ref={view} onPointerMove={onMove}>
        {/* changing the key remounts the sheets, which restarts every pen stroke */}
        <Fragment key={run}>
          <DesktopSheet />
          <MobileSheet />
        </Fragment>
        <div className="pl-cur" aria-hidden="true" style={{ left: cursor.x, top: cursor.y }}>
          <i /><span>{cursor.label}</span>
        </div>
      </div>
      <div className="pl-cmd">
        <Fragment key={run}>
          {COMMANDS.map((c) => (
            <div key={c.text} className={c.ok ? 'ok' : undefined} style={{ '--t': `${c.t}s` }} aria-hidden="true">
              <b>Command:</b> {c.text}
            </div>
          ))}
        </Fragment>
        <button type="button" className="pl-replot" onClick={() => setRun((n) => n + 1)}>Replot</button>
      </div>
    </>
  )
}
