import React from 'react'
import style from './AnimationLogo.module.css'
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo'

const animationsLogo = {
  hidden: {
    scale: 0.3,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      duration: 0.7,
      // type: "spring",
      // stiffness: 100,
      // damping: 70
    },
  }),
};

const AnimationLogo = () => {



  return (
    <motion.div className={style.container}
                initial="hidden"
                whileInView="visible"
                custom={13}
                variants={animationsLogo}
                viewport={{once: true }}
    >
      <div className={style.triangleWrapper}>
        <Logo logoBox="flex1" logoPhotoSize="logoSize" />
        <Logo logoBox="flex2" logoPhotoSize="logoSize" />
        <Logo logoBox="flex3" logoPhotoSize="logoSize" />
      </div>
    </motion.div>
  );
};
  
export default AnimationLogo