import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Filter } from './Filter'
import { ProjectCard } from './ProjectCard'

import workOne from '../../../assets/img/work1.jpg'
import workTwo from '../../../assets/img/work2.jpg'
import workThree from '../../../assets/img/work3.jpg'

export function Work() {
   const [recent, setRecent] = useState([])
   const [filtered, setFiltered] = useState([])
   const [activeGenre, setActiveGenre] = useState(0)

   useEffect(() => {
      fetchRecent()
   }, [])

   const fetchRecent = () => {

      const projetos: any['results'] = {
         results: [
            {
               id: 1,
               title: "E-Commerce Rivier - TCC",
               img: workOne,
               genre_ids: [1],
            },
            {
               id: 2,
               title: "San DSMovie",
               img: workTwo,
               genre_ids: [2],
            },
            {
               id: 3,
               title: "blabla",
               img: workThree,
               genre_ids: [2],
            },
            {
               id: 4,
               title: "blabla",
               img: workThree,
               genre_ids: [2],
            },
            {
               id: 5,
               title: "blabla",
               img: workThree,
               genre_ids: [1],
            },
         ]
      }
      setFiltered(projetos.results)
      setRecent(projetos.results)

   }

   return <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>
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