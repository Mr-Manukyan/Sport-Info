import React, { useState, useContext } from "react";
import style from "./SmallGalleryContainer.module.css";
import { motion } from "framer-motion";
import { data } from "./Data";
import Card from "./Card/Card";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { LanguageContext } from "../Common/LanguageProvider/LanguageProvider";

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
  const PAGE_WIDTH = window.innerWidth >= 540? 510 : 300;

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
    <div className={style.container}>
      <div className={style.wrapper}>
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
          <motion.div 
             initial="initial"
             animate="animate"
             variants={animationsCard}
             transition={{ duration: 0.4}}
             className={style.allItemsContainer}
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
          </motion.div>
        </div>
    
      </div>
  
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
