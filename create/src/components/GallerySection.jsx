import { useState, useRef } from 'react'
import useScrollReveal from "../components/hooks/useScrollReveal"

const galleryImages = [
  {
    id: 1,
    thumb: '🎨',
    title: 'Pinhão',
    desc: 'A menor engrenagem. Ideal para multiplicar velocidade em sistemas de transmissão.'
  },
  {
    id: 2,
    thumb: '⚙️',
    title: 'Engrenagem Grande',
    desc: 'Multiplica torque. Mais lenta, mas com força impressionante para sistemas pesados.'
  },
  {
    id: 3,
    thumb: '🔧',
    title: 'Correia de Transmissão',
    desc: 'Conecta eixos distantes. Eficiente e fácil de implementar em estruturas complexas.'
  },
  {
    id: 4,
    thumb: '⛓️',
    title: 'Corrente de Gelo',
    desc: 'Durável e resistente. Perfeita para ambientes frios ou sistemas que exigem estabilidade extrema.'
  }
]

function GallerySection() {
  const sectionRef = useRef()
  useScrollReveal(sectionRef)

  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = galleryImages[selectedIndex]

  return (
    <section id="galeria" ref={sectionRef}>
      <div className="container">
        <p className="section-tag on-scroll">— Catálogo Visual</p>
        <h2 className="section-title on-scroll">Galeria de Componentes</h2>
        <p className="section-lead on-scroll">
          Clique nas miniaturas abaixo para ver mais detalhes sobre cada componente essencial do Create.
        </p>

        <div className="gallery-layout on-scroll" style={{ marginTop: '3rem' }}>
          {/* Imagem Principal */}
          <div className="gallery-main">
            <div className="gallery-image-container">
              <div className="gallery-main-display">
                <span style={{ fontSize: '5rem' }}>{selected.thumb}</span>
              </div>
              <div className="gallery-main-info">
                <h3>{selected.title}</h3>
                <p>{selected.desc}</p>
              </div>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="gallery-thumbs">
            {galleryImages.map((img, idx) => (
              <button
                key={img.id}
                className={`gallery-thumb ${idx === selectedIndex ? 'active' : ''}`}
                onClick={() => setSelectedIndex(idx)}
                title={img.title}
              >
                <span>{img.thumb}</span>
                <div className="thumb-label">{img.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
