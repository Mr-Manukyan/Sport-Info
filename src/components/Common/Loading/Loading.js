import React from "react";
import style from './Loading.module.css'


const Loading = (props) => {
  return (
    <div className={style.container} style = {{zIndex : props.zIndex ? -1000 : 1000}}>
       <div className = {style.wrapper}>
         <span className = {style.text}>Sport Info</span>
         <div className = {style.spinner}></div>
       </div>
    </div>
  );
};

export default Loading;
