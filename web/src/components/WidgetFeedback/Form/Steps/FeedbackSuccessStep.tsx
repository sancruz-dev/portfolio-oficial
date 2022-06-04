import { CloseButton } from "../../CloseButton";
import successImageUrl from '../../../../assets/img/WidgetFeedback_imgs/success.svg'

interface FeedbackSuccessStepProps {
   onfeedbackRestartedRequested: () => void
}

export function FeedbackSuccessStep(props: FeedbackSuccessStepProps) {
   return <>
      <header>
         <CloseButton/>
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
         <img src={successImageUrl} alt="Ícone de sucesso" />
         <span className="text=xl mt-2"> Agradecemos o feedback!</span>
         
         <button
            type="button"
            onClick={props.onfeedbackRestartedRequested}
            className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors "
         >
            Quero enviar outro feedback</button>
      </div>
   </>
}