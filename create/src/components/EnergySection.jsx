import useScrollReveal from "../components/hooks/useScrollReveal"
import { useRef } from 'react'

const energySources = [
  { name: 'Roda d\'Água', desc: 'Força contínua a partir de água corrente. Baixo RPM, alto torque.', color: 'rgba(139,90,43,0.6)' },
  { name: 'Moinho de Vento', desc: 'Energia passiva que depende do espaço ao redor. RPM variável.', color: 'rgba(210,180,140,0.6)' },
  { name: 'Motor a Vapor', desc: 'Alta potência com combustível. Exige água e calor constante.', color: 'rgba(200,120,60,0.7)' },
  { name: 'Gerador Criativo', desc: 'Modo criativo: fornece SU infinito para testes de engenharia.', color: 'rgba(100,100,100,0.6)' }
]

function EnergySection() {
  const sectionRef = useRef()
  useScrollReveal(sectionRef)

  return (
    <section id="energia" ref={sectionRef}>
      <div className="container">
        <p className="section-tag on-scroll">— Fontes de Rotação</p>
        <h2 className="section-title on-scroll">Geração de Energia</h2>
        <p className="section-lead on-scroll">
          Cada fonte de energia no Create tem características únicas. Escolha entre força constante, abundância ou independência de combustível.
        </p>
        <div className="energy-grid on-scroll">
          {energySources.map((src, i) => (
            <div className="energy-card" key={i}>
              <div className="energy-card-inner">
                <div className="energy-front">
                  <div className="energy-3d-model">
                    <div className="cube">
                      <div className="face front" style={{background: src.color}} />
                      <div className="face back" />
                      <div className="face left" />
                      <div className="face right" />
                      <div className="face top" />
                      <div className="face bottom" />
                    </div>
                  </div>
                  <span className="energy-name">{src.name}</span>
                  <p className="energy-desc">{src.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnergySection