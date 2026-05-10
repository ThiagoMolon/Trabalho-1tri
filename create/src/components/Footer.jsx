function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <svg viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="16" stroke="#c87941" strokeWidth="2"/>
              <circle cx="32" cy="32" r="6" fill="#c87941" opacity="0.4"/>
              <rect x="27" y="8" width="10" height="8" rx="1.5" fill="#c87941" opacity="0.7"/>
              <rect x="27" y="48" width="10" height="8" rx="1.5" fill="#c87941" opacity="0.7"/>
              <rect x="8" y="27" width="8" height="10" rx="1.5" fill="#c87941" opacity="0.7"/>
              <rect x="48" y="27" width="8" height="10" rx="1.5" fill="#c87941" opacity="0.7"/>
            </svg>
            <span className="footer-brand-name">Create Mod</span>
          </div>
          <p className="footer-tagline">"Automatize com beleza, construa com propósito."</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#">Wiki do Mod</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Add-ons</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Comunidade</h4>
            <ul>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Subreddit</a></li>
              <li><a href="#">Streamers</a></li>
              <li><a href="#">Showcases</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">Create é um mod criado por simibubi e mantido pela comunidade open-source.</p>
        <p className="footer-copyright">Página de fã — não oficial</p>
      </div>
    </footer>
  )
}

export default Footer