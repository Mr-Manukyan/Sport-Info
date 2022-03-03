import React, { useState } from "react"
import style from "./HeaderContainer.module.css"
import HeaderLogo from "./HeaderLogo/HeaderLogo"
import LanguageSelector from "./LanguageSelector/LanguageSelector"
import Logo from "./Logo/Logo"
import NavMenuContainer from "./NavMenu/NavMenuContainer"


const HeaderContainer = (props) => {
  const [sidebar, setSidebar] = useState(false)
  const changeSideBar = () => {
    setSidebar( sidebar => !sidebar)
  }

  return (
    <div className={style.container}>
      <Logo />
      <HeaderLogo />
      <NavMenuContainer sidebar={sidebar} changeSideBar={changeSideBar}/>
      <LanguageSelector />
    </div>
  );
};

export default HeaderContainer
