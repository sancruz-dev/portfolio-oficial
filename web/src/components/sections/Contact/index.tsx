import { ContactForm } from "./FormContact";

export function Contact() {
   return <section className="contact section" id="contact">
      <span className="section__subtitle">Entrar em contato</span>
      <h2 className="section__title">Me Chame</h2>

      <div className="contact__container container grid">
         <div className="contact__content">
            <h3 className="contact__title">Fale comigo</h3>

            <div className="contact__info">
               <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon"></i>
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">sancruz.dev@gmail.com</span>

                  <a href="mailto:examplemail@correo.com" target="_blank" className="contact__button">
                     Mandar mensagem <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
               </div>

               <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon"></i>
                  <h3 className="contact__card-title">WhatsApp</h3>
                  <span className="contact__card-data">(11) 97287-4030</span>

                  <a href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                     target="_blank" className="contact__button">
                     Entrar em contato <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
               </div>

               <div className="contact__card">
                  <i className="bx bxl-messenger contact__card-icon"></i>
                  <h3 className="contact__card-title">Messenger</h3>
                  <span className="contact__card-data">Sanmir Pereira</span>

                  <a href="https://m.me/sanmir.pereira" target="_blank" className="contact__button">
                  Mandar mensagem <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
               </div>
            </div>
         </div>

         <ContactForm />
      </div>
   </section>
}