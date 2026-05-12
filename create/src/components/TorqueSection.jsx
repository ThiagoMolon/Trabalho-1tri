import { useRef } from 'react'
import useScrollReveal from "../components/hooks/useScrollReveal"
import cogwheel from '../assets/cogwheel.PNG'
import largeCogwheel from '../assets/large-cogwheel.PNG'

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
              <img src={cogwheel} alt="Pinhão" />
              <div className="gear-label">Engrenagem · 32 RPM</div>
            </div>
            <div className="gear-box">
              <img src={largeCogwheel} alt="Engrenagem Grande" />
              <div className="gear-label">Engrenagem Grande · 16 RPM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TorqueSection