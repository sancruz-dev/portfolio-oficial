import sanAbout from '../../../assets/img/san-about.png'

export function About() {
   return <section className="about section" id="about">
      <span className="section__subtitle">Introdução</span>
      <h2 className="section__title">Sobre Mim</h2>

      <div className="about__container container grid">
         <img src={sanAbout} alt="" className="about__img" />

         <div className="about__data">
            <div className="about__info">
               <div className="about__box">
                  <i className='bx bx-award about__icon'></i>
                  <h3 className="about__title">Experiência</h3>
                  <span className="about__subtitle">4 anos programando</span>
               </div>

               <div className="about__box">
                  <i className='bx bx-briefcase-alt about__icon'></i>
                  <h3 className="about__title">Completado</h3>
                  <span className="about__subtitle">10 + Projetos</span>
               </div>

               <div className="about__box">
                  <i className='bx bx-support about__icon'></i>
                  <h3 className="about__title">Suporte</h3>
                  <span className="about__subtitle">Online 24/7</span>
               </div>
            </div>

            <p className="about__description">
               Desenvolvedor frontend: crio aplicações web com interface de usuário UI/UX,
               bom conhecimento em e-commerce além de ser apaixonado por tecnologia
               e estudante eterno em programação.
            </p>

            <a href="#contact" className="button">Contate me</a>
         </div>
      </div>
   </section>
}