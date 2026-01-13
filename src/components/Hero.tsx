import React from 'react';
import heroBike from '../assets/mt09_hero.png'; // Você pode usar a mt07.png ou mt03.png se não tiver outra

const Hero: React.FC = () => {
  const sectionStyle = {
    height: '90vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as 'column',
    position: 'relative' as 'relative',
    background: 'radial-gradient(circle at center, #1a202c 0%, var(--color-bg) 70%)',
    textAlign: 'center' as 'center',
    padding: '0 20px',
    marginTop: '-80px' 
  };

  const titleStyle = {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 700,
    color: 'transparent',
    WebkitTextStroke: '2px rgba(255,255,255,0.1)',
    position: 'absolute' as 'absolute',
    zIndex: 0,
    opacity: 0.5,
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap' as 'nowrap',
  };

  const overlayTextStyle = {
    zIndex: 2,
    position: 'relative' as 'relative',
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>REVS YOUR HEART</h1>
      
      <div style={overlayTextStyle}>
        <h2 style={{ 
          fontSize: '3rem', 
          marginBottom: '10px', 
          color: 'var(--color-primary)' 
        }}>
          CONSULTORIA AUTORIZADA
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--color-text-muted)', 
          maxWidth: '600px', 
          margin: '0 auto 40px' 
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