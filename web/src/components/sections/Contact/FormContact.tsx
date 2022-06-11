export function ContactForm() {
   return <>
      <div className="contact__content">
         <h4 className="contact__title">Este formulário está em <b>manutenção!</b> <br/> Caso queira entrar em contato, acesse outros meios como <br /> WhatsApp, e-mail ou Mensseger...</h4>

         <form action="" className="contact__form">
            <div className="contact__form-div">
               <label htmlFor="" className="contact__form-tag">
                  Names
               </label>
               <input 
                  type="text" 
                  placeholder="Insira seu nome" 
                  className="contact__form-input" 
                  disabled
               />
            </div>

            <div className="contact__form-div">
               <label htmlFor="" className="contact__form-tag">
                  Mail
               </label>
               <input 
                  type="email" 
                  placeholder="Insira seu email" 
                  className="contact__form-input" 
                  disabled
                  />
            </div>

            <div className="contact__form-div contact__form-area">
               <label htmlFor="" className="contact__form-tag">
                  Project
               </label>
               <textarea 
                  name="" 
                  id="" 
                  cols={30} rows={1} 
                  placeholder="Escreva seu projeto"
                  className="contact__form-input"
                  disabled
               ></textarea>
            </div>

            <button className="button" disabled>Send Message</button>
         </form>
      </div>
   </>
}