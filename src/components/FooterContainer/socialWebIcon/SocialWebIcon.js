import React from 'react';
import style from './SocialWebIcon.module.css';
import {CgFacebook} from 'react-icons/cg';
import {CgInstagram} from 'react-icons/cg';
import {BsGithub} from 'react-icons/bs';
import {TiSocialLinkedinCircular} from 'react-icons/ti';
import { motion } from 'framer-motion';



const animationSocialIcon = {

    hidden: {
      y : -30,
      opacity: 0,
    },

    visible: (custom) => ({
      y : 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: custom * 0.2,
      },

    }),
}

const SocialWebIcon = React.memo ( (props) => {
    return (
        <div className={style.container}>
         
                <motion.div  variants={animationSocialIcon} custom = {1} className = {style.iconWrapper}>
                    <a target="_blank" href='https://www.facebook.com/karen.manukyan.5832343' 
                             className = { `${style.link} ${style.linkFacebook}`} rel="noreferrer"
                    >
                      <CgFacebook  />
                    </a>
                </motion.div>
               
                <motion.div  variants={animationSocialIcon} custom = {2} className = {style.iconWrapper}>
                    <a target="_blank" href='https://github.com/MK-Manukyan-Karen' 
                             className = {`${style.link} ${style.linkTwitter}`} rel="noreferrer"
                    >
                        <BsGithub />
                   </a>
                </motion.div>

                <motion.div variants={animationSocialIcon} custom = {3} className = {style.iconWrapper}>
                    <a target="_blank" href='https://www.linkedin.com/in/karen-manukyan-a436671b6/' 
                       className = {`${style.link} ${style.linkGoogle}`} rel="noreferrer"
                    >
                        <TiSocialLinkedinCircular />
                   </a>
                </motion.div>

                <motion.div  variants={animationSocialIcon} custom = {4} className = {style.iconWrapper}>
                    <a target="_blank" href='https://www.facebook.com/karen.manukyan.5832343'
                             className = {`${style.link} ${style.linkInstagram}` } rel="noreferrer"
                    >
                        <CgInstagram />
                   </a>
                </motion.div>
        </div>
    )
})

export default SocialWebIcon;