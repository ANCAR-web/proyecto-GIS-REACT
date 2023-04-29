import React from 'react';
import "../styles/Cards.css";
import Spinner from './Spinner';
import { motion } from "framer-motion";

const Cards = ({Cardsref,datos,loading1}) => {
  if (loading1) return <Spinner/>
  return (
    <div ref={Cardsref} className='Cards'>
      {
        datos.map((mapa)=>{
          return <motion.div 
          initial={{scale:0}}
          transition={{duration:2}}
          animate={{scale:1}}
          className='card'
          key={mapa.id}>
          <h2>{mapa.Nombre}</h2>
          <img src={mapa.imagen} alt={mapa.Nombre} />
          <h3>{`Categoria: ${mapa.categoria}`}</h3>
          <a href={mapa.url}>{mapa.categoria}</a>
          </motion.div>
        })
      }

    </div>
  )
}

export default Cards