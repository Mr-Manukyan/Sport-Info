import React, { useContext, useState } from "react";
import style from  "./GalleryContainer.module.css";
import { motion } from "framer-motion";
import { data } from "./Data";
import { LanguageContext } from "../Common/LanguageProvider/LanguageProvider.tsx";
import Card from "./Card/Card";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import SmallGalleryContainer from "./SmallGalleryContainer";



const animationsGallery = {
  initial : {
      opacity : 0,
      y: '-100vh',
  
  },
  animate : {
      opacity : 1,
      y: 0
  },
  exit : {
      opacity: 0,
      y : '-100vh',
  
  }
}
const animationsParagraph = {
  initial: {
    opacity: 0,
    scale: 0.3,
    y: "-10vh",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

const animationsButton = {
  initial: {
    opacity: 0,
    scale: 0.3,
    y: "-500px",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};


const GalleryContainer = () => {

  const [angle, setAngle] = useState(0);
  const { dictionary } = useContext(LanguageContext);
  const galleryParagraph = dictionary.galleryParagraph;
  
  const increment = () => {
    if (angle < 360) {
      setAngle(angle + 24);
    }
  };
  const decrement = () => {
    if (angle > 0) {
      setAngle(angle - 24);
    }
  };

  if (window.innerWidth < 720){
     return (
       <SmallGalleryContainer />
     )
  }


  return (
    <motion.div
      className={style.container}
      initial = 'initial'
      animate = 'animate'
      exit = 'exit'
      variants={animationsGallery}
      transition={{duration :0.5}}
    >
      <motion.p
        className={style.headerParagraph}
        initial="initial"
        animate="animate"
        variants={animationsParagraph}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {galleryParagraph}
      </motion.p>
      <div className={style.galleryContainer}>
        <div className={style.galleryWrapper}>
          <div className={style.spinerWrapper} style={{ transform: `rotateX(-15deg) rotateY(-${angle}deg)` }}>
            {data.map((card, index) => (
                 <Card key={card.id} name = {card.name} image = {card.image} index = {index} id = {card.id}/>
            ))}
          </div>
        </div>
    
        <motion.button
          className={`${style.button} ${style.left}`}
          initial="initial"
          animate="animate"
          variants={animationsButton}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={decrement}
        >
          {<BsArrowLeftCircleFill />}
        </motion.button>
        <motion.button
          className={`${style.button} ${style.right}`}
          initial="initial"
          animate="animate"
          variants={animationsButton}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={increment}
        >
         {<BsArrowRightCircleFill />}
        </motion.button>

      </div>
    </motion.div>
  );
};

export default GalleryContainer;
