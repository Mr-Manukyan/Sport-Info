import React,{useContext, useState} from 'react';
import style from './NavMenuContainer.module.css'
import MenuItem from './MenuItem/MenuItem'
import Burger from '../../Common/Burger/Burger';
import { LanguageContext } from '../../Common/LanguageProvider/LanguageProvider';


const NavMenuContainer = React.memo((props) => {
    const [width, setWidth] = useState()
    const [left, setLeft] = useState()
    const {dictionary} = useContext(LanguageContext)
    const menuItemsName = dictionary.menuItems

    const indicator = (e) => {
        setLeft(e.target.offsetLeft+'px');
        setWidth(e.target.offsetWidth+'px');  
      }

   

    return (
      <div className = {style.container}>
        <ul className={props.sidebar ? `${style.navMenu} ${style.active}` : style.navMenu}>
            {menuItemsName.map((item, index) => {
                return <MenuItem key={index} path={item.path} cName={item.cName}
                             title={item.title} changeSideBar={props.changeSideBar}
                             indicator = {indicator} 
                       />
            })}
           <div className = {style.indicator}  style = {{width,left}}></div>
        </ul>
        <div className = {style.burgerContainer}>
          <Burger sidebar = {props.sidebar} changeSideBar={props.changeSideBar}/>
        </div>
     </div>
    )
})

export default NavMenuContainer;


