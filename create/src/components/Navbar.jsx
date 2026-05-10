function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-brand">
        <svg className="nav-gear" viewBox="0 0 64 64" fill="none">
          <path d="M32 20a12 12 0 100 24 12 12 0 000-24z" fill="none" stroke="#c87941" strokeWidth="2"/>
          <path d="M32 12v4M32 48v4M44 16l-2.8 2.8M22.8 41.2L20 44M48 32h-4M20 32h-4M44 48l-2.8-2.8M22.8 22.8L20 20" stroke="#c87941" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="5" fill="#c87941" opacity="0.6"/>
          <path d="M27 8h10l2 4-2 4H27l-2-4 2-4zM27 48h10l2 4-2 4H27l-2-4 2-4zM8 27v10l4 2 4-2V27l-4-2-4 2zM48 27v10l4 2 4-2V27l-4-2-4 2z" fill="#c87941" opacity="0.35"/>
        </svg>
        <span className="nav-brand-text">Create</span>
      </a>
      <ul className="nav-links">
        <li><a href="#torque">Torque</a></li>
        <li><a href="#maquinas">Máquinas</a></li>
        <li><a href="#energia">Energia</a></li>
        <li><a href="#download">Download</a></li>
      </ul>
    </nav>
  )
}

export default Navbar