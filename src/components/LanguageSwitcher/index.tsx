import { useTranslation } from 'react-i18next'
import br from './assets/br.png'
import en from './assets/en.png'
import fr from './assets/fr.png'
import './styles.css'

const LanguageOptions = [
   {
      name: "Português",
      value: "pt",
      flag: br
   },
   {
      name: "English",
      value: "en",
      flag: en
   },
   {
      name: "Français",
      value: "fr",
      flag: fr
   }
]

export const LanguageSwitcher = () => {
   const { t, i18n } = useTranslation();


   return <>
      <div className='language-switcher'>
         <span>{t('selectYourLanguage')}</span>

         {LanguageOptions.map(LanguageOption => (
            <button
               key={LanguageOption.name}
               onClick={() => {
                  i18n.changeLanguage(LanguageOption.value)
               }}
            >
               <div className='container-img-span'>
                  <img src={LanguageOption.flag} alt={LanguageOption.name} />
                  <span
                     style={{
                        fontWeight: 
                           i18n.language === LanguageOption.value ? 
                           "bold" : "normal",
                        textDecoration: 
                           i18n.language === LanguageOption.value ? 
                           "underline" : "none",
                     }}
                  >{LanguageOption.name}</span>
               </div>
            </button>
         ))}
      </div>
   </>

}