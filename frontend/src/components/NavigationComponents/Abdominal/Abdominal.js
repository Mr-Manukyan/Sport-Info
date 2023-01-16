import React from "react";
import style from "./Abdominal.module.css";
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";

const Abdominal = () => {


  return (
    
    <AnimatedPage variants={'top'}>
      <div className={style.container}>
       Abdominals
     </div>
   </AnimatedPage>
  
  );
};

export default Abdominal;
