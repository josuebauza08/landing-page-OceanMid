import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="OceanMid Hero" />
        </div>
        <div>
          <h1>OceanMid</h1>
          <p>
            Bridging the depths of innovation with the surface of possibility.
          </p>
        </div>
        <a href="#next-steps" className="counter" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Explore the Depths
        </a>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Our Vision</h2>
          <p>Leading the way in sustainable maritime technology and deep-sea exploration.</p>
          <ul>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <h2>Connect</h2>
          <p>Join our voyage towards a better future.</p>
          <ul>
            <li>
              <a href="https://github.com/oceanmid" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
