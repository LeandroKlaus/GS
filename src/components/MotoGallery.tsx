import React from 'react';

interface MotoGalleryProps {
  motos: any[];
  openModal: (moto: any, type: string) => void;
}

const MotoGallery: React.FC<MotoGalleryProps> = ({ motos, openModal }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
  };

  return (
    <div style={gridStyle}>
      {motos.map((moto) => (
        <MotoCard key={moto.id} moto={moto} openModal={openModal} />
      ))}
    </div>
  );
};

const MotoCard = ({ moto, openModal }: { moto: any, openModal: any }) => {
  const [hovered, setHovered] = React.useState(false);

  const cardStyle = {
    backgroundColor: 'var(--color-surface)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    position: 'relative' as 'relative',
    transition: 'var(--transition)',
    transform: hovered ? 'translateY(-10px)' : 'none',
    boxShadow: hovered ? 'var(--shadow-glow)' : 'none',
    border: '1px solid var(--glass-border)',
  };

  const imgContainerStyle = {
    padding: '40px 20px',
    background: 'radial-gradient(circle at center, #2a2a2e 0%, var(--color-surface) 100%)',
    position: 'relative' as 'relative',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain' as 'contain',
    transition: 'transform 0.5s ease',
    transform: hovered ? 'scale(1.1) rotate(-2deg)' : 'scale(1)',
    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))'
  };

  const contentStyle = {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '15px',
  };

  const btnStyle = (variant: 'primary' | 'outline') => ({
    flex: 1,
    padding: '12px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.85rem',
    textTransform: 'uppercase' as 'uppercase',
    transition: 'var(--transition)',
    backgroundColor: variant === 'primary' ? 'var(--color-primary)' : 'transparent',
    color: '#fff',
    border: variant === 'primary' ? 'none' : '1px solid rgba(255,255,255,0.2)',
  });

  return (
    <div 
      style={cardStyle} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={imgContainerStyle}>
        <img src={moto.imagem} alt={moto.modelo} style={imgStyle} />
      </div>
      
      <div style={contentStyle}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-accent)' }}>{moto.modelo}</h3>
        
        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
            <button 
                style={btnStyle('primary')}
                onClick={() => openModal(moto, 'financiamento')}
            >
                Simular
            </button>
            <button 
                style={btnStyle('outline')}
                onClick={() => openModal(moto, 'informacoes')}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
            >
                Detalhes
            </button>
        </div>
        <button 
            onClick={() => openModal(moto, 'consorcio')}
            style={{
                background: 'transparent',
                color: 'var(--color-text-muted)',
                fontSize: '0.8rem',
                textDecoration: 'underline',
                textAlign: 'center',
                marginTop: '5px'
            }}
        >
            Ver opção de Consórcio
        </button>
      </div>
    </div>
  );
};

export default MotoGallery;