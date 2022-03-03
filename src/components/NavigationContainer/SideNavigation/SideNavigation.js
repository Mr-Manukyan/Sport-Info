import React from 'react'
import style from './SideNavigation.module.css'


const SideNavigation = (props) => {


  return (
  <div className = {style[props.container]}>
      {props.children}
  </div>
  )
};

export default SideNavigation
