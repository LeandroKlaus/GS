import React from 'react';
import logo from '../assets/GS.svg';
import instaIcon from '../assets/Insta.svg';
import wppIcon from '../assets/Wpp.svg';
import locIcon from '../assets/Loc.svg';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const headerStyle = {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    padding: scrolled ? '15px 40px' : '30px 40px',
    backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'var(--transition)',
  };

  const linkStyle = {
    color: 'var(--color-text)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: 600,
    fontSize: '0.9rem',
    textTransform: 'uppercase' as 'uppercase',
    letterSpacing: '1px',
    transition: 'color 0.2s',
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src={logo} alt="GS Logo" style={{ height: '40px', filter: 'brightness(1.2)' }} />
        <span style={{ 
          fontFamily: 'Oswald', 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          color: 'var(--color-accent)' 
        }}>
          GUSTAVO SADOK
        </span>
      </div>

      <nav>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <a href="https://www.instagram.com/gustavomt09yt" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <img src={instaIcon} alt="Instagram" style={{ width: '20px', filter: 'invert(1)' }} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5592981561566" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <img src={wppIcon} alt="WhatsApp" style={{ width: '20px', filter: 'invert(1)' }} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <img src={locIcon} alt="Localização" style={{ width: '20px', filter: 'invert(1)' }} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;