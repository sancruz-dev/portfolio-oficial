import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
   setActiveGenre: Dispatch<SetStateAction<number>>,
   setFiltered: Dispatch<SetStateAction<never[]>>,
   activeGenre: number,
   popular: never[]
}

export function Filter({
   setActiveGenre, setFiltered,
   activeGenre, popular }: Props) {

   useEffect(() => {
      if (activeGenre === 0) {
         setFiltered(popular)
         return
      }

      const filtered = popular.filter((projeto) =>
         projeto.genre_ids.includes(activeGenre)
      )

      setFiltered(filtered)

   }, [activeGenre])

   return <>
      <div className="work__filters">
         <span 
            onClick={() => setActiveGenre(0)} 
            className={activeGenre === 0 
               ? 'work__item active-work' 
               : 'work__item'}>
            All
         </span>
         <span 
            onClick={() => setActiveGenre(1)} 
            className={activeGenre === 1 
               ? 'work__item active-work' 
               : 'work__item'}>
            Web
         </span>
         <span 
            onClick={() => setActiveGenre(2)} 
            className={activeGenre === 2 
               ? 'work__item active-work' 
               : 'work__item'}>
            Design
         </span>
      </div>
   </>
}