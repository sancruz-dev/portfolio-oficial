import { useTranslation } from "react-i18next";

export function ContactForm() {
   const { t } = useTranslation();

   return <>
      <div className="contact__content">
         <h4 className="contact__title">{t('title_content2_p1_contact')} <br/> {t('title_content2_p2_contact')} <br /> {t('title_content2_p3_contact')}</h4>

         <form action="" className="contact__form">
            <div className="contact__form-div">
               <label htmlFor="" className="contact__form-tag">
                  {t('name_input_contact')}
               </label>
               <input 
                  type="text" 
                  placeholder={t('name_placeholder_contact')} 
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
                  placeholder={t('mail_placeholder_contact')} 
                  className="contact__form-input" 
                  disabled
                  />
            </div>

            <div className="contact__form-div contact__form-area">
               <label htmlFor="" className="contact__form-tag">
                  {t('project_input_contact')}
               </label>
               <textarea 
                  name="" 
                  id="" 
                  cols={30} rows={1} 
                  placeholder={t('project_placeholder_contact')}
                  className="contact__form-input"
                  disabled
               ></textarea>
            </div>

            <button className="button" disabled>{t('btn_sendForm_contact')}</button>
         </form>
      </div>
   </>
}