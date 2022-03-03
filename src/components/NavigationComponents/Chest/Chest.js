import React from 'react'
import style from  './Chest.module.css'
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";

const Chest = () => {

  return (
    <AnimatedPage variants={'top'}>
      <div className={style.container}>
       Chest
      </div>
    </AnimatedPage>
  )
}

export default Chest