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

         <div className="contact__content">
            <h3 className="contact__title">Write me your project</h3>

            <form action="" className="contact__form">
               <div className="contact__form-div">
                  <label htmlFor="" className="contact__form-tag">Names</label>
                  <input type="text" placeholder="Insira seu nome" className="contact__form-input" />
               </div>

               <div className="contact__form-div">
                  <label htmlFor="" className="contact__form-tag">Mail</label>
                  <input type="email" placeholder="Insira seu email" className="contact__form-input" />
               </div>

               <div className="contact__form-div contact__form-area">
                  <label htmlFor="" className="contact__form-tag">Project</label>
                  <textarea name="" id="" cols={30} rows={1} placeholder="Escreva seu projeto"
                     className="contact__form-input"></textarea>

               </div>

               <button className="button">Send Message</button>
            </form>
         </div>
      </div>
   </section>
}