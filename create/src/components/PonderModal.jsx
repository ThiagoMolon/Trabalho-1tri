function PonderModal({ open, onClose, title, content }) {
  return (
    <div className={`ponder-overlay ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="ponder-card" onClick={e => e.stopPropagation()}>
        <button className="ponder-close" onClick={onClose}>&times;</button>
        <h2>{title}</h2>
        <div className="ponder-content">
          {content.split('\n').map((line, idx) => (
            <div key={idx} className="ponder-line">
              {line}
            </div>
          ))}
        </div>
        <button className="ponder-close-btn" onClick={onClose}>Fechar Ponder</button>
      </div>
    </div>
  )
}

export default PonderModal