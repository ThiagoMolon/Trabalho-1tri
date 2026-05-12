import { useState, useRef } from 'react'
import useScrollReveal from "../components/hooks/useScrollReveal"
import Engrenagem from "../assets/cogwheel.PNG";
import EngrenagemGrande from "../assets/large-cogwheel.PNG";
import AndesiteAlloy from "../assets/Andesite_Alloy.webp";
import Shaft from "../assets/Shaft.webp";

const galleryImages = [
  {
    id: 1,
    thumb: Engrenagem,
    title: 'engrenagem',
    desc: 'A menor engrenagem. Ideal para multiplicar velocidade em sistemas de transmissão.'
  },
   {
     id: 2,
     thumb: EngrenagemGrande,
     title: 'Engrenagem Grande',
     desc: 'Multiplica torque. Mais lenta, mas com força impressionante para sistemas pesados.'
   },
  {
    id: 3,
    thumb: AndesiteAlloy,
    title: 'Liga Andesito',
    desc: 'Liga fundamental para eixos e engrenagens.'
  },
  {
    id: 4,
    thumb: Shaft,
    title: 'Eixo de Ferro',
    desc: 'Componente essencial para a transmissão de movimento em máquinas.'
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
              {typeof selected.thumb === 'string' && selected.thumb.length < 5 ? (
                <span style={{ fontSize: '5rem' }}>{selected.thumb}</span>
              ) : (
                <img src={selected.thumb} alt={selected.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              )}
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
                {typeof img.thumb === 'string' && img.thumb.length < 5 ? (
                  <span>{img.thumb}</span>
                ) : (
                  <img src={img.thumb} alt={img.title} style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
                )}
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
