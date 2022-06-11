import { useState } from "react";
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

   return <>

      {/* ------------- DIVISÃO ---------------- */}
      <section className="services section" id="services">
         <span className="section__subtitle">Meus Serviços</span>
         <h2 className="section__title">O que Ofereço</h2>

         <div className="services__container container grid">
            <div className="services__card">
               <h3 className="services__title">Desenvolvimento <br />Web</h3>

               <span className="services__button" onClick={handleOpenModal1}>
                  Ver mais <i className='bx bx-right-arrow-alt services__icon'></i>
               </span>

               <Modal
                  isOpen={modalIsOpen1}
                  onRequestClose={handleCloseModal}
                  style={customStyles}
               >
                  <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

                  <h3 className="services__modal-title">Product Designer</h3>
                  <p className="services__modal-description">
                     Serviço com mais de 3 anos de experiência. Ofereço um trabalho de qualidade para clientes e empresas.
                  </p>

                  <ul className="services__modal-list">
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           React Js como ferramenta principal, utilizada pelas maiores empresas do mundo, como Facebook e Tesla;
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Integração e entrega contínua das mais variadas formas;
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Performance web: obtenha a melhor qualidade e rapidez com grades conteúdos;
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Tenho experiência em grandes plataformas de hospedagem e domínio como a Hostinger e HostiGator (Brasil);
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Adaptação e Responsividade: aplicação compatível com qualquer tipo de tela e dispositivo, seja mobile, desktop ou tablet.
                        </p>
                     </li>
                  </ul>

               </Modal>
            </div>

            <div className="services__card">
               <h3 className="services__title">UX/UI <br /> Designer</h3>

               <span className="services__button" onClick={handleOpenModal2}>
                  Ver mais <i className='bx bx-right-arrow-alt services__icon'></i>
               </span>

               <Modal
                  isOpen={modalIsOpen2}
                  onRequestClose={handleCloseModal}
                  style={customStyles}
               >
                  <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

                  <h3 className="services__modal-title">UX/UI Designer</h3>
                  <p className="services__modal-description">
                     Serviço com uma bela interface, moderna e funcional é a chave para manter o usuário dentro da aplicação, e até mesmo voltar mais vezes
                  </p>

                  <ul className="services__modal-list">
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           A melhor experiência e interface do usuário possível, seguindo todos os padrões solicitados;
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Criação de ícones, logotipos, entre outros elementos de design.
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Acessibilidade ao projeto, tanto na parte visual ou funcional.
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Criação de protótipo.
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Posição de marca;
                        </p>
                     </li>
                  </ul>
               </Modal>
            </div>

            <div className="services__card">
               <h3 className="services__title">Marketing <br /> Digital</h3>

               <span className="services__button" onClick={handleOpenModal3}>
                  Ver mais <i className='bx bx-right-arrow-alt services__icon'></i>
               </span>

               <Modal
                  isOpen={modalIsOpen3}
                  onRequestClose={handleCloseModal}
                  style={customStyles}
               >
                  <i className='bx bx-x services__modal-close' onClick={handleCloseModal}></i>

                  <h3 className="services__modal-title">Marketing Digital</h3>
                  <p className="services__modal-description">
                     Com o de alavancar o projeto, deixando-o escalável, ofereço um produto final que envolve estratégias de marketing digital.
                  </p>

                  <ul className="services__modal-list">
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Dirigibilidade: segmentações certeiras de público-alvo específico;
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Rastreamento: audiência medida, engajamento e retorno de ações de usuários, de forma simples e automatizada;
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Acessibilidade: disponibilidade de conteúdos para o consumo de usuários pelo tempo que quiser;

                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Maleabilidade: qualquer Landing Page pode ser alterada, reavaliada, recomeçada e até pagada quando desejar.
                        </p>
                     </li>
                     <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                           Interatividade: criação da comunicação entre empresa e usuário, por meio de comentários, chats, feedbacks, entre outros.
                        </p>
                     </li>
                  </ul>
               </Modal>
            </div>
         </div>

         {/* <MyDialog /> */}
      </section >
   </>
}