import React from 'react'
import style from './MenuItem.module.css'
import { NavLink } from 'react-router-dom'




const MenuItem = React.memo ( ({ path,cName,title,changeSideBar,indicator}) => {

  const buttonClick = () => {
    changeSideBar(false)
  }
    return (
        
      <li className = {style.linkWrapper}>
                  <NavLink to={path}
                           onMouseMove={indicator} 
                           data-text = {title}
                           onClick = {buttonClick}
                           className={({ isActive }) =>
                                         isActive ? style.activeLink : style[cName]
                                     }
                  >
                    {title}
                  </NavLink>
          
      </li>
    )
  })

  export default MenuItem;

