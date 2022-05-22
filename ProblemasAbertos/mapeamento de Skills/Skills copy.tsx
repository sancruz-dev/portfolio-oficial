import { useEffect, useState } from "react"


export function Skills() {

   const [classSkillContent, setClassSkillContent] = useState('')


   function toggleSkillContent() {
      classSkillContent === 'skills__close'
         ? setClassSkillContent('skills__open')
         : setClassSkillContent('skills__close')
      }

   const stackBranches = [
      {
         keyClass: 'frontend', 
         icon: 'bx-code-alt',
         title: 'Front-End',
         subtitle: 'Mais de 3 anos',

         skillName1: 'HTML/CSS',
         skillNumber1: 'avançado',
         skillBar1: 'skills__html',

         skillName2: 'SASS/COMPASS',
         skillNumber2: 'avançado',
         skillBar2: 'skills__sasscompass',

         skillName3: 'Javascript',
         skillNumber3: 'mediano/avançado',
         skillBar3: 'skills__js',

         skillName4: 'React Js',
         skillNumber4: 'mediano/avançado',
         skillBar4: 'skills__react',
      },
      {
         keyClass: 'backend',
         icon: 'bx-server',
         title: 'Back-End',
         subtitle: 'Mais de 3 anos',

         skillName1: 'Typescript ORM',
         skillNumber1: 'mediano/avançado',
         skillBar1: 'skills__tsorm',

         skillName2: 'postgreSQL e BD',
         skillNumber2: 'mediano',
         skillBar2: 'skills__postgrebd',

         skillName3: 'Spring',
         skillNumber3: 'mediano',
         skillBar3: 'skills__spring',

         skillName4: 'SQL',
         skillNumber4: 'básico/mediano',
         skillBar4: 'skills__react',

         skillName5: 'PHP',
         skillNumber5: 'básico/mediano',
         skillBar5: 'skills__php',
      },
      {
         keyClass: 'design',
         icon: 'bx-chevron-down',
         title: 'UX/UI Design',
         subtitle: 'Mais de 1 ano',

         skillName1: 'Figma',
         skillNumber1: 'mediano/avançado',
         skillBar1: 'skills__figma',

         skillName2: 'Canva',
         skillNumber2: 'mediano',
         skillBar2: 'skills__canva',

         skillName3: 'Photoshop',
         skillNumber3: 'básico/mediano',
         skillBar3: 'skills__photoshop',
      },
      {
         keyClass: 'outrasstacks',
         icon: 'bx-dots-horizontal-rounded',
         title: 'Outras Stacks',
         subtitle: 'Experiências e conhecimentos',

         skillName1: 'Git / Github',
         skillNumber1: 'avançado',
         skillBar1: 'skills__gitgithub',

         skillName2: 'React Native',
         skillNumber2: 'mediano/avançado',
         skillBar2: 'skills__rn',

         skillName3: 'CI / CD',
         skillNumber3: 'mediano/avançado',
         skillBar3: 'skills__cicd',

         skillName4: 'Performance Web',
         skillNumber4: 'mediano/avançado',
         skillBar4: 'skills__performance',

         skillName5: 'POO',
         skillNumber5: 'mediano',
         skillBar5: 'skills__performance',

         skillName6: 'Gulp Js',
         skillNumber6: 'básico/mediano',
         skillBar6: 'skills__gulp',
      },
   ]



   return <section className="skills section" id="skills">
      <span className="section__subtitle">Minha experiência</span>
      <h2 className="section__title">Nível Técnico</h2>

      {stackBranches.map(stack => (
         <div className="skills__container container grid">
            <div>
               {/* <!--=== SKILLS ===--> */}
               <div
                  className={`skills__content ${classSkillContent} ${stack.keyClass}`}
                  onClick={() => {
                     stack.keyClass === 'frontend' && classSkillContent === 'skills_close'
                     ? setClassSkillContent('frontend skills__open')
                     : setClassSkillContent('frontend skills__close')
                  }} 
                  
                  >
                  <div className="skills__header">
                     <i className={`bx bx-code-alt skills__icon ${stack.icon}`}></i>
                     <div>
                        <h3 className="skills__titles">{stack.title}</h3>
                        <span className="skills__subtitle">{stack.subtitle}</span>
                     </div>

                     <i className="bx bx-chevron-down skills__arrow"></i>
                  </div>

                  <div className="skills__list grid">
                     <div className="skills__data">
                        <div className="skills__titles">
                           <h3 className="skills__name">{stack.skillName1}</h3>
                           <span className="skills__number">{stack.skillNumber1}</span>
                        </div>
                        <div className="skills__bar">
                           <span className={`skills__percentage ${stack.skillBar1}`}></span>
                        </div>
                     </div>

                     <div className="skills__data">
                        <div className="skills__titles">
                           <h3 className="skills__name">{stack.skillName2}</h3>
                           <span className="skills__number">{stack.skillNumber2}</span>
                        </div>
                        <div className="skills__bar">
                           <span className={`skills__percentage ${stack.skillBar2}`}></span>
                        </div>
                     </div>

                     <div className="skills__data">
                        <div className="skills__titles">
                           <h3 className="skills__name">{stack.skillName3}</h3>
                           <span className="skills__number">{stack.skillNumber3}</span>
                        </div>
                        <div className="skills__bar">
                           <span className={`skills__percentage ${stack.skillBar3}`}></span>
                        </div>
                     </div>

                     {stack.title === 'UX/UI Design'
                        ? null
                        : <>
                           <div className="skills__data">
                              <div className="skills__titles">
                                 <h3 className="skills__name">{stack.skillName4}</h3>
                                 <span className="skills__number">{stack.skillNumber4}</span>
                              </div>
                              <div className="skills__bar">
                                 <span className={`skills__percentage ${stack.skillBar4}`}></span>
                              </div>
                           </div>

                           {stack.title === 'Front-End'
                              ? null
                              : <>
                                 <div className="skills__data">
                                    <div className="skills__titles">
                                       <h3 className="skills__name">{stack.skillName5}</h3>
                                       <span className="skills__number">{stack.skillNumber5}</span>
                                    </div>
                                    <div className="skills__bar">
                                       <span className={`skills__percentage ${stack.skillBar5}`}></span>
                                    </div>
                                 </div>

                                 {stack.title === 'Back-End'
                                    ? null
                                    : <div className="skills__data">
                                       <div className="skills__titles">
                                          <h3 className="skills__name">{stack.skillName6}</h3>
                                          <span className="skills__number">{stack.skillNumber6}</span>
                                       </div>
                                       <div className="skills__bar">
                                          <span className={`skills__percentage ${stack.skillBar6}`}></span>
                                       </div>
                                    </div>
                                 }
                              </>
                           }
                        </>
                     }

                  </div>
               </div>

            </div>

         </div>
      ))}

   </section>
}