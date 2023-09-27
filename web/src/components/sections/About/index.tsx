import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll'
import sanAbout from '../../../assets/img/san-about.png'

export function About() {
   const { t } = useTranslation(),
         MyDay = 26,
         MyMonth = 9,
         MyYear = 2003;

   let currentDay = new Date().getDate(),
      currentMonth = new Date().getMonth() + 1,
      currentYear = new Date().getFullYear(),
      age = (currentYear - MyYear);

   currentMonth < MyMonth ? age-- : 0
   currentMonth == MyMonth && currentDay < MyDay ? age-- : 0

   return <section className="about section" id="about">
      <span className="section__subtitle">{t('subtt_sec_SobreMim')}</span>
      <h2 className="section__title">{t('title_sec_SobreMim')}</h2>

      <div className="about__container container grid">
         <img src={sanAbout} alt="Imagem ilustrativo do Sanmir da seção: 'Sobre Mim'" title='Sanmir Cruz' className="about__img" />

         <div className="about__data">
            <div className="about__info">
               <div className="about__box">
                  <i className='bx bx-award about__icon'></i>
                  <h3 className="about__title">{t('title_box1_SobreMim')}</h3>
                  <span className="about__subtitle">{t('subtt_box1_SobreMim')}</span>
               </div>

               <div className="about__box">
                  <i className='bx bx-briefcase-alt about__icon'></i>
                  <h3 className="about__title">{t('title_box2_SobreMim')}</h3>
                  <span className="about__subtitle">{t('subtt_box2_SobreMim')}</span>
               </div>

               <div className="about__box">
                  <i className='bx bx-support about__icon'></i>
                  <h3 className="about__title">{t('title_box3_SobreMim')}</h3>
                  <span className="about__subtitle">{t('subtt_box3_SobreMim')}</span>
               </div>
            </div>

            <p className="about__description">
               {t('desc_p1-1_SobreMim')} 
               {age}
               {t('desc_p1-2_SobreMim')} 
               <b><i>{t('desc_p1__bold_SobreMim')}</i></b>. 
               <br /> <br /> 
               {t('desc_p2_SobreMim')} <b>Web</b> e <b>Mobile</b>.
            </p>

            <Link to="contact" className="button">{t('btn_SobreMim')}</Link>
         </div>
      </div>
   </section>
}