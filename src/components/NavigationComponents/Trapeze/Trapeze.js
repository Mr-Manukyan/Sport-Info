import React from 'react'
import style from './Trapeze.module.css'
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";


const Trapeze = () => {

  return (
    <AnimatedPage variants={'top'}>
      <div className={style.container}>
        Trapeze
      </div>
    </AnimatedPage>
  )
}

export default Trapeze