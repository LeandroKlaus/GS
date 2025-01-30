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

// Definição da interface para a moto
interface Moto {
  modelo: string;
  imagem: string;
  consorcio: {
    descricao: string;
    valor: string;
  };
  fichaTecnica: string;
}

enum ModalType {
  Financiamento = 'financiamento',
  Consorcio = 'consorcio',
  Informacoes = 'informacoes',
}

const App: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMoto, setSelectedMoto] = useState<Moto | null>(null);
  const [modalType, setModalType] = useState<ModalType | '']('');
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);

  // Buscando motos da API
  useEffect(() => {
    axios.get('https://sadok-054afdfba68d.herokuapp.com/motos')
      .then(response => {
        if (response.status === 200) {
          setMotos(response.data);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar motos', error);
      });
  }, []);

  // Monitorando o scroll para exibir ou esconder o footer
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

  // Funções para controlar o comportamento dos modais
  const handleFinanciamento = (moto: Moto) => {
    setSelectedMoto(moto);
    setModalType(ModalType.Financiamento);
    setShowModal(true);
  };

  const handleConsorcio = (moto: Moto) => {
    setSelectedMoto(moto);
    setModalType(ModalType.Consorcio);
    setShowModal(true);
  };

  const handleInformacoes = (moto: Moto) => {
    setSelectedMoto(moto);
    setModalType(ModalType.Informacoes);
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
