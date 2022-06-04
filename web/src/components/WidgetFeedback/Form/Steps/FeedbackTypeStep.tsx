import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeStepProps {
   onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
   return <>
      <header>
         <span className="text-xl leading-6">Deixe seu feedback</span>

         <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
         {Object.entries(feedbackTypes).map(([key, value]) => {  
            return (
               <button
                  key={key}
                  className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
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