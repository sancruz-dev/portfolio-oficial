import { Link } from 'react-scroll'
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
                  <span className="about__subtitle">+ de 10 Projetos</span>
               </div>

               <div className="about__box">
                  <i className='bx bx-support about__icon'></i>
                  <h3 className="about__title">Suporte</h3>
                  <span className="about__subtitle">Online 12hrs por dia</span>
               </div>
            </div>

            <p className="about__description">
               Olá ✌️😉 me chamo San, tenho 18 anos de idade, e faço parte desse imenso mundo dos apaixonados por tecnologia ou, em outros termos, <b><i>pintores de pixel</i></b>  . <br /> <br /> Sou técnico em Desenvolvimento de Sistemas, e hoje crio projetos profissionais no ramo do desenvolvimento <b>Web</b> e <b>Mobile</b>.
            </p>

            <Link to="contact" className="button">Contate me</Link>
         </div>
      </div>
   </section>
}