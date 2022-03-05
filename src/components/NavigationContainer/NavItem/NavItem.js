import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavItem.module.css";
import { motion } from "framer-motion";

const Animations = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.3,
      duration: custom * 0.3,
      type: "spring",
      stiffness: 1000,
      damping: 50
    },
  }),
};

const NavItem = (props) => {

  return (
    <NavLink to={props.path}>
      <motion.div
        className={style[props.wrapperSide]}
        initial="hidden"
        whileInView="visible"
        custom={props.number}
        variants={Animations}
        //  viewport={{once: true }}
      >
        <p className={style[props.paragraphSide]}>{props.text}</p>
        <img
          src={props.img}
          className={style[props.photoSide]}
          alt="Man-muscles"
        />
        <span className={style[props.arrowSide]}></span>
      </motion.div>
    </NavLink>
  );
};

export default NavItem;
