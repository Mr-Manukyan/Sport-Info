import React from 'react'
import style from './Triceps.module.css'
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";

const Triceps = () => {
  return (
    <AnimatedPage variants={"top"}>
      <div className={style.container}>
      Triceps
      </div>
    </AnimatedPage>
  )
}

export default Triceps