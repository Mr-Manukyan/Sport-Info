import React, { useContext } from "react";
import style from "./SmallGalleryContainer.module.css";
import { motion } from "framer-motion";
import { data } from "./Data";
import Card from "./Card/Card";
import { LanguageContext } from "../Common/LanguageProvider/LanguageProvider.tsx";





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

  const { dictionary } = useContext(LanguageContext);
  const galleryParagraph = dictionary.galleryParagraph;


  return (
    <div className={style.container}>

      <motion.p className={style.headerParagraph}
                initial="initial"
                animate="animate"
                variants={animationsParagraph}
                transition={{ duration: 0.6, delay: 1 }}
          >
        {galleryParagraph}
      </motion.p>

      <motion.div className={style.wrapper}    
           initial="initial"
           animate="animate"
           variants={animationsCard}
           transition={{ duration: 0.4}}
      >
            {data.map((card, index) => (
              <Card
                key={card.id}
                name={card.name}
                image={card.image}
                index={index}
                small={true}
                id = {card.id}
              />
            ))}
       
     
    
      </motion.div>
    </div>
  );
};

export default SmallGalleryContainer;
