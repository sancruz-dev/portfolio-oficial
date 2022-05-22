import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function MyDialog() {
   const [modalIsOpen, setModalIsOpen] = useState(false)


   function handleOpenModal() {
      setModalIsOpen(true)
   }

   function handleCloseModal() {
      setModalIsOpen(false)
   }

   const customStyles = {
      content: {
         inset: 0,
         backgroundColor: '#f0f',
         padding: '2rem 1rem',
         display: 'grid',
         placeItens: 'center',   
         transition: '.4s',
         zIndex: 1000,
         // top: '50%',
         // left: '50%',
         // right: 'auto',
         // bottom: 'auto',
         // marginRight: '-50%',
         // transform: 'translate(-50%, -50%)',
         // borderRadius: '2rem',
      },
   }

   return <div className='container'>

      <button className="modal-btn" onClick={handleOpenModal}>
         Modal
      </button>
      <Modal   
         isOpen={modalIsOpen} 
         onRequestClose={handleCloseModal}
         style={customStyles}
      >
         <div className='ease-in duration-300'>

            <h2>Hello World!!!</h2>
            <button onClick={handleCloseModal}>Close</button>
            <div>I am a modal</div>
         </div>

      </Modal>
   </div>
}