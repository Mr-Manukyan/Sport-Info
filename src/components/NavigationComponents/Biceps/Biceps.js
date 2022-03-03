import React from 'react'
import style from './Biceps.module.css'
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";

const Biceps = () => {

  return (
    <AnimatedPage variants={'top'}>
      <div className={style.container}>
      Biceps
      </div>
    </AnimatedPage>
  )
}

export default Biceps