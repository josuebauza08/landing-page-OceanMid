import { useEffect, useState } from 'react';
import './index.css';
import dashboardImg from './assets/dashboard.png';
import logoImg from './assets/logo.png'; // Make sure to save the logo here!

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <img src={logoImg} alt="OceanMind Logo" className="brand-logo" />
          </div>
          <div className="nav-links">
            <a href="#features">Características</a>
            <a href="#how-it-works">Cómo Funciona</a>
            <button className="btn-primary nav-btn">Solicitar Demo</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="glow-circle top-left"></div>
        <div className="glow-circle center-right"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge">Tecnología Marítima Next-Gen</div>
            <h1>Inteligencia Predictiva para <span className="text-gradient">Sistemas Eléctricos Navales</span></h1>
            <p>
              Prevén fallas críticas antes de que ocurran. OceanMind analiza continuamente la red eléctrica de tu embarcación, garantizando máxima seguridad, eficiencia operativa y tranquilidad en el mar.
            </p>
            <div className="hero-actions">
              <button className="btn-primary lg">Solicitar Demo</button>
              <button className="btn-secondary lg">Explorar Características</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-panel image-wrapper">
              <img src={dashboardImg} alt="Naval Electrical System Dashboard" className="dashboard-img" />
              <div className="floating-card stat-card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                <div>
                  <div className="stat-value">99.9%</div>
                  <div className="stat-label">Estabilidad de Red</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <h2>Capacidades <span className="text-gradient">Inteligentes</span></h2>
          <p>Herramientas avanzadas diseñadas para proteger el corazón de tu embarcación.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>
            <h3>Modelado Predictivo de Fallas</h3>
            <p>Deja de reaccionar a las averías. Nuestros algoritmos avanzados detectan anomalías tempranas en la red eléctrica de tu barco, prediciendo fallas básicas antes de que causen tiempo de inactividad operativa.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
            </div>
            <h3>Diagnóstico Eléctrico Avanzado</h3>
            <p>Obtén información profunda y en tiempo real sobre circuitos, generadores y tableros de distribución. Aísla problemas con precisión milimétrica directamente desde tu panel de control.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <h3>Mantenimiento Basado en Datos</h3>
            <p>Transforma tus planes de mantenimiento. Pasa de costosas reparaciones reactivas a intervenciones inteligentes y planificadas, basadas en datos reales del estado del sistema.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-header">
          <h2>Integración <span className="text-gradient">Simplificada</span></h2>
          <p>Un sencillo proceso de 3 pasos para asegurar el futuro de tu flota.</p>
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Integrar y Recopilar</h3>
              <p>Conecta OceanMind de manera fluida a la infraestructura eléctrica existente de tu embarcación para comenzar a recopilar datos de rendimiento en tiempo real.</p>
            </div>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Monitorear y Analizar</h3>
              <p>El sistema evalúa continuamente el voltaje, la carga y la salud interna del sistema, cruzando datos con modelos predictivos.</p>
            </div>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Alertar y Prevenir</h3>
              <p>Recibe alertas tempranas y procesables en tu panel de control, empoderando a tu tripulación para realizar mantenimiento dirigido de forma segura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="cta-section">
        <div className="cta-box glass-panel">
          <div className="glow-circle bottom-center"></div>
          <h2>Mantén tu Flota <span className="text-gradient">Energizada y Segura.</span></h2>
          <p>No dejes que fallas eléctricas inesperadas anclen tus operaciones. Únete hoy al futuro del mantenimiento marítimo inteligente.</p>
          <button className="btn-primary lg pulse-glow">Asegura tu Flota Ahora</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
            <img src={logoImg} alt="OceanMind Logo" className="brand-logo" />
          </div>
          <p>&copy; {new Date().getFullYear()} OceanMind Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
