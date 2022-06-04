import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import br from '../../assets/img/en.png'
import en from '../../assets/img/br.png'

export function ChangeLanguageBtn() {
   const { i18n } = useTranslation();
   const [handleEngIcon, setHandleEngIcon] = useState('')
   const [handleBrIcon, setHandleBrIcon] = useState('')
   const LanguageOptions = [
      {
         name: "Português",
         value: "pt",
         flag: en
      },
      {
         name: "Inglês",
         value: "en",
         flag: br
      },
   ]

   function changeToEng() {
      setHandleBrIcon('down')
      setHandleEngIcon('up')
   }

   function changeToBr() {
      setHandleBrIcon('up')
      setHandleEngIcon('')
   }

   return <>
      {LanguageOptions.map(LanguageOption => (
         <button
            className='icons-language'
            key={LanguageOption.name}
            onClick={() => {
               i18n.changeLanguage(LanguageOption.value)
               LanguageOption.value === 'pt' ? changeToBr() : changeToEng() }}
         >
            <img
               src={LanguageOption.flag}
               alt={LanguageOption.name}
               title={
                  LanguageOption.value === 'pt' ? 'Change language to PORTUGUESE' : 'Mudar idioma para INGLÊS'
               }
               className={LanguageOption.value === 'pt' 
                  ? `icon-lang br ${handleBrIcon}` : `icon-lang eua ${handleEngIcon}`}
            />
         </button>
      ))}
   </>

}