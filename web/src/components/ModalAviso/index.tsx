import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function ModalAviso() {
  const customStyles = {
    overlay: {
      background: "rgba(0, 0, 0, .3)",
      backdropFilter: 'blur(8px)',
      zIndex: 'var(--z-modal)'
    },
    content: {
      padding: '4.5rem 1.5rem 2.5rem',
      minWidth: '20rem',
      maxWidth: '40rem',
      display: 'grid',
      placeItens: 'center',
      marginRight: '-12rem',
      border: 'none',
      borderRadius: '1.5rem',
      background: "var(--body-color)",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto',
    }
  }
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)
  const { t } = useTranslation();

  function handleOpenModal() {
     setModalIsOpen(true)
  }


  function handleCloseModal() {
     setModalIsOpen(false)
  }

  return<Modal
     isOpen={modalIsOpen}
     onRequestClose={handleCloseModal}
     style={customStyles}
  >
     <i className='bx bx-x modalaviso-close' onClick={handleCloseModal}></i>

     <h3 className="modalaviso-title">{t('title_modalaviso')}</h3>
     <p className="modalaviso-description">
        {t('txt1_modalaviso')}
     </p>
     <p className="modalaviso-description">
        {t('txt2_modalaviso')}
     </p>
  </Modal>;
}