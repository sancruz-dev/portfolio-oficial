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
               <a 
                  href="https://www.facebook.com/sanmir.pereira" 
                  target="__blank"
                  className="footer__social-link"
                  title="Me siga no Facebook"
               >
                  <i className="bx bxl-facebook"></i>
               </a>
               <a 
                  href="https://www.instagram.com/sancruz_dev" 
                  target="__blank"
                  className="footer__social-link"
                  title="Me siga no Instagram"
               >
                  <i className="bx bxl-instagram"></i>
               </a>
               <a 
                  href="https://twitter.com/SanCruz_Dev" 
                  target="__blank"
                  className="footer__social-link"
                  title="Me siga no Twitter"
               >
                  <i className="bx bxl-twitter"></i>
               </a>
            </ul>

            <span className="footer__copy">
               &#169; Sancruz-dev. {t('copyRight_footer')}
            </span>
         </div>
      </footer>
   </>
}