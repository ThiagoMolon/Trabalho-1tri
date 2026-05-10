import { useRef } from 'react'
import useScrollReveal from "../components/hooks/useScrollReveal"

function TorqueSection() {
  const sectionRef = useRef()
  useScrollReveal(sectionRef)

  return (
    <section id="torque" ref={sectionRef}>
      <div className="container">
        <p className="section-tag on-scroll">— Força & Rotação</p>
        <h2 className="section-title on-scroll">Torque vs Velocidade</h2>
        <p className="section-lead on-scroll">
          No Create, cada eixo carrega Stress Units (SU). Engrenagens grandes aumentam torque (SU efetivo), mas reduzem RPM. Já engrenagens pequenas multiplicam a velocidade — porém consomem muito mais SU do sistema.
        </p>
        <div className="torque-layout on-scroll" style={{marginTop:'3rem'}}>
          <div className="torque-text">
            <div style={{marginBottom:'2rem'}}>
              <h3 style={{fontFamily:'Rajdhani, sans-serif',color:'var(--copper-light)'}}>⚙️ Alta Velocidade</h3>
              <p style={{color:'var(--text-dim)'}}>Ideal para prensas e misturadores — completa receitas mais rápido. Porém exige muito SU e pode sobrecarregar sua fonte.</p>
              <div className="stress-bar"><div className="stress-fill" style={{width:'92%'}} /></div>
              <div className="stress-value">Stress: 92% · 14.7 / 16 SU</div>
            </div>
            <div>
              <h3 style={{fontFamily:'Rajdhani, sans-serif',color:'var(--copper-light)'}}>🔩 Alto Torque</h3>
              <p style={{color:'var(--text-dim)'}}>Multiplica a força disponível, permitindo mover mais máquinas em série. A rotação fica mais lenta, mas estável.</p>
              <div className="stress-bar"><div className="stress-fill" style={{width:'38%'}} /></div>
              <div className="stress-value">Stress: 38% · 6.1 / 16 SU</div>
            </div>
          </div>
          <div className="torque-diagram">
            <div className="gear-box">
              <svg width="110" height="110" viewBox="0 0 100 100">
                <g style={{transformOrigin:'50px 50px',animation:'spin-rev 3s linear infinite'}}>
                  <circle cx="50" cy="50" r="22" stroke="#d4a827" strokeWidth="2.5" fill="none"/>
                  <circle cx="50" cy="50" r="8" fill="#d4a827" opacity="0.5"/>
                  <rect x="44" y="24" width="12" height="10" fill="#d4a827" opacity="0.8"/>
                </g>
              </svg>
              <div className="gear-label">Pinhão · 64 RPM</div>
            </div>
            <div className="gear-box">
              <svg width="140" height="140" viewBox="0 0 120 120">
                <g style={{transformOrigin:'60px 60px',animation:'spin 6s linear infinite'}}>
                  <circle cx="60" cy="60" r="38" stroke="#c87941" strokeWidth="2.5" fill="rgba(200,121,65,0.05)"/>
                  <circle cx="60" cy="60" r="14" fill="#c87941" opacity="0.4"/>
                  <rect x="52" y="16" width="16" height="14" fill="#c87941" opacity="0.8"/>
                </g>
              </svg>
              <div className="gear-label">Engrenagem Grande · 16 RPM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TorqueSection