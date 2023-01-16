import React,{useContext, useState} from 'react';
import style from './NavMenuContainer.module.css'
import MenuItem from './MenuItem/MenuItem'
import { LanguageContext } from '../../Common/LanguageProvider/LanguageProvider.tsx';
import { motion } from 'framer-motion';


const AnimationsMenu = {
  hidden: {
    x : '-100%',
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    x : 0,
    transition: {
      delay: custom * 0.3,
      duration: custom * 0.3,
      type: "spring",
      stiffness: 1000,
      damping: 50
    },
  }),
};

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
      <motion.div className = {style.container}
                   initial="hidden"
                   whileInView="visible"
                   custom={11}
                   variants={AnimationsMenu}
                   viewport={{once: true }}
      >
        <ul className={props.sidebar ? `${style.navMenu} ${style.active}` : style.navMenu}>
            {menuItemsName.map((item, index) => {
                return <MenuItem key={index} path={item.path} cName={item.cName}
                             title={item.title} changeSideBar={props.changeSideBar}
                             indicator = {indicator} 
                       />
            })}
           <div className = {style.indicator}  style = {{width,left}}></div>
        </ul>
     </motion.div>
    )
})

export default NavMenuContainer;


