import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type Props = {
   projeto: any
}

export function ProjectCard({ projeto }: Props) {
   const { t } = useTranslation()

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

         <a href={projeto.link} target="__blank" className="work__button">
            {t('btnToView_work')} <i className='bx bx-right-arrow-alt work__icon'></i>
         </a>
      </motion.div>
   )
}