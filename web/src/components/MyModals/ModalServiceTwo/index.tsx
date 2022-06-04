import { useState } from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root')

const [modalIsOpen, setModalIsOpen] = useState(false)

function handleOpenModal() {
   setModalIsOpen(true)
}
function handleCloseModal() {
   setModalIsOpen(false)
}

const customStyles = {
   overlay: {
      background: "hsla(var(--second-hue), 28%, 16%, .7)",
   },
   content: {
      padding: '4.5rem 1.5rem 2.5rem',
      display: 'grid',
      placeItens: 'center',
      transition: '.4s',
      zIndex: 1000,
      marginRight: '-12rem',
      border: 'none',
      borderRadius: '1.5rem',
      background: "var(--body-color)",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
   }
}

export function ModalServiceTwo() {
   return <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
   >
      <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

      <h3 className="services__modal-title">Product Designer</h3>
      <p className="services__modal-description">
         Service with more than 3 years of experience. Providing quality work to clients and
         companies.
      </p>

      <ul className="services__modal-list">
         <li className="services__modal-item">
            <i className="bx bx-check services__modal-icon"></i>
            <p className="services__modal-info">
               I develop the user interface.
            </p>
         </li>
         <li className="services__modal-item">
            <i className="bx bx-check services__modal-icon"></i>
            <p className="services__modal-info">
               Web page development
            </p>
         </li>
         <li className="services__modal-item">
            <i className="bx bx-check services__modal-icon"></i>
            <p className="services__modal-info">
               I create ux element interactions.

            </p>
         </li>
         <li className="services__modal-item">
            <i className="bx bx-check services__modal-icon"></i>
            <p className="services__modal-info">
               I position your company brand
            </p>
         </li>
         <li className="services__modal-item">
            <i className="bx bx-check services__modal-icon"></i>
            <p className="services__modal-info">
               Design and mockups of products for companies.
            </p>
         </li>
      </ul>

   </Modal>
}