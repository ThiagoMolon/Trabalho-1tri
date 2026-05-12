import cogwheel from '../assets/cogwheel.PNG'

function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-brand">
        <img src={cogwheel} alt="Create" className="nav-gear" />
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