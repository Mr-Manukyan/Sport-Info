import React from 'react'
import style from './Logo.module.css'
import logo from '../../Asset/icons/logoLion.png'

const Logo = (props) => {

  return (
     <div className = {props.logoBox ? style[props.logoBox] :  style.container}>
       <img src = {logo} className = {props.logoPhotoSize ? style[props.logoPhotoSize]: style.logoPhoto} alt = 'photoLogo' />
     </div>
  )
};

export default Logo
