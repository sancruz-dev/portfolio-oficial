import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Filter } from './Filter'
import { Projeto } from './projeto'

import workOne from '../../../assets/img/work1.jpg'
import workTwo from '../../../assets/img/work2.jpg'

export function Work() {
   const [popular, setPopular] = useState([])
   const [filtered, setFiltered] = useState([])
   const [activeGenre, setActiveGenre] = useState(0)

   useEffect(() => {
      fetchPopular()
   }, [])

   const fetchPopular = () => {

      const projetos: any['results'] = {
         results: [
            {
               id: "1",
               title: "E-Commerce Rivier - TCC",
               img: workOne,
               genre_ids: [1],
            },
            {
               id: "2",
               title: "San DSMovie",
               img: workTwo,
               genre_ids: [2],
            },
         ]
      }
      setFiltered(projetos.results)
      setPopular(projetos.results)
   }

   return <>
      <section className="work section" id="work">
         <span className="section__subtitle">My Portfolio</span>
         <h2 className="section__title">Recent Works</h2>
         <div className='app-movies'>
            <Filter
               popular={popular}
               setFiltered={setFiltered}
               activeGenre={activeGenre}
               setActiveGenre={setActiveGenre}
            />

            <motion.div layout className="popular-movies">
               <AnimatePresence>
                  {filtered.map((projeto, id) => {
                     return <Projeto key={id} projeto={projeto} />
                  })}
               </AnimatePresence>
            </motion.div>
         </div>
      </section>
   </>
}