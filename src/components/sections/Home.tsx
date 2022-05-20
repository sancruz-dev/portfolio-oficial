import cv from '../../assets/pdf/Sanmir Cruz - CV.pdf'
import sanHome from '../../assets/img/san-home.png'
import { useTranslation } from 'react-i18next'

export function Home() {
   const { t } = useTranslation();
   
   return <section className="home section" id="home">
      <div className="home__container container grid">
         <div className="home__data">
            <span className="home__greeting">
               {t("hello")}
            </span>
            <h1 className="home__name">Sanmir Cruz</h1>
            <h3 className="home__education">
               Systems developer
            </h3>

            <div className="home__buttons">
               <a download="" href={cv} className="button button--ghost">
                  Baixar CV
               </a>
               <a href="#about" className="button">Sobre mim</a>
            </div>
         </div>

         <div className="home__handle">
            <img src={sanHome} alt="" className="home__img" />
         </div>

         <div className="home__social">
            <a href="https://www.linkedin.com/" target="_blank" className="home__social-link">
               <i className='bx bxl-linkedin-square'></i>
            </a>
            <a href="https://www.github.com/" target="_blank" className="home__social-link">
               <i className='bx bxl-github'></i>
            </a>
            <a href="https://www.dribbble.com/" target="_blank" className="home__social-link">
               <i className='bx bxl-dribbble'></i>
            </a>
         </div>

         <a href="#about" className="home__scroll">
            <i className='bx bx-mouse home__scroll-icon'></i>
            <span className="home__scroll-name">Scroll Down</span>
         </a>

      </div>
   </section>
}