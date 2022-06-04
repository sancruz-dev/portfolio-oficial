import { motion } from 'framer-motion'

type Props = {
   projeto: any
}

export function ProjectCard({ projeto }: Props) {
   return (
      <motion.div
         className="work__card"
         layout
         animate={{ opacity: 1, scale: 1 }}
         initial={{ opacity: 0, scale: 0 }}
         exit={{ opacity: 0, scale: 0 }}
         transition={{ duration: .4 }}
      >
         <img
            className="work__img"
            src={projeto.img}
            alt={projeto.title}
         />
         <h3 className="work__title">{projeto.title}</h3>

         <a href="#" className="work__button">
            Demo <i className='bx bx-right-arrow-alt work__icon'></i>
         </a>
      </motion.div>
   )
}