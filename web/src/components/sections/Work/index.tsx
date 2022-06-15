import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Filter } from './Filter'
import { ProjectCard } from './ProjectCard'

import work1 from '../../../assets/img/Work_imgs/websitePessoal.png'
import work2 from '../../../assets/img/Work_imgs/ECommerceRivierTCC.png'
import work3 from '../../../assets/img/Work_imgs/sanDSMovie.png'
import work4 from '../../../assets/img/Work_imgs/feedbackSanNlw.png'
import work5 from '../../../assets/img/Work_imgs/calcJsPw.png'
import work6 from '../../../assets/img/Work_imgs/sanTasks.png'
import work7 from '../../../assets/img/Work_imgs/prototipoRivier.png'
import work8 from '../../../assets/img/Work_imgs/prototipoArtigosDesign.png'
import { useTranslation } from 'react-i18next'

export function Work() {
   const [recent, setRecent] = useState([])
   const [filtered, setFiltered] = useState([])
   const [activeGenre, setActiveGenre] = useState(0)
   const { t } = useTranslation()

   useEffect(() => {
      fetchRecent()
   }, [])

   const fetchRecent = () => {

      const projetos: any['results'] = {
         results: [
            {
               id: 5,
               title: "San'Calculator | JS",
               img: work5,
               link: 'https://calcjs-pw3.netlify.app/',
               genre_ids: [2],
            },
            {
               id: 4,
               title: "Feedback Widget | ReactJs",
               img: work4,
               link: 'https://feedbacksan-nlw.vercel.app/',
               genre_ids: [1],
            },
            {
               id: 6,
               title: "To do List | JS",
               img: work6,
               link: 'https://santasks.netlify.app/',
               genre_ids: [2],
            },
            {
               id: 3,
               title: "San DSMovie | ReactJs",
               img: work3,
               link: 'https://sandsmovie.netlify.app/',
               genre_ids: [1],
            },
            {
               id: 7,
               title: "Protótipo Rivier Alianças | Figma",
               img: work7,
               link: 'https://www.figma.com/proto/MujR7rpWENjGtBm7raFwq0/Prot%C3%B3tipo---RivieraAlian%C3%A7as?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2',
               genre_ids: [2],
            },
            {
               id: 2,
               title: "E-Commerce Rivier - TCC | PHP",
               img: work2,
               link: 'https://rivieraliancas.com.br/',
               genre_ids: [1],
            },
            {
               id: 8,
               title: "Protótipo Rede de Artigos-Design | Figma",
               img: work8,
               link: 'https://www.figma.com/proto/kuYLYfjH1e386THbQrCZz5/Rede-Artigos-Design?scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A8&node-id=1%3A8',
               genre_ids: [2],
            },
            {
               id: 1,
               title: "Website Pessoal | ReactJs",
               img: work1,
               link: 'https://sancruz.vercel.app',
               genre_ids: [1],
            },
         ]
      }
      setFiltered(projetos.results)
      setRecent(projetos.results)
   }

   return <section className="work section" id="work">
      <span className="section__subtitle">
         {t('subtt_sec_work')}
      </span>
      <h2 className="section__title">
         {t('title_sec_work')}
      </h2>
      <Filter
         recent={recent}
         setFiltered={setFiltered}
         activeGenre={activeGenre}
         setActiveGenre={setActiveGenre}
      />

      <motion.div layout className="work__container container grid">
         <AnimatePresence>
            {filtered.map((projeto, id) => {
               return <ProjectCard key={id} projeto={projeto} />
            })}
         </AnimatePresence>
      </motion.div>
   </section>
}