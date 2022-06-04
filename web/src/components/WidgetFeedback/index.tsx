import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./Form";

export function WidgetFeedback() {
   return (
      <Popover 
         className="fixed bottom-24 right-5 z[100] 
         flex flex-col items-end text-white
         md:bottom-8 md:right-8">
         <Popover.Panel>
            <WidgetForm />
         </Popover.Panel>

         <Popover.Button 
            className="bg-brand-500 rounded-full p-2
               text-white flex items-center group 
               md:opacity-100 md:p-3.5
               opacity-60 hover:opacity-100 transition duration-500">
            <ChatTeardropDots className="w-6 h-6" />

            <span 
               className="max-w-0 overflow-hidden 
                  group-hover:max-w-xs transition-all 
                  duration-500 ease-linear">
               <span className="pl-2"></span>
               Feedback
            </span>
         </Popover.Button>
      </Popover>
   )
}