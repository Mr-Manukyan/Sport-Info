import React from 'react'
import style from './Shoulders.module.css'
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";


const Shoulders = () => {
  
  return (
    <AnimatedPage variants={'top'}>
      <div className={style.container}>
        Shoulders
      </div>
    </AnimatedPage>
  )
}

export default Shoulders