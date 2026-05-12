import { useState, useEffect, useRef } from 'react'
import Engrenagem from "../assets/cogwheel.PNG";
import EngrenagemGrande from "../assets/large-cogwheel.PNG";
import AndesiteAlloy from "../assets/Andesite_Alloy.webp";
import Shaft from "../assets/Shaft.webp";

const items = [
  {
    name: 'Andesite Alloy',
    shortDesc: 'Liga fundamental para eixos e engrenagens.',
    icon: AndesiteAlloy,
    ponderTitle: 'Andesite Alloy',
    ponderContent: '📘 Ponder — Andesite Alloy\n\nA Liga de Andesita é um dos materiais mais fundamentais no Create. Ela é criada combinando cobre e ferro em uma fornalha especial.\n\nUsos principais:\n• Base para eixos de transmissão\n• Componente de engrenagens\n• Estrutura de máquinas básicas\n\nDica: Acumule bastante Andesita no início!'
  },
  {
    name: 'Engrenagem',
    shortDesc: 'Engrenagem padrão para transmissão de movimento.',
    icon: Engrenagem,
    ponderTitle: 'Engrenagem',
    ponderContent: '📘 Ponder — Engrenagem\n\nEngrenagens são componentes essenciais para a transmissão de movimento em máquinas.\n\nUsos principais:\n• Transmissão de movimento\n• Acionamento de mecanismos\n• Sistemas de controle\n\nDica: Fundamentais para o funcionamento de muitas máquinas no Create!'
  },
  {
    name: 'Engrenagem Grande',
    shortDesc: 'Engrenagem de maior escala para sistemas pesados.',
    icon: EngrenagemGrande,
    ponderTitle: 'Engrenagem Grande',
    ponderContent: '📘 Ponder — Engrenagem Grande\n\nEngrenagens grandes são componentes essenciais para sistemas pesados.\n\nUsos principais:\n• Transmissão de movimento em máquinas pesadas\n• Acionamento de mecanismos de grande escala\n• Sistemas de controle industriais\n\nDica: Essenciais para equipamentos de grande porte no Create!'
  },
  {
    name: 'Eixo de Ferro',
    shortDesc: 'Eixo feito de ferro para transmissão de movimento.',
    icon: Shaft,
    ponderTitle: 'Eixo de Ferro',
    ponderContent: '📘 Ponder — Eixo de Ferro\n\nEixos de ferro são componentes essenciais para a transmissão de movimento.\n\nUsos principais:\n• Transmissão de movimento\n• Acionamento de mecanismos\n• Sistemas de controle\n\nDica: Fundamentais para o funcionamento de muitas máquinas no Create!'
  }
]

// ─── Ponder Modal ─────────────────────────────────────────────────────────────
function PonderModal({ open, onClose, title, content }) {
  if (!open) return null
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.65)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000,
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#1a1a2e',
          border: '1px solid #f0c060',
          borderRadius: 14,
          padding: '2rem 2.25rem',
          maxWidth: 500, width: '90%',
          color: '#eee',
          animation: 'slideUp 0.25s ease'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
          <div style={{
            background: '#f0c060', borderRadius: 5,
            padding: '2px 9px', fontSize: 10, fontWeight: 700,
            color: '#1a1a2e', letterSpacing: 1, textTransform: 'uppercase'
          }}>
            Ponder
          </div>
          <h2 style={{ margin: 0, fontSize: '1.05rem', color: '#f0c060', fontWeight: 600 }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              marginLeft: 'auto', background: 'none', border: 'none',
              color: '#777', fontSize: 20, cursor: 'pointer', lineHeight: 1, padding: 0
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ height: 1, background: '#2e2e4e', marginBottom: '1.25rem' }} />

        <pre style={{
          whiteSpace: 'pre-wrap', fontFamily: 'inherit',
          lineHeight: 1.75, fontSize: '0.9rem', margin: 0, color: '#ddd'
        }}>
          {content}
        </pre>

        <button
          onClick={onClose}
          style={{
            marginTop: '1.75rem', padding: '0.5rem 1.5rem',
            background: '#f0c060', border: 'none', borderRadius: 8,
            cursor: 'pointer', fontWeight: 700, color: '#1a1a2e', fontSize: '0.9rem'
          }}
        >
          Fechar
        </button>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(14px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </div>
  )
}

// ─── Belt Section ─────────────────────────────────────────────────────────────
function BeltSection() {
  const [speed, setSpeed]                       = useState(64)
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [itemPosition, setItemPosition]         = useState(0)
  const [ponderOpen, setPonderOpen]             = useState(false)

  // Ponder conditions
  const [isHoveringBelt, setIsHoveringBelt] = useState(false)
  const [isHoldingW, setIsHoldingW]         = useState(false)
  const [progress, setProgress]             = useState(0)   // 0–100

  // Both conditions must be true simultaneously
  const ponderActive = isHoveringBelt && isHoldingW

  const posRef      = useRef(0)
  const animRef     = useRef(null)
  const lastTimeRef = useRef(null)

  const currentItem = items[currentItemIndex]

  // ── Belt animation ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (speed === 0) {
      cancelAnimationFrame(animRef.current)
      lastTimeRef.current = null
      return
    }
    const step = (ts) => {
      if (lastTimeRef.current === null) lastTimeRef.current = ts
      const delta = ts - lastTimeRef.current
      lastTimeRef.current = ts
      const pxPerMs = (speed / 256) * 0.12
      posRef.current += pxPerMs * delta
      if (posRef.current >= 100) {
        posRef.current = 0
        setCurrentItemIndex(prev => (prev + 1) % items.length)
      }
      setItemPosition(posRef.current)
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
    return () => { cancelAnimationFrame(animRef.current); lastTimeRef.current = null }
  }, [speed])

  // ── Ponder progress: 3 s = 75 ticks of 40 ms → increment 100/75 per tick ──
  useEffect(() => {
    if (!ponderActive) {
      setProgress(0)
      return
    }
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 100 / 75          // fills in exactly 3 s
        if (next >= 100) {
          clearInterval(interval)
          setPonderOpen(true)
          return 100
        }
        return next
      })
    }, 40)
    return () => clearInterval(interval)
  }, [ponderActive])

  // ── Keyboard ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const down = (e) => { if (e.key === 'w' || e.key === 'W') setIsHoldingW(true) }
    const up   = (e) => { if (e.key === 'w' || e.key === 'W') setIsHoldingW(false) }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup',   up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, [])

  const handleClosePonder = () => { setPonderOpen(false); setProgress(0) }

  // ── Derived visuals ─────────────────────────────────────────────────────────
  const opacity =
    itemPosition < 10 ? itemPosition / 10 :
    itemPosition > 80 ? (100 - itemPosition) / 20 : 1
  const translateY = itemPosition * 3.6 - 180

  const secondsElapsed = Math.min((progress / 100) * 3, 3).toFixed(1)

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section id="maquinas" style={{ padding: '4rem 2rem' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>

        <p style={{ color: '#aaa', fontSize: '0.85rem', margin: '0 0 4px' }}>— Transporte Vertical</p>
        <h2 style={{ margin: '0 0 0.75rem' }}>Correia Mecânica</h2>
        <p style={{ color: '#bbb', lineHeight: 1.65, maxWidth: 560 }}>
          Observe os itens passando pela correia. Ajuste a velocidade (0–256 RPM).{' '}
          <strong style={{ color: '#f0c060' }}>Passe o mouse sobre a correia</strong> e mantenha{' '}
          <strong style={{ color: '#f0c060' }}>W</strong> pressionado por{' '}
          <strong style={{ color: '#f0c060' }}>3 segundos</strong> para abrir o Ponder do item atual.
        </p>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', marginTop: '2.5rem' }}>

          {/* Speed slider */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <label style={{ fontSize: 11, color: '#888', letterSpacing: 1, textTransform: 'uppercase' }}>RPM</label>
            <input
              type="range" min="0" max="256" value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              style={{ writingMode: 'vertical-lr', direction: 'rtl', height: 180 }}
            />
            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{speed}</span>
          </div>

          {/* Belt track — this is the hover zone */}
          <div
            onMouseEnter={() => setIsHoveringBelt(true)}
            onMouseLeave={() => setIsHoveringBelt(false)}
            style={{
              width: 80, height: 360,
              border: `2px solid ${ponderActive ? '#f0c060' : isHoveringBelt ? '#886622' : '#333'}`,
              borderRadius: 40,
              background: '#080814',
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0,
              cursor: 'crosshair',
              transition: 'border-color 0.25s'
            }}
          >
            {/* Belt item */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: `translateX(-50%) translateY(${translateY}px)`,
              opacity,
              pointerEvents: 'none',
              userSelect: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <img
                src={currentItem.icon}
                alt={currentItem.name}
                style={{ width: 44, height: 44, objectFit: 'contain', imageRendering: 'pixelated' }}
              />
            </div>

            {/* "Press W" hint inside belt when hovering but not holding */}
            {isHoveringBelt && !isHoldingW && (
              <div style={{
                position: 'absolute', bottom: 14, left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(240,192,96,0.12)',
                border: '1px solid rgba(240,192,96,0.35)',
                borderRadius: 6, padding: '3px 10px',
                fontSize: 12, fontWeight: 700, color: '#f0c060',
                pointerEvents: 'none', whiteSpace: 'nowrap',
                letterSpacing: 1
              }}>
                W
              </div>
            )}

            {/* Charging glow ring when active */}
            {ponderActive && (
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: 40,
                boxShadow: 'inset 0 0 18px rgba(240,192,96,0.25)',
                pointerEvents: 'none'
              }} />
            )}
          </div>

          {/* Right panel */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Item info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <img
                src={currentItem.icon} alt={currentItem.name}
                style={{ width: 30, height: 30, objectFit: 'contain', imageRendering: 'pixelated' }}
              />
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{currentItem.name}</h3>
              <span style={{ marginLeft: 'auto', color: '#555', fontSize: 12 }}>
                {currentItemIndex + 1} / {items.length}
              </span>
            </div>
            <p style={{ color: '#888', margin: '0 0 1.5rem', fontSize: '0.88rem' }}>
              {currentItem.shortDesc}
            </p>

            {/* ── Ponder HUD ── */}
            <div style={{
              background: '#0e0e1e',
              border: `1px solid ${ponderActive ? '#f0c06088' : '#222'}`,
              borderRadius: 10,
              padding: '0.9rem 1.1rem',
              marginBottom: '1.25rem',
              transition: 'border-color 0.25s, opacity 0.25s',
              opacity: isHoveringBelt ? 1 : 0.4
            }}>
              {/* HUD top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#f0c060', letterSpacing: 1.5, textTransform: 'uppercase' }}>
                  Ponder
                </span>
                <span style={{ fontSize: 11, color: ponderActive ? '#f0c060' : '#444' }}>
                  {ponderActive
                    ? `${secondsElapsed}s / 3.0s`
                    : isHoveringBelt
                    ? 'segure W…'
                    : 'passe o mouse na correia'}
                </span>
              </div>

              {/* Progress bar */}
              <div style={{ height: 6, background: '#1a1a2a', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: progress >= 100
                    ? '#4ade80'
                    : 'linear-gradient(90deg, #c87820 0%, #f0c060 100%)',
                  borderRadius: 3,
                  transition: ponderActive ? 'width 0.04s linear' : 'width 0.2s ease'
                }} />
              </div>

              {/* Status row */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                marginTop: 8, fontSize: 11
              }}>
                <span style={{ color: ponderActive ? '#c8a040' : '#444' }}>
                  {ponderActive ? '● carregando' : isHoveringBelt ? '○ aguardando W' : '○ inativo'}
                </span>
                <span style={{ color: isHoldingW ? '#f0c060' : '#333' }}>
                  {isHoldingW ? '▼ W pressionado' : '▽ W solto'}
                </span>
              </div>
            </div>

            {/* Fallback direct button */}
            <button
              onClick={() => setPonderOpen(true)}
              style={{
                padding: '0.45rem 1.1rem',
                background: 'transparent',
                border: '1px solid #333',
                borderRadius: 7,
                cursor: 'pointer',
                color: '#888',
                fontSize: '0.82rem',
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'border-color 0.15s, color 0.15s'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#ccc' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#888' }}
            >
              📖 Abrir Ponder direto
            </button>
          </div>
        </div>
      </div>

      <PonderModal
        open={ponderOpen}
        onClose={handleClosePonder}
        title={currentItem.ponderTitle}
        content={currentItem.ponderContent}
      />
    </section>
  )
}

export default BeltSection