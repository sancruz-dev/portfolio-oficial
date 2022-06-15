import { useTranslation } from "react-i18next";
import successImageUrl 
   from '../../../../../assets/img/WidgetFeedback_imgs/success.svg'

interface FormSuccessStepProps {
   onFormRestartedRequested: () => void
}

export function FormSuccessStep(props: FormSuccessStepProps) {
   const { t } = useTranslation()
   return <>
      
      <h3 className="contact__title">
         {t('title_success_form')}
      </h3>
      <div className="flex flex-col items-center">
         <img src={successImageUrl} alt="Ícone de sucesso" />
         <p className="text=xl mt-8 text-center">
            {t('tx1_p1_success_form')}
            <br />
            {t('tx2_p1_success_form')}
         </p>

         <p className="text=xl mt-16 text-center">
            {t('tx1_p2_success_form')}
            <br />
            {t('tx2_p2_success_form')}
         </p>
         
         <button
            type="button"
            onClick={props.onFormRestartedRequested}
            className="button mt-8"
         >
            {t('btnSuccess_form')}</button>
      </div>
   </>
}