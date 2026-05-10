import { useState, useEffect, useRef } from 'react'
import PonderModal from './PonderModal'
import useScrollReveal from "../components/hooks/useScrollReveal"

const items = [
  {
    name: 'Andesite Alloy',
    shortDesc: 'Liga fundamental para eixos e engrenagens.',
    icon: '🔩',
    ponderTitle: 'Andesite Alloy',
    ponderContent: '📘 Ponder — Andesite Alloy\n\nA Liga de Andesita é um dos materiais mais fundamentais no Create. Ela é criada combinando cobre e ferro em uma fornalha especial.\n\nUsos principais:\n• Base para eixos de transmissão\n• Componente de engrenagens\n• Estrutura de máquinas básicas\n\nReceitas:\n- Cobre + Ferro → Lingote de Andesita\n- 2x Andesita + Carvão → Engrenagem\n\nDica: Acumule bastante Andesita no início, você vai precisar para quase tudo!'
  },
  {
    name: 'Copper Sheet',
    shortDesc: 'Placa de cobre usada em tubulações e tanques.',
    icon: '🪨',
    ponderTitle: 'Copper Sheet',
    ponderContent: '📘 Ponder — Copper Sheet\n\nPlacas de Cobre são essenciais para construir tanques, tubulações e sistemas hidráulicos.\n\nUsos principais:\n• Tubulações de fluidos\n• Tanques de armazenamento\n• Caldeiras para motores a vapor\n• Painéis decorativos\n\nReceitas:\n- 9x Cobre em lingotes → Bloco de Cobre\n- Bloco de Cobre → 9x Placa de Cobre\n\nDica: Especialmente importante para sistemas de distribuição de água e vapor!'
  },
  {
    name: 'Brass Ingot',
    shortDesc: 'Lingote de latão para componentes avançados.',
    icon: '🛢️',
    ponderTitle: 'Brass Ingot',
    ponderContent: '📘 Ponder — Brass Ingot\n\nO Latão é um material avançado criado a partir de Cobre e Zinco. Ele oferece propriedades superiores às ligas básicas.\n\nUsos principais:\n• Engrenagens avançadas\n• Componentes de máquinas de precisão\n• Estruturas de alta resistência\n• Decoração industrial\n\nReceitas:\n- Cobre + Zinco (calcinado) → Lingote de Latão\n- Lingote de Latão + Engrenagem → Engrenagem de Latão\n\nDica: O Latão é caro, use-o apenas para máquinas de máxima importância!'
  },
  {
    name: 'Iron Ingot',
    shortDesc: 'Ferro refinado, base de muitas máquinas.',
    icon: '⚙️',
    ponderTitle: 'Iron Ingot',
    ponderContent: '📘 Ponder — Iron Ingot\n\nO Ferro é um dos materiais mais básicos e versáteis no Create. Você pode obtê-lo minerando ou combinando minérios.\n\nUsos principais:\n• Estruturas básicas\n• Engrenagens simples\n• Eixos de transmissão\n• Estruturas de máquinas gerais\n\nReceitas:\n- Minério de Ferro (fundido) → Lingote de Ferro\n- Ferro + Carvão → Engrenagem\n- Ferro + Cobre → Andesita\n\nDica: Sempre tenha uma reserva de Ferro. É o material mais usado no início do jogo!'
  }
]

function BeltSection() {
  const sectionRef = useRef()
  useScrollReveal(sectionRef)

  const [speed, setSpeed] = useState(64)
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [ponderOpen, setPonderOpen] = useState(false)
  const [isHolding, setIsHolding] = useState(false)
  const ponderTimer = useRef(null)
  const beltAnimationId = useRef(null)
  const itemPosition = useRef(0)

  const currentItem = items[currentItemIndex]

  // Simular movimento da esteira - mostrar um item por vez
  useEffect(() => {
    let timeElapsed = 0
    const itemDuration = 3000 // 3 segundos por item
    const totalDuration = itemDuration * items.length

    const animate = () => {
      timeElapsed = (timeElapsed + 16) % totalDuration
      const progress = (timeElapsed / itemDuration) % items.length
      
      setCurrentItemIndex(Math.floor(progress))
      itemPosition.current = (progress % 1) * 100
      
      beltAnimationId.current = requestAnimationFrame(animate)
    }

    beltAnimationId.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(beltAnimationId.current)
  }, [])

  // Evento de hold "W" para Ponder
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'w' || e.key === 'W') && !isHolding) {
        setIsHolding(true)
        ponderTimer.current = setTimeout(() => {
          setPonderOpen(true)
          setIsHolding(false)
        }, 2000)
      }
    }

    const handleKeyUp = (e) => {
      if (e.key === 'w' || e.key === 'W') {
        if (ponderTimer.current) {
          clearTimeout(ponderTimer.current)
          ponderTimer.current = null
        }
        setIsHolding(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      if (ponderTimer.current) clearTimeout(ponderTimer.current)
    }
  }, [isHolding])

  return (
    <section id="maquinas" ref={sectionRef}>
      <div className="container">
        <p className="section-tag on-scroll">— Transporte Vertical</p>
        <h2 className="section-title on-scroll">Correia Mecânica</h2>
        <p className="section-lead on-scroll">
          Observe os itens passarem pela correia. Ajuste a velocidade à esquerda (0–256 RPM). Segure <strong style={{ color: 'var(--copper-light)' }}>W</strong> por 2 segundos para abrir o Ponder e saber mais!
        </p>

        <div className="belt-layout on-scroll" style={{ marginTop: '3rem' }}>
          {/* Painel de Velocidade - Esquerda */}
          <div className="speed-panel">
            <label>RPM</label>
            <input
              type="range"
              className="speed-slider"
              min="0"
              max="256"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              orient="vertical"
            />
            <span className="speed-value">{speed}</span>
            <span style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>direção ↑</span>
          </div>

          {/* Centro - Esteira e Conexão */}
          <div className="belt-center">
            {/* Esteira */}
            <div className="belt-container">
              <div className="belt-track">
                <div
                  className="belt-item active"
                  style={{
                    opacity: 0.3 + 0.7 * Math.sin((itemPosition.current / 100) * Math.PI),
                    transform: `translateY(${itemPosition.current * 2}px)`
                  }}
                >
                  <span style={{ fontSize: '2.5rem' }}>{currentItem.icon}</span>
                </div>
              </div>
            </div>

            {/* Linha conectora branca */}
            <svg className="connector-line-svg" viewBox="0 0 200 100">
              <line x1="100" y1="50" x2="200" y2="50" stroke="white" strokeWidth="2" strokeDasharray="4,2" />
            </svg>
          </div>

          {/* Detalhe do item - Direita */}
          <div className="item-detail">
            <h3>{currentItem.name}</h3>
            <p>{currentItem.shortDesc}</p>
            <button
              className="ponder-btn"
              onClick={() => setPonderOpen(true)}
              onMouseEnter={() => {
                if (!isHolding) setIsHolding(true)
              }}
              onMouseLeave={() => {
                if (ponderTimer.current) {
                  clearTimeout(ponderTimer.current)
                  ponderTimer.current = null
                }
                setIsHolding(false)
              }}
            >
              📖 Abrir Ponder {isHolding && '...'}
            </button>
            <div className="item-counter">
              {currentItemIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      </div>

      {/* Modal do Ponder */}
      <PonderModal
        open={ponderOpen}
        onClose={() => setPonderOpen(false)}
        title={currentItem.ponderTitle}
        content={currentItem.ponderContent}
      />
    </section>
  )
}

export default BeltSection