import React, { useContext } from "react";
import style from "./FullScreenVideo.module.css";
import { motion } from "framer-motion";
import videoBackground from "../../Asset/video/videoBackground.mp4";
import logo from "../../Asset/icons/logoLion.png";
import { LanguageContext } from "../../Common/LanguageProvider/LanguageProvider.tsx";


const animationLogoBody = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: custom * 0.3,
    }
  }),
};
const animationLogo = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: custom * 0.3,
    }
  }),
};
const animationText = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: custom * 0.3,
    }
  }),
};


const FullScreenVideo = () => {
  const { dictionary } = useContext(LanguageContext);
  const homeTitle = dictionary.homeTitle;


  return (
    <motion.div className={style.fullScreen}
                initial="hidden"
                whileInView="visible"
                
    >
          
        <motion.div variants={animationLogoBody} custom={6} className={style.logoBody}>
          <motion.img variants={animationLogo} custom={7} src={logo} className={style.logo} alt="logo" />
          <motion.div variants={animationText} custom={7} className={style.text}>{homeTitle}</motion.div>
        </motion.div>
    
      <video autoPlay muted loop preload="auto" className={style.video}>
        <source src={videoBackground} type="video/mp4" />
      </video>

    </motion.div>
  );
};

export default FullScreenVideo;
