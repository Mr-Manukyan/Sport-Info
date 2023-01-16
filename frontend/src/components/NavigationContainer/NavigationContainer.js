import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./NavigationContainer.module.css";
import SideNavigation from "./SideNavigation/SideNavigation";
import NavItem from "./NavItem/NavItem";
import { leftItems, rightItems } from "./dataItems";
import { LanguageContext } from "../Common/LanguageProvider/LanguageProvider.tsx";

const NavigationContainer = (props) => {
  const { dictionary } = useContext(LanguageContext);
  const [hideMenu, setHideMenu] = useState(false);
  const location = useLocation()
  const pathname = location.pathname
  const path = pathname.slice(0,14)
  console.log(path)
  useEffect(() => {
    document.addEventListener("scroll", onShowMenu);
    return () => {
      document.removeEventListener("scroll", onShowMenu);
    };
  }, []);

  const onShowMenu = (e) => {
    let scrollTop = e.target.documentElement.scrollTop;
    let menuCenter = window.innerHeight / 5;
    scrollTop >= menuCenter ? setHideMenu(true) : setHideMenu(false);
  };

  const leftMenuItemsName = dictionary.navMenuItemsName.left;
  const rightMenuItemsName = dictionary.navMenuItemsName.right;

  if(location.pathname === '/gallery' || path === '/gallery-info/'){
    return null
  }

  return (
    <>
      <div className={hideMenu ? style.hideMenuLeft : style.menuWrapperLeft}>
        <SideNavigation container={"containerLeft"}>
          {leftItems.map((item, index) => {
            return (
              <NavItem
                wrapperSide={item.wrapperSide}
                paragraphSide={item.paragraphSide}
                photoSide={item.photoSide}
                text={leftMenuItemsName[index]}
                arrowSide={item.arrowSide}
                img={item.img}
                key={item.id}
                path = {item.path}
                number = {index + 1}
              />
            );
          })}
        </SideNavigation>
      </div>
      <div className={hideMenu ? style.hideMenuRight : style.menuWrapperRight}>
        <SideNavigation container={"containerRight"}>
          {rightItems.map((item, index) => {
            return (
              <NavItem
                wrapperSide={item.wrapperSide}
                paragraphSide={item.paragraphSide}
                photoSide={item.photoSide}
                text={rightMenuItemsName[index]}
                arrowSide={item.arrowSide}
                img={item.img}
                key={item.id}
                path = {item.path}
                number = {index + 1}
              />
            );
          })}
        </SideNavigation>
      </div>
    </>
  );
};

export default NavigationContainer;
