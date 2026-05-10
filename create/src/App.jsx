import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TorqueSection from './components/TorqueSection'
import BeltSection from './components/BeltSection'
import GallerySection from './components/GallerySection'
import CuriositySection from './components/CuriositySection'
import EnergySection from './components/EnergySection'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'
import ConfigPanel from './components/ConfigPanel'

function App() {
  return (
    <>
      <ConfigPanel />
      <Navbar />
      <Hero />
      <div className="divider">
        <div className="divider-gear">
          <svg width="24" height="24" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="12" stroke="#c87941" strokeWidth="2" />
            <circle cx="32" cy="32" r="5" fill="#c87941" />
            <path d="M27 8h10l2 4-2 4H27l-2-4 2-4zM27 48h10l2 4-2 4H27l-2-4 2-4zM8 27v10l4 2 4-2V27l-4-2-4 2zM48 27v10l4 2 4-2V27l-4-2-4 2z" fill="#c87941" />
          </svg>
        </div>
      </div>
      <TorqueSection />
      <div className="divider" />
      <BeltSection />
      <div className="divider" />
      <GallerySection />
      <div className="divider" />
      <CuriositySection />
      <div className="divider" />
      <EnergySection />
      <div className="divider" />
      <DownloadSection />
      <Footer />
    </>
  )
}

export default App