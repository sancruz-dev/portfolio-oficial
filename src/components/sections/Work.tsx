import workOne from '../../assets/img/work1.jpg'
import workTwo from '../../assets/img/work2.jpg'
import workThree from '../../assets/img/work3.jpg'
import workFour from '../../assets/img/work4.jpg'
import workFive from '../../assets/img/work5.jpg'

export function Work() {
   return <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
         <span className="work__item active-work" data-filter='all'>All</span>
         <span className="work__item" data-filter='.web'>Web</span>
         <span className="work__item" data-filter='.movil'>Movil</span>
         <span className="work__item" data-filter='.design'>Design</span>
      </div>

      <div className="work__container container grid">
         <div className="work__card mix web">
            <img src={workOne} alt="" className="work__img" />

            <h3 className="work__title">Web design</h3>

            <a href="#" className="work__button">
               Demo <i className='bx bx-right-arrow-alt work__icon'></i>
            </a>
         </div>

         <div className="work__card mix movil">
            <img src={workTwo} alt="" className="work__img" />

            <h3 className="work__title">App movil</h3>

            <a href="#" className="work__button">
               Demo <i className='bx bx-right-arrow-alt work__icon'></i>
            </a>
         </div>

         <div className="work__card mix design">
            <img src={workThree} alt="" className="work__img" />

            <h3 className="work__title">Brand design</h3>

            <a href="#" className="work__button">
               Demo <i className='bx bx-right-arrow-alt work__icon'></i>
            </a>
         </div>

         <div className="work__card mix web">
            <img src={workFour} alt="" className="work__img" />

            <h3 className="work__title">Web design</h3>

            <a href="#" className="work__button">
               Demo <i className='bx bx-right-arrow-alt work__icon'></i>
            </a>
         </div>

         <div className="work__card mix movil">
            <img src={workFive} alt="" className="work__img" />

            <h3 className="work__title">App movil</h3>

            <a href="#" className="work__button">
               Demo <i className='bx bx-right-arrow-alt work__icon'></i>
            </a>
         </div>
      </div>
   </section>
}