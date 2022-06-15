import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function Services() {
   const [modalIsOpen1, setModalIsOpen1] = useState(false)
   const [modalIsOpen2, setModalIsOpen2] = useState(false)
   const [modalIsOpen3, setModalIsOpen3] = useState(false)

   function handleOpenModal1() {
      setModalIsOpen1(true)
   }

   function handleOpenModal2() {
      setModalIsOpen2(true)
   }

   function handleOpenModal3() {
      setModalIsOpen3(true)
   }

   function handleCloseModal() {
      setModalIsOpen1(false)
      setModalIsOpen2(false)
      setModalIsOpen3(false)
   }

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
      }
   }

   const { t } = useTranslation();

   return <section className="services section" id="services">
      <span className="section__subtitle">{t('subtt_sec_services')}</span>
      <h2 className="section__title">{t('title_sec_services')}</h2>

      <div className="services__container container grid">
         <div className="services__card">
            <h3 className="services__title">
               {t('serviceCardTitle_line1_services')}
               <br />
               {t('serviceCardTitle_line2_services')}
            </h3>

            <span className="services__button" onClick={handleOpenModal1}>
               {t('serviceCardBtn_services')} <i className='bx bx-right-arrow-alt services__icon'></i>
            </span>

            <Modal
               isOpen={modalIsOpen1}
               onRequestClose={handleCloseModal}
               style={customStyles}
            >
               <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

               <h3 className="services__modal-title">{t('title_card1_services')}</h3>
               <p className="services__modal-description">
                  {t('desc_modal1_services')}
               </p>

               <ul className="services__modal-list">
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item1_modal1_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item2_modal1_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item3_modal1_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item4_modal1_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item5_modal1_services')}
                     </p>
                  </li>
               </ul>

            </Modal>
         </div>

         <div className="services__card">
            <h3 className="services__title">
               UX/UI
               <br />
               Design
            </h3>
            <span className="services__button" onClick={handleOpenModal2}>
               {t('serviceCardBtn_services')} <i className='bx bx-right-arrow-alt services__icon'></i>
            </span>

            <Modal
               isOpen={modalIsOpen2}
               onRequestClose={handleCloseModal}
               style={customStyles}
            >
               <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

               <h3 className="services__modal-title">UX/UI Designer</h3>
               <p className="services__modal-description">
                  {t('desc_modal2_services')}
               </p>

               <ul className="services__modal-list">
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item1_modal2_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item2_modal2_services')}
                        
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item3_modal2_services')}
                        
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item4_modal2_services')}
                        
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item5_modal2_services')}
                        
                     </p>
                  </li>
               </ul>
            </Modal>
         </div>

         <div className="services__card">
            <h3 className="services__title">
               Marketing
               <br />
               Digital
            </h3>

            <span className="services__button" onClick={handleOpenModal3}>
               {t('serviceCardBtn_services')} <i className='bx bx-right-arrow-alt services__icon'></i>
            </span>

            <Modal
               isOpen={modalIsOpen3}
               onRequestClose={handleCloseModal}
               style={customStyles}
            >
               <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

               <h3 className="services__modal-title">Marketing Digital</h3>
               <p className="services__modal-description">
                  {t('desc_modal3_services')}
               </p>

               <ul className="services__modal-list">
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item1_modal3_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item2_modal3_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item3_modal3_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item4_modal3_services')}
                     </p>
                  </li>
                  <li className="services__modal-item">
                     <i className="bx bx-check services__modal-icon"></i>
                     <p className="services__modal-info">
                        {t('item5_modal3_services')}
                     </p>
                  </li>
               </ul>
            </Modal>
         </div>
      </div>

   </section >
}