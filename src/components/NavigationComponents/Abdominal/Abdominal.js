import React from "react";
import style from "./Abdominal.module.css";
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";

const Abdominal = () => {


  return (
    
    <AnimatedPage variants={'left'}>
    <div className={style.container}>
    Abdominal
    </div>
   </AnimatedPage>
  
  );
};

export default Abdominal;
