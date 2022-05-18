import euaIcon from '../assets/img/eua-icon.png'
import brasilIcon from '../assets/img/brasil-icon.png'

export function Header() {
   return <>
      <header className="header" id="header">
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
               <i className='bx bx-moon change-theme' id='theme-button'></i>

               <div className="icons-language">
                  {/* <!-- Language change buttons --> */}
                  <img className="icon-lang eua visible" src={euaIcon} alt="ícone dos Estdados Unidos da América" title="Alterar idioma para en-us" />
                  <img className="icon-lang br" src={brasilIcon} alt="Ícone do Brasil" title="Alterar idioma para pt-br" />


               </div>
            </div>


         </nav>

      </header>
   </>
}