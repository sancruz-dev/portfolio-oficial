import { useTranslation } from "react-i18next"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeStepProps {
   onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
   const { t } = useTranslation()

   return <>
      <header>
         <span className="text-xl leading-6">
            {t('title_typeStep_feedback')}
         </span>

         <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
         {Object.entries(feedbackTypes).map(([key, value]) => {  
            return (
               <button
                  key={key}
                  className="widgetForm__feedbackTypeBtn"
                  onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
                  type="button">
                  {/* [A] flex-1 */}

                  <img src={value.image.source} alt={value.image.alt} />
                  <span>{value.title}</span>
               </button>
            )
         })} 
         {/* [B] Object Entries */}
      </div>
   </>
}

/* ... ANOTAÇÕES

• [A] flex-1
   Para que o elemento se adapte à largura do seu elemento pai (container), ou seja, quando o pai for maior que o padrão então o elemento se estica ultrapassando até mesmo sua largura definida.

....................................

• [B] Object Entries
   Object.entries{feedbackTypes} => 
   [ 
      [BUG, {...}],
      [IDEA, {...}],
      [THOUGHT, {...}],
   ]
*/