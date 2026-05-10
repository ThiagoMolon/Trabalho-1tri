function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <svg className="bg-gear bg-gear-1" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="65" stroke="#c87941" strokeWidth="1.5"/>
        <circle cx="100" cy="100" r="40" stroke="#c87941" strokeWidth="1.5"/>
        <circle cx="100" cy="100" r="15" fill="#c87941" opacity="0.4"/>
        <path d="M92 25h16l4 12-4 12H92L88 37l4-12zM92 151h16l4 12-4 12H92l-4-12 4-12zM25 92v16l12 4 12-4V92l-12-4-12 4zM151 92v16l12 4 12-4V92l-12-4-12 4zM47 47l8 8-8.5 8.5-11.3-3 3-11.3L47 47zM145 145l8 8-8.5 8.5-11.3-3 3-11.3 8.8-.2zM153 47l-8 8 8.5 8.5 11.3-3-3-11.3L153 47zM55 145l-8 8 8.5 8.5 11.3-3-3-11.3-8.8-.2z" fill="#c87941" opacity="0.5"/>
      </svg>
      <svg className="bg-gear bg-gear-2" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="65" stroke="#d4a827" strokeWidth="1.5"/>
        <circle cx="100" cy="100" r="40" stroke="#d4a827" strokeWidth="1.5"/>
        <circle cx="100" cy="100" r="15" fill="#d4a827" opacity="0.4"/>
        <path d="M92 25h16l4 12-4 12H92L88 37l4-12zM92 151h16l4 12-4 12H92l-4-12 4-12zM25 92v16l12 4 12-4V92l-12-4-12 4zM151 92v16l12 4 12-4V92l-12-4-12 4z" fill="#d4a827" opacity="0.5"/>
      </svg>
      <svg className="bg-gear bg-gear-3" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="30" stroke="#c87941" strokeWidth="1.5"/>
        <circle cx="50" cy="50" r="12" fill="#c87941" opacity="0.5"/>
        <path d="M44 12h12l3 10-3 10H44l-3-10 3-10zM44 68h12l3 10-3 10H44l-3-10 3-10zM12 44v12l10 3 10-3V44l-10-3-10 3zM68 44v12l10 3 10-3V44l-10-3-10 3z" fill="#c87941" opacity="0.6"/>
      </svg>
      <div className="steam-container">
        <div className="steam" style={{left:'15%', '--dur':'5s', '--delay':'0s'}} />
        <div className="steam" style={{left:'28%', '--dur':'4s', '--delay':'1.2s'}} />
        <div className="steam" style={{left:'42%', '--dur':'6s', '--delay':'0.5s'}} />
        <div className="steam" style={{left:'58%', '--dur':'4.5s', '--delay':'2s'}} />
        <div className="steam" style={{left:'72%', '--dur':'5.5s', '--delay':'0.8s'}} />
        <div className="steam" style={{left:'85%', '--dur':'4s', '--delay':'1.7s'}} />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Minecraft Mod</p>
        <h1 className="hero-title">
          Create
          <span>Engrenagens do<br/>Progresso</span>
        </h1>
        <p className="hero-subtitle">
          Construa máquinas complexas, automatize tudo e
          dê vida a contraptions mecânicos com vapor, engrenagens e engenho.
        </p>
        <div className="hero-cta-group">
          <a href="#download" className="btn-primary">Baixar Mod</a>
          <a href="#maquinas" className="btn-outline">Ver Mecanismos</a>
        </div>
      </div>
    </section>
  )
}

export default Hero