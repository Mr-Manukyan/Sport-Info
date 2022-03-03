import React from 'react'
import style from './AnimatedPage.module.css'
import { motion } from 'framer-motion'






const animationsLeft = {
  initial : {
      opacity : 0,
      x: '-100%',
  
  },
  animate : {
      opacity : 1,
      x : 0
  },
  exit : {
      opacity: 0,
      x : '-100%',
  
  }
}


const AnimatedPage = ({variants,children}) => {

  return (
    <motion.div
      className = {style.container}
      initial = 'initial'
      animate = 'animate'
      exit = 'exit'
      variants={ (variants === 'left' && animationsLeft) }
      transition={{duration :0.7,delay : 0.5}}
    
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage