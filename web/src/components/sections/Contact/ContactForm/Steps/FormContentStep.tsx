import { api } from "../../../../../libs/api";
import { FormEvent, useState } from "react";
import { Loading } from "../Loading";
import { useTranslation } from "react-i18next";

interface FormContentStepProps {
   onFormRestartedRequested: () => void,
   onFormSent: () => void
}

export function FormContentStep(props: FormContentStepProps) {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [comment, setComment] = useState('')
   const [isSendingForm, setIsSendingForm] = useState(false)


   async function handleSubmitForm(event: FormEvent) {
      event.preventDefault();

      setIsSendingForm(true);

      await api.post('/form', {
         name,
         email,
         comment,
      });

      setIsSendingForm(false);
      props.onFormSent();
   }

   const { t } = useTranslation()
   return <>
      <h3 className="contact__title">
         {t('title_form_p1_contact')}
         <br />
         {t('title_form_p2_contact')}
      </h3>
      <form onSubmit={handleSubmitForm} className="contact__form">
         <div className="contact__form-div">
            <label className="contact__form-tag">
               {t('name_input_contact')}
            </label>
            <input
               type="text"
               placeholder={t('name_placeholder_contact')}
               className="contact__form-input"
               onChange={event => setName(event.target.value)}
            />
         </div>

         <div className="contact__form-div">
            <label className="contact__form-tag">
               E-mail
            </label>
            <input
               type="email"
               placeholder={t('mail_placeholder_contact')}
               className="contact__form-input"
               onChange={event => setEmail(event.target.value)}
            />
         </div>

         <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag">
               {t('project_input_contact')}
            </label>
            <textarea
               cols={30} rows={1}
               placeholder={t('project_placeholder_contact')}
               className="contact__form-input"
               onChange={event => setComment(event.target.value)}
            ></textarea>
         </div>


         <footer className="flex gap-2 mt-2">
            <button
               type="submit"
               className="button cursor-pointer disabled:opacity-50 disabled:hover:bg-brand-500"
               disabled={
                  name.length < 2 || email.length < 8 ||
                  comment.length < 2 || comment.length >= 500 || isSendingForm}
            >
               {isSendingForm ? <Loading /> : t('btn_sendForm_contact')}
            </button>
         </footer>
      </form>
   </>

}