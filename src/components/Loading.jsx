import React from 'react';
import { motion } from "framer-motion";
import "../styles/Loading.css";
import NumberCounter from 'number-counter';
const Loading = ({conteo}) => {
  const transition = {
    type:"spring",
    duration:5
  };
  return (
  <div className='Contenedor-mapas'>
  <div className='Title'> 
    <h1>Galeria de mapas</h1> 
    <div className="imagenes">
    <motion.div 
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    initial={{scale:0}}
    transition={{duration:2}}
    animate={{scale:1}}
    className='imgs'>
    <img src='https://www.datocms-assets.com/14946/1638186862-reactjs.png?auto=format&fit=max&w=1200'
    alt="React" />
    </motion.div>
    <motion.div 
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    initial={{scale:0}}
    transition={{duration:2}}
    animate={{scale:1}}
    className='imgs'> 
    <img src="https://pbs.twimg.com/profile_images/1088504556655235073/uBO8tBS0_400x400.jpg"
    alt="" />
    </motion.div>
    </div>
    <div className="entrada">
    <h1>Filtro de web apps</h1>
    <h2><NumberCounter end={conteo} start={0} delay='2' preFix="Total de mapas "/></h2>
    </div>
  </div>
  
  </div>
  )
}

export default Loading