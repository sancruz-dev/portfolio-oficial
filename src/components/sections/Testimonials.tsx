import testimonialOne from '../../assets/img/testimonial1.png'
import testimonialTwo from '../../assets/img/testimonial2.png'
import testimonialThree from '../../assets/img/testimonial3.png'

export function Testimonials() {
   return <section className="testimonial section">
      <span className="section__subtitle">My clients say</span>
      <h2 className="section__title">Testimonial</h2>

      <div className="testimonial__container container swiper">
         <div className="swiper-wrapper">
            <div className="testimonial__card swiper-slide">
               <img src={testimonialOne} alt="Testemunha 1" className="testimonial__img" />
               <h3 className="testimonial__name">Jhon Doe</h3>
               <p className="testimonial__description">
                  A really good job, all aspects of the project were
                  followed step by step and with good results.
               </p>
            </div>

            <div className="testimonial__card swiper-slide">
               <img src={testimonialTwo} alt="Testemunha 2" className="testimonial__img" />
               <h3 className="testimonial__name">Paula Vusy</h3>
               <p className="testimonial__description">
                  A really good job, all aspects of the project were
                  followed step by step and with good results.
               </p>
            </div>

            <div className="testimonial__card swiper-slide">
               <img src={testimonialThree} alt="Testemunha 3" className="testimonial__img" />
               <h3 className="testimonial__name">Sara Cill</h3>
               <p className="testimonial__description">
                  A really good job, all aspects of the project were
                  followed step by step and with good results.
               </p>
            </div>
         </div>

         <div className="swiper-pagination"></div>
      </div>
   </section>
}