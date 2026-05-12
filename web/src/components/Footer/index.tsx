import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export function Footer() {
   const { t } = useTranslation();

   return <>
      <footer className="footer">
         <div className="footer__container container">
            <h1 className="footer__title">SanCruz</h1>

            <ul className="footer__list">
               <li>
                  <Link to="about" className="footer__link">
                     {t('linkSobre_footer')}
                  </Link>
               </li>
               <li>
                  <Link to="work" className="footer__link">
                     {t('linkProjetos_footer')}
                  </Link>
               </li>
               <li>
                  <Link to="skills" className="footer__link">
                     {t('linkHabilidades_footer')}
                  </Link>
               </li>
            </ul>

            <ul className="footer__social">
               <a href="https://www.linkedin.com/in/sanmir-cruz/" 
                  target="_blank" 
                  className="footer__social-link"
                  title='Acesse meu LinkedIn'>
                  <i className='bx bxl-linkedin-square'></i>
               </a>
            </ul>

            <span className="footer__copy">
               &#169; Sancruz-dev. {t('copyRight_footer')}
            </span>
         </div>
      </footer>
   </>
}