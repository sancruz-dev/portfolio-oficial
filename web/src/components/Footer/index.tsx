export function Footer() {
   return <>
      <footer className="footer">
         <div className="footer__container container">
            <h1 className="footer__title">SanCruz</h1>

            <ul className="footer__list">
               <li>
                  <a href="#about" className="footer__link">About</a>
               </li>
               <li>
                  <a href="#work" className="footer__link">Projects</a>
               </li>
               <li>
                  <a href="#testimonial" className="footer__link">Testimonial</a>
               </li>
            </ul>

            <ul className="footer__social">
               <a 
                  href="https://www.facebook.com/sanmir.pereira" 
                  target="__blank"
                  className="footer__social-link"
               >
                  <i className="bx bxl-facebook"></i>
               </a>
               <a 
                  href="https://www.instagram.com/sancruz_dev" 
                  target="__blank"
                  className="footer__social-link"
               >
                  <i className="bx bxl-instagram"></i>
               </a>
               <a 
                  href="https://twitter.com/SanCruz_Dev" 
                  target="__blank"
                  className="footer__social-link"
               >
                  <i className="bx bxl-twitter"></i>
               </a>
            </ul>

            <span className="footer__copy">
               &#169; Sancruz-dev. Todos os direitos reservados
            </span>
         </div>
      </footer>
   </>
}