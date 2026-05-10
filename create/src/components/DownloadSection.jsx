import useScrollReveal from "../components/hooks/useScrollReveal"
import { useRef } from 'react'

function DownloadSection() {
  const sectionRef = useRef()
  useScrollReveal(sectionRef)

  return (
    <section id="download" ref={sectionRef}>
      <div className="container">
        <div className="download-content">
          <p className="section-tag on-scroll">— Obter o Mod</p>
          <h2 className="section-title on-scroll">Pronto para Construir?</h2>
          <p className="section-lead on-scroll">
            Disponível para Minecraft Java Edition 1.18+. Compatível com Forge e Fabric.
          </p>
          <div className="on-scroll">
            <a href="https://www.curseforge.com/minecraft/mc-mods/create" target="_blank" className="btn-primary">CurseForge</a>
            <a href="https://modrinth.com/mod/create" target="_blank" className="btn-outline" style={{marginLeft:'1rem'}}>Modrinth</a>
          </div>
          <div className="download-platforms on-scroll" style={{marginTop:'3rem'}}>
            <div className="platform-badge"><span className="platform-dot" />Forge 1.18+</div>
            <div className="platform-badge"><span className="platform-dot" />Fabric 1.18+</div>
            <div className="platform-badge"><span className="platform-dot" />NeoForge</div>
            <div className="platform-badge"><span className="platform-dot" />Gratuito & Open Source</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection