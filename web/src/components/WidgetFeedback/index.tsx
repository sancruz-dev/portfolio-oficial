import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./Form";
import { useState } from "react";

export function WidgetFeedback() {
   return (
      <Popover 
         className="popover">
         <Popover.Panel>
            <WidgetForm />
         </Popover.Panel>

      
         <Popover.Button 
            className="popover__btn group"
         >
                  
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