import React from 'react'
import style from './Forearm.module.css'
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";

const Forearm = () => {

  return (
    <AnimatedPage variants={'left'}>
      <div className={style.container}>
        Forearm
      </div>
    </AnimatedPage>
  )
}

export default Forearm