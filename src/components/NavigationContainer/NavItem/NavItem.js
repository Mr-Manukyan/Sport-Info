import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavItem.module.css";

const NavItem = (props) => {

  return (
    <NavLink to = {props.path}>
      <div className={style[props.wrapperSide]}>
        <p className={style[props.paragraphSide]}>{props.text}</p>
        <img src={props.img} className={style[props.photoSide]} alt="Man-muscles" />
        <span className={style[props.arrowSide]}></span>
      </div>
    </NavLink>
  );
};

export default NavItem;
