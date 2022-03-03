import React from 'react'
import style from './Legs.module.css'
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";

const Legs = () => {
  return (
    <AnimatedPage variants={"left"}>
      <div className={style.container}>
        Legs
      </div>
    </AnimatedPage>
  )
}

export default Legs