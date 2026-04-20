import { useState, useEffect } from 'react'
import './TestPage.css'

interface TestResult {
  name: string
  status: 'pass' | 'fail' | 'loading'
  detail: string
}

function TestPage() {
  const [tests, setTests] = useState<TestResult[]>([
    { name: 'Página cargada', status: 'loading', detail: '...' },
    { name: 'Base URL configurada', status: 'loading', detail: '...' },
    { name: 'Variables CSS activas', status: 'loading', detail: '...' },
    { name: 'React renderizando', status: 'loading', detail: '...' },
    { name: 'Fuente del sistema', status: 'loading', detail: '...' },
  ])
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const results: TestResult[] = [
      {
        name: 'Página cargada',
        status: 'pass',
        detail: `window.location: ${window.location.href}`,
      },
      {
        name: 'Base URL configurada',
        status: window.location.pathname.includes('landing-page-OceanMid')
          ? 'pass'
          : 'fail',
        detail: `pathname: ${window.location.pathname}`,
      },
      {
        name: 'Variables CSS activas',
        status: getComputedStyle(document.documentElement)
          .getPropertyValue('--accent')
          .trim()
          ? 'pass'
          : 'fail',
        detail: `--accent: ${getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()}`,
      },
      {
        name: 'React renderizando',
        status: 'pass',
        detail: 'useState + useEffect funcionando correctamente',
      },
      {
        name: 'Fuente del sistema',
        status: 'pass',
        detail: getComputedStyle(document.body).fontFamily,
      },
    ]
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTests(results)
  }, [])

  const passed = tests.filter((t) => t.status === 'pass').length
  const failed = tests.filter((t) => t.status === 'fail').length

  return (
    <div className="test-page">
      <header className="test-header">
        <div className="test-badge">TEST</div>
        <h1 className="test-title">
          Página de Pruebas
          <span className="test-subtitle">OceanMid · GitHub Pages</span>
        </h1>
        <div className="test-clock">{now.toLocaleTimeString()}</div>
      </header>

      <div className="test-summary">
        <div className="summary-card pass">
          <span className="summary-num">{passed}</span>
          <span className="summary-label">Pasaron</span>
        </div>
        <div className="summary-card fail">
          <span className="summary-num">{failed}</span>
          <span className="summary-label">Fallaron</span>
        </div>
        <div className="summary-card total">
          <span className="summary-num">{tests.length}</span>
          <span className="summary-label">Total</span>
        </div>
      </div>

      <section className="test-section">
        <h2>Checks de Despliegue</h2>
        <div className="test-list">
          {tests.map((t, i) => (
            <div key={i} className={`test-item ${t.status}`}>
              <div className="test-icon">
                {t.status === 'loading' && <span className="spinner" />}
                {t.status === 'pass' && '✓'}
                {t.status === 'fail' && '✗'}
              </div>
              <div className="test-info">
                <strong>{t.name}</strong>
                <code>{t.detail}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="test-section">
        <h2>Design System</h2>
        <div className="color-grid">
          {[
            ['--accent', 'Accent'],
            ['--text', 'Text'],
            ['--text-h', 'Heading'],
            ['--bg', 'Background'],
            ['--border', 'Border'],
          ].map(([varName, label]) => (
            <div key={varName} className="color-swatch">
              <div
                className="swatch-box"
                style={{ background: `var(${varName})`, border: '1px solid var(--border)' }}
              />
              <span className="swatch-var">{varName}</span>
              <span className="swatch-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="test-section">
        <h2>Interactividad</h2>
        <div className="interactive-demo">
          <Counter />
        </div>
      </section>

      <footer className="test-footer">
        <p>
          Desplegado en{' '}
          <a
            href="https://josuebauza08.github.io/landing-page-OceanMid/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Pages
          </a>
          {' · '}
          <a href="/" onClick={(e) => { e.preventDefault(); window.history.back() }}>
            ← Volver
          </a>
        </p>
      </footer>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="counter-demo">
      <button
        id="counter-dec"
        className="counter-btn"
        onClick={() => setCount((c) => c - 1)}
      >
        −
      </button>
      <span className="counter-val">{count}</span>
      <button
        id="counter-inc"
        className="counter-btn accent"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
      <button
        id="counter-reset"
        className="counter-btn ghost"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  )
}

export default TestPage
