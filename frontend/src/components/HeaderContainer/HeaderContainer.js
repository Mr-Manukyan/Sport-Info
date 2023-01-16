import React, { useState } from "react"
import style from "./HeaderContainer.module.css"
import { motion } from "framer-motion"
import HeaderLogo from "./HeaderLogo/HeaderLogo"
import LanguageSelector from "./LanguageSelector/LanguageSelector"
import NavMenuContainer from "./NavMenu/NavMenuContainer"
import AnimationLogo from "../Common/AnimationLogo/AnimationLogo"
import Burger from "../Common/Burger/Burger"


const animationsHeader = {
  hidden: {
    y:'-30%',
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      duration: 1,
      // type: "spring",
      // stiffness: 100,
      // damping: 70
    },
  }),
};

const HeaderContainer = (props) => {
  const [sidebar, setSidebar] = useState(false)
  const changeSideBar = () => {
    setSidebar( sidebar => !sidebar)
  }

  return (
    <motion.div className={style.container}
                initial="hidden"
                whileInView="visible"
                custom={7}
                variants={animationsHeader}
                viewport={{once: true }}
    >
      <AnimationLogo />
      <HeaderLogo />
      <NavMenuContainer sidebar={sidebar} changeSideBar={changeSideBar}/>
      <LanguageSelector />
      <Burger sidebar = {sidebar} changeSideBar={changeSideBar}/>
    
    </motion.div>
  );
};

export default HeaderContainer
