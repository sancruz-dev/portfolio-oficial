import { ContactForm } from "./FormContact";

export function Contact() {
   return <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
         <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
               <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon"></i>
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">user@email.com</span>

                  <a href="mailto:examplemail@correo.com" target="_blank" className="contact__button">
                     Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
               </div>

               <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon"></i>
                  <h3 className="contact__card-title">WhatsApp</h3>
                  <span className="contact__card-data">999-888-777</span>

                  <a href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                     target="_blank" className="contact__button">
                     Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
               </div>

               <div className="contact__card">
                  <i className="bx bxl-messenger contact__card-icon"></i>
                  <h3 className="contact__card-title">Messenger</h3>
                  <span className="contact__card-data">user.fb123</span>

                  <a href="https://m.me/bedimcode" target="_blank" className="contact__button">
                     Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
               </div>
            </div>
         </div>

         <ContactForm />
      </div>
   </section>
}