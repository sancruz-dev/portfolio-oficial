import { useState } from "react"
import { FormContentStep } from "./Steps/FormContentStep"
import { FormSuccessStep } from "./Steps/FormSuccessStep"

export function ContactForm() {
   const [formSent, setFormSent] = useState(false)

   function handleRestartForm() {
      setFormSent(false)
   }

   return <div className="contact__content">
      {formSent ? (
         <FormSuccessStep
            onFormRestartedRequested={handleRestartForm} />
      ) : (
         <FormContentStep
            onFormRestartedRequested={handleRestartForm}
            onFormSent={() => setFormSent(true)}
         />
      )}
   </div>
}
