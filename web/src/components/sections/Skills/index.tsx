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
                     <h3 className="skills__titles">{t('title_skillsCard1_skills')}</h3>
                     <span className="skills__subtitle">  HTML/CSS • React • .NET...  </span>
                  </div>

                  <i className="bx bx-chevron-down skills__arrow"></i>
               </div>

               <div className="skills__list grid">
                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">HTML5/CSS3</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__1"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Javascript</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__2"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Typescript</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__3"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">React</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__4"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Angular</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__5"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">SQL</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__6"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">.NET (C#)</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__7"></span>
                     </div>
                  </div>

               </div>
            </div>
            {/* <!--==================== SKILLS 2 ====================--> */}
            <div className={`skills__content ${backendClass}`}>
               <div className="skills__header" onClick={toggleSkillContent2}>
                  <i className='bx bx-cloud skills__icon'></i>
                  <div>
                     <h3 className="skills__titles">{t('title_skillsCard2_skills')}</h3>
                     <span className="skills__subtitle">  Azure • Oracle • CI/CD... </span>
                  </div>

                  <i className="bx bx-chevron-down skills__arrow"></i>
               </div>

               <div className="skills__list grid">

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Azure</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__8"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Azure DevOps</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__9"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Oracle Cloud Infrastructure</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__10"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Oracle Integration Cloud</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__11"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Visual Builder Cloud Service (Oracle)</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__12"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">CI/CD</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__13"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Docker</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__14"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Automated Pipelines</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__15"></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div>
            {/* <!--==================== SKILLS 3 ====================--> */}
            <div className={`skills__content ${designClass}`}>
               <div className="skills__header" onClick={toggleSkillContent3}>
                  <i className='bx bx-layer skills__icon'></i>
                  <div>
                     <h3 className="skills__titles">{t('title_skillsCard3_skills')}</h3>
                     <span className="skills__subtitle">  API Rest • Clean Architecture • PR's...  </span>
                  </div>

                  <i className="bx bx-chevron-down skills__arrow"></i>
               </div>

               <div className="skills__list grid">
                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">API Rest</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__16"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">SOAP</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__17"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Clean Architecture</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__18"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Automated Tests</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__19"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Web App Security</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__20"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Vulnerability Analysis</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__21"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Code Review</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__22"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Pull Request</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__23"></span>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!--==================== SKILLS 4 ====================--> */}
            <div className={`skills__content ${outrasClass}`}>
               <div className="skills__header" onClick={toggleSkillContent4}>
                  <i className='bx bx-cog skills__icon'></i>
                  <div>
                     <h3 className="skills__titles">{t('title_skillsCard4_skills')}</h3>
                     <span className="skills__subtitle">  PostgreSQL • Git • Jira...  </span>
                  </div>

                  <i className="bx bx-chevron-down skills__arrow"></i>
               </div>

               <div className="skills__list grid">
                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">PostgreSQL</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__24"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">SQL Developer</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__25"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Git/GitHub</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__26"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Design & Prototyping (Figma)</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__27"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Agile Methodology (Kanban & Scrum)</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__28"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Jira</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__29"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Trello</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__30"></span>
                     </div>
                  </div>

                  <div className="skills__data">
                     <div className="skills__titles">
                        <h3 className="skills__name">Vite</h3>
                     </div>
                     <div className="skills__bar">
                        <span className="skills__percentage skills__31"></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
}