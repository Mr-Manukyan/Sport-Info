import React from 'react'
import style from './AnimatedPage.module.css'
import { motion } from 'framer-motion'


const animationsTop = {
  initial : {
      opacity : 0,
      y: '-100vh',
  
  },
  animate : {
      opacity : 1,
      y: 0
  },
  exit : {
      opacity: 0,
      y : '-100vh',
  
  }
}



const AnimatedPage = ({variants,children}) => {

  return (
    <motion.div
      className = {style.container}
      initial = 'initial'
      animate = 'animate'
      exit = 'exit'
      variants={ (variants === 'top' && animationsTop) }
      transition={{duration :0.6}}
    
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage