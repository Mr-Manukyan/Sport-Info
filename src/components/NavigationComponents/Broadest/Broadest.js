import React from "react";
import style from "./Broadest.module.css";
import AnimatedPage from "../../Common/AnimatedPage/AnimatedPage";

const Broadest = () => {
  return (
    <AnimatedPage variants={"top"}>
      <div className={style.container}>
        Broadest
      </div>
    </AnimatedPage>
  );
};

export default Broadest;
