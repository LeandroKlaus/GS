import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { motos } from './models/Motos';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMoto, setSelectedMoto] = useState<any>(null);
  const [modalType, setModalType] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (moto: any, type: string) => {
    setSelectedMoto(moto);
    setModalType(type);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
        setSelectedMoto(null);
        setModalType('');
    }, 300);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="app-container">
      <Header scrolled={scrolled} />
      <MainContent 
        motos={motos} 
        openModal={openModal}
      />
      <Footer />
      <Modal 
        isOpen={showModal}
        closeModal={closeModal} 
        modalType={modalType} 
        selectedMoto={selectedMoto} 
      />
    </div>
  );
};

export default App;