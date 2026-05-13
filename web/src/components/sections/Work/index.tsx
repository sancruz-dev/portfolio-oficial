import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Filter } from './Filter'
import { ProjectCard } from './ProjectCard'

import work1 from '../../../assets/img/Work_imgs/myleetcode.png'
import work2 from '../../../assets/img/Work_imgs/ECommerceRivierTCC.png'
import work3 from '../../../assets/img/Work_imgs/sancruzblog.png'
import work4 from '../../../assets/img/Work_imgs/san-notes.png'
import work5 from '../../../assets/img/Work_imgs/calcJsPw.png'
import work6 from '../../../assets/img/Work_imgs/vehicle-management.png'
import work7 from '../../../assets/img/Work_imgs/prototipoRivier.png'
import work8 from '../../../assets/img/Work_imgs/rodoil.png'

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
               genre_ids: [3],
            },
            {
               id: 6,
               title: "Vehicle Management | Software Engineering",
               img: work6,
               link: 'https://github.com/sancruz-dev/dotnet-vehicle-management',
               genre_ids: [2],
            },
            {
               id: 4,
               title: "San Notes | React • LocalStorage",
               img: work4,
               link: 'https://github.com/sancruz-dev/nlw-expert-react',
               genre_ids: [1],
            },
            {
               id: 3,
               title: "SanCruz Blog | React • NextJs • MDX",
               img: work3,
               link: 'https://github.com/sancruz-dev/sancruzblog-nextjs',
               genre_ids: [1],
            },
            {
               id: 1,
               title: "My LeetCode | .NET Console APP",
               img: work1,
               link: 'https://github.com/sancruz-dev/dotnet-myleetcode',
               genre_ids: [2],
            },
            {
               id: 8,
               title: "RodOil Maps | React • GoogleMapsAPI",
               img: work8,
               link: 'https://github.com/sancruz-dev/googlemaps-api-rodoil',
               genre_ids: [3],
            },
            {
               id: 7,
               title: "Protótipo Rivier Alianças | Figma",
               img: work7,
               link: 'https://www.figma.com/proto/MujR7rpWENjGtBm7raFwq0/Prot%C3%B3tipo---RivieraAlian%C3%A7as?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2',
               genre_ids: [3],
            },
            {
               id: 2,
               title: "E-Commerce Rivier - TCC | PHP",
               img: work2,
               link: 'https://rivieraliancas.com.br/',
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