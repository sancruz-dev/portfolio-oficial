import cv from '../../../assets/pdf/Sanmir Cruz - CV.pdf'
import sanHome from '../../../assets/img/san-home.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll';

export function Home() {
   const { t } = useTranslation();
   
   return <section className="home section" id="home">
      <div className="home__container container grid">
         <div className="home__data">
            <span className="home__greeting">
               {t('hello')}
            </span>
            <h1 className="home__name">Sanmir Cruz</h1>
            <h3 className="home__education">
               {t('systemsDev')}
            </h3>

            <div className="home__buttons">
               <a download="" href={cv} className="button button--ghost">
                  {t('baixarCV_btn')}
               </a>
               <Link to="about" className="button">{t("sobreMim_btn")}</Link>
            </div>
         </div>

         <div className="home__handle">
            <img src={sanHome} alt="" className="home__img" />
         </div>

         <div className="home__social">
            <a href="https://www.linkedin.com/" 
               target="_blank" 
               className="home__social-link" 
               title='ícone do LinkedIn'>
               <i className='bx bxl-linkedin-square'></i>
            </a>
            <a 
               href="https://www.github.com/sancruz-dev" 
               target="_blank" 
               className="home__social-link" 
               title='ícone do Github'>
               <i className='bx bxl-github'></i>
            </a>
            <a href="https://codepen.io/sancruz-dev" 
               target="_blank" 
               className="home__social-link" 
               title='ícone do codepen'>
               <i className='bx bxl-codepen'></i>
            </a>
         </div>

         <Link to="about" className="home__scroll">
            <i className='bx bx-mouse home__scroll-icon'></i>
            <span className="home__scroll-name">{t('scrollDown')}</span>
         </Link>

      </div>
   </section>
}