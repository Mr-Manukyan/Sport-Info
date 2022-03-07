import React from "react";
import { motion } from "framer-motion";
import style from "./Content.module.css";
import { BigScreenInfoAnimations,SmallScreenInfoAnimations } from "../../../Common/Animations/AnimationsData";


const Content = ({ text, alt, url, index }) => {

  const width = window.innerWidth;
   console.log(width)  

  if (width >= 1080) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className={style.infoContainer}
      >
        {index % 2 
        ? <>
            <div className = {style.paragraphWrapper}>
              <motion.p variants={BigScreenInfoAnimations.animationParagraph} 
                        custom={1}
                        className = {style.paragraph}>
                {alt}
              </motion.p>
            </div>

            <div className={style.infoWrapper}>
              <motion.div variants={BigScreenInfoAnimations.animationPhotoLeft} custom={2} className={style.photoWrapper}>
                <img src={url} alt={alt} className={style.photo} />
              </motion.div>
              <motion.p variants={BigScreenInfoAnimations.animationTextRight} custom={2} className={style.infoText}>
                {text}
              </motion.p>
            </div>
          </>
        
        : <>
            <div className = {style.paragraphWrapper}>
              <motion.p variants={BigScreenInfoAnimations.animationParagraph} 
                        custom={1}
                        className = {style.paragraph}>
                {alt}
              </motion.p>
            </div>
            <div className={style.infoWrapper}>
                <motion.p variants={BigScreenInfoAnimations.animationTextLeft} custom={2} className={style.infoText}>
                 {text}
                </motion.p>
                <motion.div variants={BigScreenInfoAnimations.animationPhotoRight} custom={2} className={style.photoWrapper}>
                  <img src={url} alt={alt} className={style.photo} />
                </motion.div>
            </div>
          </>
        }
      </motion.div>
    );
  }
  if (width <= 1080) {
    return (
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className={style.infoContainer}
      >
        <>
          <div className = {style.paragraphWrapper}>
                <motion.p variants={SmallScreenInfoAnimations.animationParagraph} 
                        custom={1}
                        className = {style.paragraph}>
                  {alt}
                </motion.p>
          </div>
          <div className={style.infoWrapper}>
              <motion.div variants={SmallScreenInfoAnimations.animationPhotoLeft} custom={2} className={style.photoWrapper}>
                <img src={url} alt={alt} className={style.photo} />
              </motion.div>
              <motion.p variants={SmallScreenInfoAnimations.animationTextRight} custom={2} className={style.infoText}>
                {text}
              </motion.p>
          </div>
        </>
      </motion.div>
    );
  }
};


export default Content;
