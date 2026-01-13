import React from 'react';
import logo from '../assets/GS.svg';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
        backgroundColor: '#0a0a0c', 
        padding: '60px 40px', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: 'auto'
    }}>
      <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '40px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src={logo} alt="Logo" style={{ width: '40px', opacity: 0.5 }} />
            <div>
                <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>GUSTAVO SADOK</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Consultor Autorizado Yamaha</p>
            </div>
        </div>

        <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>&copy; 2025 Todos os direitos reservados.</p>
            <a href="https://github.com/LeandroKlaus" target="_blank" rel="noopener noreferrer" 
               style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600 }}>
               Dev by @klausdev
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;