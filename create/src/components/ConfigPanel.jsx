import { useState, useEffect } from 'react'

function ConfigPanel() {
  const [isDark, setIsDark] = useState(true)
  const [fontSize, setFontSize] = useState(16)
  const [isOpen, setIsOpen] = useState(false)

  // Carregar configurações do localStorage ao montar
  useEffect(() => {
    const savedDark = localStorage.getItem('darkMode')
    const savedFontSize = localStorage.getItem('fontSize')

    if (savedDark !== null) {
      const isDarkMode = JSON.parse(savedDark)
      setIsDark(isDarkMode)
      applyTheme(isDarkMode)
    }

    if (savedFontSize) {
      const size = Number(savedFontSize)
      setFontSize(size)
      applyFontSize(size)
    }
  }, [])

  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.body.style.backgroundColor = 'var(--bg-deep)'
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      document.body.style.backgroundColor = 'var(--bg-light)'
    }
  }

  const applyFontSize = (size) => {
    document.documentElement.style.fontSize = size + 'px'
  }

  const handleThemeToggle = () => {
    const newDark = !isDark
    setIsDark(newDark)
    applyTheme(newDark)
    localStorage.setItem('darkMode', JSON.stringify(newDark))
  }

  const handleFontSizeChange = (e) => {
    const newSize = Number(e.target.value)
    setFontSize(newSize)
    applyFontSize(newSize)
    localStorage.setItem('fontSize', String(newSize))
  }

  const resetSettings = () => {
    setIsDark(true)
    setFontSize(16)
    applyTheme(true)
    applyFontSize(16)
    localStorage.removeItem('darkMode')
    localStorage.removeItem('fontSize')
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        className="config-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Abrir configurações"
      >
        ⚙️
      </button>

      {/* Painel de configurações */}
      <div className={`config-panel ${isOpen ? 'open' : ''}`}>
        <div className="config-panel-header">
          <h3>Configurações</h3>
          <button
            className="config-close"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="config-section">
          <label className="config-label">Tema</label>
          <div className="theme-toggle">
            <button
              className={`theme-btn ${isDark ? 'active' : ''}`}
              onClick={handleThemeToggle}
            >
              🌙 Escuro
            </button>
            <button
              className={`theme-btn ${!isDark ? 'active' : ''}`}
              onClick={handleThemeToggle}
            >
              ☀️ Claro
            </button>
          </div>
        </div>

        <div className="config-section">
          <label className="config-label">Tamanho da Fonte</label>
          <div className="font-size-control">
            <span className="font-size-decrease" onClick={() => {
              const newSize = Math.max(12, fontSize - 2)
              setFontSize(newSize)
              applyFontSize(newSize)
              localStorage.setItem('fontSize', String(newSize))
            }}>−</span>
            <input
              type="range"
              min="12"
              max="24"
              value={fontSize}
              onChange={handleFontSizeChange}
              className="font-slider"
            />
            <span className="font-size-increase" onClick={() => {
              const newSize = Math.min(24, fontSize + 2)
              setFontSize(newSize)
              applyFontSize(newSize)
              localStorage.setItem('fontSize', String(newSize))
            }}>+</span>
          </div>
          <div className="font-size-display">{fontSize}px</div>
        </div>

        <div className="config-section">
          <button
            className="config-reset-btn"
            onClick={resetSettings}
          >
            Restaurar Padrões
          </button>
        </div>
      </div>

      {/* Overlay para fechar o painel */}
      {isOpen && (
        <div
          className="config-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default ConfigPanel
