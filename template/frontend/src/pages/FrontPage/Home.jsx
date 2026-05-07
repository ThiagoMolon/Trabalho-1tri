import { useBackendStatus } from '../../hooks/useBackendStatus.js';
import Vite from '../../assets/vite.jsx';

function Home() {
  const backendStatus = useBackendStatus();

  return (
    <div>
      <h1>Frontend React</h1>
      <p>Status do backend: {backendStatus}</p>
      <Vite />
    </div>
  );
}

export default Home;