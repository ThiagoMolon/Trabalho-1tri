import { useState, useRef } from 'react'
import useScrollReveal from "../components/hooks/useScrollReveal"

const curiosities = [
  {
    id: 1,
    title: '⚙️ Stress Units (SU)',
    content: 'Cada máquina consome SU (Stress Units). O limite depende da fonte de energia. Ultrapassar o limite causa falha no sistema! Planeje suas máquinas com cuidado para não sobrecarregar sua fonte de rotação.'
  },
  {
    id: 2,
    title: '💡 Automatização Criativa',
    content: 'O Create permite criar máquinas automatizadas incrivelmente complexas usando engrenagens simples. Desde moinhos até sistemas de produção em massa, tudo é possível com criatividade e planejamento.'
  },
  {
    id: 3,
    title: '🌊 Fontes de Energia Alternativas',
    content: 'Além da roda d\'água e moinho de vento, o Create introduz o motor a vapor, que combina pólvora e água para gerar rotação. No modo criativo, você tem SU infinito para testes!'
  },
  {
    id: 4,
    title: '🔄 Transmissão de Movimento',
    content: 'Eixos, correias e correntes transmitem movimento entre máquinas. Cada tipo de transmissão tem características únicas: a correia é eficiente, a corrente é durável, e o eixo é robusto e confiável.'
  },
  {
    id: 5,
    title: '📦 Contraptions Portáteis',
    content: 'Com o wrench (chave inglesa), é possível desmontar máquinas complexas e levá-las para outro lugar. Uma ferramenta indispensável para quem gosta de experimentar e reorganizar suas criações!'
  }
]

function CuriositySection() {
  const sectionRef = useRef()
  useScrollReveal(sectionRef)

  const [expandedId, setExpandedId] = useState(null)

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="curiosidades" ref={sectionRef}>
      <div className="container">
        <p className="section-tag on-scroll">— Saiba Mais</p>
        <h2 className="section-title on-scroll">Área de Curiosidades</h2>
        <p className="section-lead on-scroll">
          Descubra fatos interessantes e dicas sobre o Create. Clique em qualquer item para expandir e aprender mais!
        </p>

        <div className="accordion-wrapper on-scroll" style={{ marginTop: '3rem', maxWidth: '700px', margin: '3rem auto' }}>
          {curiosities.map((item) => (
            <div
              key={item.id}
              className={`accordion-item ${expandedId === item.id ? 'expanded' : ''}`}
            >
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(item.id)}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div className="accordion-content">
                <div className="accordion-body">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CuriositySection
