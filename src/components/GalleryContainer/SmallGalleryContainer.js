import React, { useState, useContext } from "react";
import style from "./SmallGalleryContainer.module.css";
import { motion } from "framer-motion";
import { data } from "./Data";
import Card from "./Card/Card";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { LanguageContext } from "../Common/LanguageProvider/LanguageProvider";
import smallBG from  '../Asset/photos/galleryPhotos/smallBG.jpg'
import bigBG from '../Asset/photos/galleryPhotos/dumbbells.jpg'

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
const animationsCard = {
  initial: {
    opacity: 0,

    y: "-100vh",
  },
  animate: {
    opacity: 1,

    y: 0,
  },
};

const SmallGalleryContainer = () => {
  const [offset, setOffset] = useState(0);
  const { dictionary } = useContext(LanguageContext);
  const galleryParagraph = dictionary.galleryParagraph;
  const PAGE_WIDTH = window.innerWidth >= 540 ? 510 : 300;

  const handleLeftArrowClick = () => {

    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {

    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (data.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={style.container} style = {{
                                               background:`url(${window.innerWidth <= 420 ? smallBG : bigBG })`,
                                               backgroundRepeat:'no-repeat',
                                               backgroundSize:'cover',
                                               backgroundPosition : 'center'
                                              
                                              }}>
      <motion.div className={style.wrapper} 
           initial="initial"
           animate="animate"
           variants={animationsCard}
           transition={{ duration: 0.4}}
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
 
        <div className={style.window}>
          <div  className={style.allItemsContainer}
                style={{ transform: `translateX(${offset}px)` }}
          >
            {data.map((card, index) => (
              <Card
                key={card.id}
                name={card.name}
                image={card.image}
                index={index}
                small={true}
              />
            ))}
          </div>
        </div>
    
      </motion.div>
  
      <div className={style.buttonWrapper}>
        <motion.button
          className={style.button}
          initial="initial"
          animate="animate"
          variants={animationsButton}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={handleLeftArrowClick}
        >
          {<BsArrowLeftCircleFill />}
        </motion.button>

        <motion.button
          className={style.button}
          initial="initial"
          animate="animate"
          variants={animationsButton}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={handleRightArrowClick}
        >
          {<BsArrowRightCircleFill />}
        </motion.button>
      </div>
    
    </div>
  );
};

export default SmallGalleryContainer;
