import React,{useContext} from 'react'
import style from './FooterContainer.module.css'
import { motion } from 'framer-motion'
import SocialWebIcon from './socialWebIcon/SocialWebIcon'
import {FaRegCopyright} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { LanguageContext } from '../Common/LanguageProvider/LanguageProvider.tsx'




const animationAuthorInfo = {

      hidden: {
        y : -10,
        opacity: 0,
      },

      visible: (custom) => ({
        y : 0,
        opacity: 1,
        transition: {
          delay: custom * 0.2,
          // duration: custom * 0.2,
        },

      }),
}


const FooterContainer:React.FC = React.memo ( () => {

    const { dictionary } = useContext(LanguageContext)
    const {contact,author,mail,mailAddress,name,phone,phoneNumber} = dictionary.authorInfo


    return (
        <motion.div className = {style.footerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount : 0.6}}
        >
        <div className = {style.footerWrapper}>
            <div className = {style.socialWebIconWrapper}>
              <SocialWebIcon />
            </div>
          
            <div className = {style.infoWrapper}>

                <motion.div variants={animationAuthorInfo} custom = {8} className = {style.aboutUsWrapper}>
                   <NavLink to = '/contactUs' className = {style.aboutUs}>{contact}</NavLink>
                </motion.div>

                <div className = {style.authorWrapper}>
                    <motion.div variants={animationAuthorInfo} custom = {11} className = {style.author}>
                       <span>{author}</span>{name}
                    </motion.div>
                    <motion.div variants={animationAuthorInfo} custom = {11} className = {style.mail}>
                       <span>{mail}</span>{mailAddress}
                    </motion.div>
                    <motion.div variants={animationAuthorInfo} custom = {11} className = {style.phone}>
                       <span>{phone}</span>{phoneNumber}
                    </motion.div>
                </div>
        
            </div>
            <div className = {style.copyrightIconWrapper}>
              <FaRegCopyright className = {style.copyright} />
              <span className = {style.copyrightText}>
                  {`COPYRIGHT 2021 SPORT STYLE. ALL RIGHTS RESERVED.`}
              </span>
            </div>
          </div>
        </motion.div>
    )
})

export default FooterContainer;