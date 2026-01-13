import React from 'react';
import heroBike from '../assets/mt07.png'; // Ajustado para uma imagem que você tem (mt07.png)

const Hero: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    height: '90vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    background: 'radial-gradient(circle at center, #1a202c 0%, var(--color-bg) 70%)',
    textAlign: 'center',
    padding: '0 20px',
    marginTop: '-80px',
    overflow: 'hidden'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 700,
    color: 'transparent',
    WebkitTextStroke: '2px rgba(255,255,255,0.1)',
    position: 'absolute',
    zIndex: 0,
    opacity: 0.5,
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
  };

  // Estilo para a moto ficar ao fundo, misturada com o ambiente
  const bikeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.2)',
    zIndex: 1, 
    opacity: 0.4, // Transparência para dar efeito de fundo
    width: '80%',
    maxWidth: '800px',
    pointerEvents: 'none',
    filter: 'drop-shadow(0 0 30px rgba(0,71,187,0.3))' // Brilho azul sutil
  };

  const overlayTextStyle: React.CSSProperties = {
    zIndex: 2,
    position: 'relative',
  };

  return (
    <section style={sectionStyle}>
      {/* A imagem agora é utilizada aqui, resolvendo o erro TS6133 */}
      <img src={heroBike} alt="Moto Destaque" style={bikeStyle} />

      <h1 style={titleStyle}>REVS YOUR HEART</h1>
      
      <div style={overlayTextStyle}>
        <h2 style={{ 
          fontSize: '3rem', 
          marginBottom: '10px', 
          color: 'var(--color-primary)',
          textShadow: '0 4px 10px rgba(0,0,0,0.5)'
        }}>
          CONSULTORIA AUTORIZADA
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#e0e0e0', 
          maxWidth: '600px', 
          margin: '0 auto 40px',
          textShadow: '0 2px 5px rgba(0,0,0,0.8)'
        }}>
          Acelere seus sonhos com a garantia e qualidade Yamaha. 
          Encontre a máquina perfeita para o seu estilo de vida.
        </p>
        <button style={{
          padding: '15px 40px',
          fontSize: '1rem',
          fontWeight: 700,
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          borderRadius: '50px',
          boxShadow: 'var(--shadow-glow)',
          transition: 'var(--transition)',
          textTransform: 'uppercase'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
        onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Ver Modelos
        </button>
      </div>
    </section>
  );
};

export default Hero;