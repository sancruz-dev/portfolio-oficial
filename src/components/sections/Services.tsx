import { useState } from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function Services() {
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

   return <section className="services section">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
         <div className="services__card">
            <h3 className="services__title">Product <br /> Designer</h3>

            <span className="services__button" onClick={handleOpenModal}>
               See more <i className='bx bx-right-arrow-alt services__icon'></i>
            </span>

            <Modal
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
         </div>

         <div className="services__card">
            <h3 className="services__title">UI/UX <br /> Designer</h3>

            <span className="services__button" onClick={handleOpenModal}>
               See more <i className='bx bx-right-arrow-alt services__icon'></i>
            </span>

            <Modal
               isOpen={modalIsOpen}
               onRequestClose={handleCloseModal}
               style={customStyles}
            >
               <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

               <h3 className="services__modal-title">UI/UX Designer</h3>
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
         </div>

         <div className="services__card">
            <h3 className="services__title">Visual <br /> Designer</h3>

            <span className="services__button" onClick={handleOpenModal}>
               See more <i className='bx bx-right-arrow-alt services__icon'></i>
            </span>

            <Modal
               isOpen={modalIsOpen}
               onRequestClose={handleCloseModal}
               style={customStyles}
            >
               <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

               <h3 className="services__modal-title">Visual Designer</h3>
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
         </div>
      </div>

      {/* <MyDialog /> */}
   </section >
}