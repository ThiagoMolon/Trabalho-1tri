import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/chat?username=${encodeURIComponent(username)}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Bem-vindo ao Chat!</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', marginBottom: '20px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Entrar no Chat</button>
      </form>
    </div>
  );
}