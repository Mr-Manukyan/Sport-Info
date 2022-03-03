import React from "react";
import style from "./HeaderLogo.module.css"
import logo from "../../Asset/icons/logoLion.png"


export const HeaderLogo = (props) => {
  return (
    
     <div className = {style.container} style={{ left: `calc(${window.screen.width - 39.5})%` }}>
        <img src={logo} alt="logo" className={style.logo} />
        <h1 className={style.logoName}>Sport Info</h1>
        <p className={style.authorName}>MK</p>
     </div>

     
  )
}

export default HeaderLogo;
