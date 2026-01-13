import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  modalType: string;
  selectedMoto: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, modalType, selectedMoto }) => {
  if (!selectedMoto) return null;

  // Form States
  const [formData, setFormData] = useState({
    entrada: '', nascimento: '', cpf: '', nome: '', habilitacao: 'sim', celular: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = '';
    if (modalType === 'financiamento') {
      text = `Olá Gustavo, gostaria de simular um financiamento para a *${selectedMoto.modelo}*.\n\nDados:\nNome: ${formData.nome}\nEntrada: ${formData.entrada}\nCPF: ${formData.cpf}`;
    } else {
      text = `Olá Gustavo, tenho interesse no consórcio da *${selectedMoto.modelo}*.`;
    }
    window.open(`https://wa.me/5592981561566?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Styles
  const overlayStyle = {
    position: 'fixed' as 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(5px)',
    zIndex: 1000,
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' as 'visible' : 'hidden' as 'hidden',
    transition: 'all 0.3s ease',
  };

  const panelStyle = {
    position: 'fixed' as 'fixed',
    top: 0, right: 0, bottom: 0,
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#151518',
    zIndex: 1001,
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column' as 'column',
    borderLeft: '1px solid var(--glass-border)',
  };

  const headerStyle = {
    padding: '30px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--color-surface)'
  };

  const bodyStyle = {
    padding: '30px',
    overflowY: 'auto' as 'auto',
    flex: 1,
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: 'var(--color-bg)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#fff',
    outline: 'none',
    fontSize: '1rem',
  };

  return (
    <>
      <div style={overlayStyle} onClick={closeModal} />
      <div style={panelStyle}>
        <div style={headerStyle}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {modalType === 'informacoes' ? 'Especificações' : 'Proposta'}
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#fff', marginTop: '5px' }}>{selectedMoto.modelo}</h2>
          </div>
          <button onClick={closeModal} style={{ background: 'none', color: '#fff', fontSize: '1.5rem' }}>&times;</button>
        </div>

        <div style={bodyStyle}>
            <img src={selectedMoto.imagem} alt={selectedMoto.modelo} style={{ width: '100%', marginBottom: '30px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }} />

            {modalType === 'informacoes' && selectedMoto.fichaTecnica && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {Object.entries(selectedMoto.fichaTecnica).map(([key, value]) => (
                        <div key={key} style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                            <strong style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '5px' }}>
                                {key.replace(/_/g, ' ')}
                            </strong>
                            <span style={{ color: '#fff', fontSize: '1rem' }}>{value as string}</span>
                        </div>
                    ))}
                </div>
            )}

            {(modalType === 'financiamento' || modalType === 'consorcio') && (
                <form onSubmit={handleWhatsapp}>
                    {modalType === 'consorcio' && (
                        <div style={{ padding: '20px', background: 'rgba(0,71,187,0.1)', border: '1px solid var(--color-primary)', borderRadius: '8px', marginBottom: '20px' }}>
                            <p style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{selectedMoto.consorcio.descricao}</p>
                            <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '5px' }}>{selectedMoto.consorcio.valor}</p>
                        </div>
                    )}
                    
                    {modalType === 'financiamento' && (
                        <>
                            <input type="text" name="nome" placeholder="Nome Completo" style={inputStyle} onChange={handleChange} required />
                            <input type="text" name="cpf" placeholder="CPF" style={inputStyle} onChange={handleChange} required />
                            <input type="date" name="nascimento" style={inputStyle} onChange={handleChange} required />
                            <input type="text" name="entrada" placeholder="Valor de Entrada (R$)" style={inputStyle} onChange={handleChange} />
                        </>
                    )}
                    
                    <button type="submit" style={{
                        width: '100%',
                        padding: '18px',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        marginTop: '10px',
                        textTransform: 'uppercase'
                    }}>
                        Enviar via WhatsApp
                    </button>
                </form>
            )}
        </div>
      </div>
    </>
  );
};

export default Modal;