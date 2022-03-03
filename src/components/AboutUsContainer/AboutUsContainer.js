import React from 'react'
import AnimatedPage from '../Common/AnimatedPage/AnimatedPage'

import style from './AboutUsContainer.module.css'

const AboutUsContainer = () => {
  
  return (
    <AnimatedPage variants={'left'}>
     <div className = {style.container}>
        AboutUsContainer
    </div>

    </AnimatedPage>
    
  )
}

export default AboutUsContainer
