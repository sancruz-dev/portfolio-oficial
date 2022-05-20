import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChangeLanguageBtn } from './ChangeLanguageBtn'


export function Header() {
   const [handleHeader, setHandleHeader] = useState('')
   const [handleSunIcon, setHandleSunIcon] = useState('')
   const [handleMoonIcon, setHandleMoonIcon] = useState('')

   // ========= CHANGE BACKGROUND HEADER =========
   window.addEventListener('scroll', () => {
      scrollY >= 50
         ? setHandleHeader('scroll-header')
         : setHandleHeader('')
   })


   // ========= CHANGE THEME LIGHT/DARK =========

   const lightTheme = 'light-theme'
   const selectedTheme = localStorage.getItem('selected-theme')
   const getCurrentTheme = () =>
      document.body.classList.contains(lightTheme) ? 'dark' : 'light'

   if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
   }

   function darkActive() {
      document.body.classList.toggle(lightTheme)
      localStorage.setItem('selected-theme', getCurrentTheme())
      setHandleSunIcon('active')
      setHandleMoonIcon('disable')
   }

   function lightActive() {
      document.body.classList.toggle(lightTheme)
      localStorage.setItem('selected-theme', getCurrentTheme())
      setHandleSunIcon('disable')
      setHandleMoonIcon('active')
   }

   return <>
      <header className={`header ${handleHeader}`} id="header">
         <nav className="nav container">
            <a href="#" className="nav__logo">SanCruz</a>

            <div className="nav__menu">
               <ul className="nav__list">
                  <li className="nav__item">
                     <a href="#home" className="nav__link active-link">
                        <div className="tab-item-inner">
                           <i className='bx bx-home-alt'></i>
                        </div>
                     </a>
                  </li>

                  <li className="nav__item">
                     <a href="#about" className="nav__link">
                        <div className="tab-item-inner">
                           <i className='bx bx-user'></i>
                        </div>
                     </a>
                  </li>

                  <li className="nav__item">
                     <a href="#skills" className="nav__link">
                        <div className="tab-item-inner">
                           <i className='bx bx-book'></i>
                        </div>
                     </a>
                  </li>

                  <li className="nav__item">
                     <a href="#work" className="nav__link">
                        <div className="tab-item-inner">
                           <i className='bx bx-briefcase-alt-2'></i>
                        </div>
                     </a>
                  </li>

                  <li className="nav__item">
                     <a href="#contact" className="nav__link">
                        <div className="tab-item-inner">
                           <i className='bx bx-message-square-detail'></i>
                        </div>
                     </a>
                  </li>
               </ul>
            </div>
 
            <div className="language-theme">
               {/* <!-- Theme change button --> */}
               <div className='theme-icons'>
                  <i className={`bx bx-moon change-theme ${handleMoonIcon}`}
                     onClick={darkActive}
                     id='theme-button'>
                  </i>
                  <i className={`bx bx-sun change-theme ${handleSunIcon}`}
                     onClick={lightActive}
                     id='theme-button'>
                  </i>
               </div>

               <ChangeLanguageBtn/>
            </div>
         </nav>
      </header>
   </>
}




