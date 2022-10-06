import { useState } from 'react'
import { ChangeLanguageBtn } from '../ChangeLanguageBtn'
import { NavbarMenu } from './NavbarMenu'


export function Header() {
   
   // ========= CHANGE BACKGROUND HEADER =========
   const [handleHeader, setHandleHeader] = useState('')
   window.addEventListener('scroll', () => {
      scrollY >= 50
         ? setHandleHeader('scroll-header')
         : setHandleHeader('')
   })


   // ========= CHANGE THEME LIGHT/DARK =========
   const [handleSunIcon, setHandleSunIcon] = useState('')
   const [handleMoonIcon, setHandleMoonIcon] = useState('')
   const lightTheme = 'light-theme'
   const selectedTheme = localStorage.getItem('selected-theme')
   const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'

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

            <NavbarMenu />
 
            <div className="language-theme">
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




