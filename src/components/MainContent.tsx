import React from 'react';
import Hero from './Hero';
import MotoGallery from './MotoGallery';

interface MainContentProps {
  motos: any[];
  openModal: (moto: any, type: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ motos, openModal }) => {
  return (
    <main>
      <Hero />
      <div id="catalogo" style={{ 
        padding: '80px 40px', 
        background: 'linear-gradient(to bottom, var(--color-bg), var(--color-surface))' 
      }}>
        <div style={{ marginBottom: '60px', textAlign: 'left', borderLeft: '4px solid var(--color-primary)', paddingLeft: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>Catálogo 2025</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Selecione sua próxima conquista</p>
        </div>
        <MotoGallery motos={motos} openModal={openModal} />
      </div>
    </main>
  );
};

export default MainContent;