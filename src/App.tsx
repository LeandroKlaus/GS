import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './styles/Header.css';
import './styles/MainContent.css';
import './styles/MotoGallery.css';
import './styles/Footer.css';
import './styles/Modal.css';
import './App.css';

const App: React.FC = () => {
  const [motos, setMotos] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMoto, setSelectedMoto] = useState<any>(null);
  const [modalType, setModalType] = useState<string>('');
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);

  useEffect(() => {
    axios.get('https://gustavosadok.app/motos')
      .then(response => {
        setMotos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar motos', error);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFinanciamento = (moto: any) => {
    setSelectedMoto(moto);
    setModalType('financiamento');
    setShowModal(true);
  };

  const handleConsorcio = (moto: any) => {
    setSelectedMoto(moto);
    setModalType('consorcio');
    setShowModal(true);
  };

  const handleInformacoes = (moto: any) => {
    setSelectedMoto(moto);
    setModalType('informacoes');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMoto(null);
    setModalType('');
  };

  return (
    <div className="container">
      <Header />
      <MainContent motos={motos} handleFinanciamento={handleFinanciamento} handleConsorcio={handleConsorcio} handleInformacoes={handleInformacoes} />
      <Footer isFooterVisible={isFooterVisible} />
      {showModal && selectedMoto && (
        <Modal closeModal={closeModal} modalType={modalType} selectedMoto={selectedMoto} />
      )}
    </div>
  );
};

export default App;
