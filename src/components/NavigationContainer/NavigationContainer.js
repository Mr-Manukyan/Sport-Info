import React, { useContext, useEffect, useState } from "react";
import style from "./NavigationContainer.module.css";
import SideNavigation from "./SideNavigation/SideNavigation";
import NavItem from "./NavItem/NavItem";
import { leftItems, rightItems } from "./dataItems";
import { LanguageContext } from "../Common/LanguageProvider/LanguageProvider";

const NavigationContainer = (props) => {
  const { dictionary } = useContext(LanguageContext);
  const [hideMenu, setHideMenu] = useState(false);

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
              />
            );
          })}
        </SideNavigation>
      </div>
    </>
  );
};

export default NavigationContainer;
