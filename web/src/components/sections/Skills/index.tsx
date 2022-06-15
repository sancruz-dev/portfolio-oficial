import { useState } from "react"
import { useTranslation } from "react-i18next"

export function Skills() {
   const [frontendClass, setFrontendClass] = useState('skills__open')
   const [backendClass, setBackendClass] = useState('skills__close')
   const [designClass, setDesignClass] = useState('skills__close')
   const [outrasClass, setOutrasClass] = useState('skills__close')
   const { t } = useTranslation();

   function toggleSkillContent1() {
      if (frontendClass === 'skills__close') {
         setFrontendClass('skills__open')
         setBackendClass('skills__close')
         setDesignClass('skills__close')
         setOutrasClass('skills__close')
      } else {
         setFrontendClass('skills__close')
      }
   }
   
   function toggleSkillContent2() {
      if (backendClass === 'skills__close') {
         setBackendClass('skills__open')
         setFrontendClass('skills__close')
         setDesignClass('skills__close')
         setOutrasClass('skills__close')
      } else {
         setBackendClass('skills__close')
      }
   }
   
   function toggleSkillContent3() {
      if (designClass === 'skills__close') {
         setDesignClass('skills__open')
         setBackendClass('skills__close')
         setFrontendClass('skills__close')
         setOutrasClass('skills__close')
      } else {
         setDesignClass('skills__close')
      }
   }
   
   function toggleSkillContent4() {
      if (outrasClass === 'skills__close') {
         setOutrasClass('skills__open')
         setBackendClass('skills__close')
         setFrontendClass('skills__close')
         setDesignClass('skills__close')
      } else {
         setOutrasClass('skills__close')
      }
   }

   return <section className="skills section" id="skills">
      <span className="section__subtitle">{t('subtt_sec_skills')}</span>
      <h2 className="section__title">{t('title_sec_skills')}</h2>

      <div className="skills__container container grid">
         <div>
            {/* <!--==================== SKILLS 1 ====================--> */}
            <div className={`skills__content ${frontendClass}`}>
               <div className="skills__header" onClick={toggleSkillContent1}>
                  <i className='bx bx-code-alt skills__icon'></i>
                  <div>
                     <h3 className="skills__titles">Frontend</h3>
                     <span className="skills__subtitle">{t('subtt_skillsCard1_skills')}</span>
                  </div>

                  <i className="bx bx-chevron-down skills__arrow"></i>
               </div>

               <div className="skills__list grid">
                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">HTML/CSS</h3>
                        <span className="skills__number">{t('skillCard1_skillNumber1_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__html"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Sass/Compass</h3>
                        <span className="skills__number">{t('skillCard1_skillNumber2_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__sasscompass"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__number">{t('skillCard1_skillNumber3_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__js"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">React Js</h3>
                        <span className="skills__number">{t('skillCard1_skillNumber4_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__react"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">React Native</h3>
                        <span className="skills__number">{t('skillCard1_skillNumber5_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__rn"></span>
                     </div>
                  </div>

               </div>
            </div>
            {/* <!--==================== SKILLS 2 ====================--> */}
            <div className={`skills__content ${backendClass}`}>
               <div className="skills__header" onClick={toggleSkillContent2}>
                  <i className='bx bx-server skills__icon'></i>
                  <div>
                     <h3 className="skills__titles">Backend</h3>
                     <span className="skills__subtitle">{t('subtt_skillsCard2_skills')}</span>
                  </div>

                  <i className="bx bx-chevron-down skills__arrow"></i>
               </div>

               <div className="skills__list grid">

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Spring</h3>
                        <span className="skills__number">{t('skillCard2_skillNumber1_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__spring"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">PostgreSQL</h3>
                        <span className="skills__number">{t('skillCard2_skillNumber2_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__postgresql"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__number">{t('skillCard2_skillNumber3_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__java"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">BD e SQL</h3>
                        <span className="skills__number">{t('skillCard2_skillNumber4_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__bdsql"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Node Js</h3>
                        <span className="skills__number">{t('skillCard2_skillNumber5_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__node"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__number">{t('skillCard2_skillNumber6_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__php"></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div>
            {/* <!--==================== SKILLS 3 ====================--> */}
            <div className={`skills__content ${designClass}`}>
               <div className="skills__header" onClick={toggleSkillContent3}>
                  <i className='bx bx-palette skills__icon'></i>
                  <div>
                     <h3 className="skills__titles">Designer</h3>
                     <span className="skills__subtitle">{t('subtt_skillsCard3_skills')}</span>
                  </div>

                  <i className="bx bx-chevron-down skills__arrow"></i>
               </div>

               <div className="skills__list grid">
                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__number">{t('skillCard3_skillNumber1_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__figma"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Canva</h3>
                        <span className="skills__number">{t('skillCard3_skillNumber2_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__canva"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Photoshop</h3>
                        <span className="skills__number">{t('skillCard3_skillNumber3_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__photoshop"></span>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!--==================== SKILLS 4 ====================--> */}
            <div className={`skills__content ${outrasClass}`}>
               <div className="skills__header" onClick={toggleSkillContent4}>
                  <i className='bx bx-dots-horizontal-rounded skills__icon'></i>
                  <div>
                     <h3 className="skills__titles">Outros</h3>
                     <span className="skills__subtitle">{t('subtt_skillsCard4_skills')}</span>
                  </div>

                  <i className="bx bx-chevron-down skills__arrow"></i>
               </div>

               <div className="skills__list grid">
                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Git e Github</h3>
                        <span className="skills__number">{t('skillCard4_skillNumber1_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__gitgithub"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">CI/CD</h3>
                        <span className="skills__number">{t('skillCard4_skillNumber2_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__cicd"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">POO</h3>
                        <span className="skills__number">{t('skillCard4_skillNumber3_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__poo"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Gulp Js</h3>
                        <span className="skills__number">{t('skillCard4_skillNumber4_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__gulp"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Babel + Webpack</h3>
                        <span className="skills__number">{t('skillCard4_skillNumber5_skills')}</span>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__bw"></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
}