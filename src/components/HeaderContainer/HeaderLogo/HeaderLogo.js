import React from "react";
import style from "./HeaderLogo.module.css"
import logo from "../../Asset/icons/logoLion.png"
import { motion } from "framer-motion";

const animationsHeaderLogo = {
   hidden: {
     y : -50,
     opacity: 0,
   },
   visible: (custom) => ({
     y : 0,
     opacity: 1,
     transition: {
       delay: custom * 0.3,
       duration: custom * 0.3,
       type: "spring",
       stiffness: 50,
       damping: 20
     },
   }),
 };


export const HeaderLogo = (props) => {
  return (
    
     <motion.div className = {style.container} 
             style={{ left: `calc(${window.screen.width - 39.5})%` }}
             initial="hidden"
             whileInView="visible"
             custom={window.innerWidth <= 768 ? 2 : 13}
             variants={animationsHeaderLogo}
             viewport={{once: true }}
     >
        <img src={logo} alt="logo" className={style.logo} />
        <h1 className={style.logoName}>Sport Info</h1>
        <p className={style.authorName}>MK</p>
     </motion.div>

     
  )
}

export default HeaderLogo;
