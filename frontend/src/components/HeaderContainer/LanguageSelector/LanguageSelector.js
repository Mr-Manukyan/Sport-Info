import React, { useContext, useState } from "react";
import style from "./LanguageSelector.module.css";
import { motion } from "framer-motion";

import { languageOptions } from "../../Common/Languages/language.ts";
import { LanguageContext } from "../../Common/LanguageProvider/LanguageProvider.tsx";



const animationsLang = {
  hidden: {
    scale: 0.3,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      duration:0.7,
      // type: "spring",
      // stiffness: 100,
      // damping: 70
    },
  }),
};

const LanguageSelector = React.memo((props) => {

  const { languageChange, languageFlag } = useContext(LanguageContext);
  const [show, setShow] = useState(false);


  const handleLanguageChange = (id, img) => {
    languageChange(id, img);
    setShow(false);
  };

  return (

    <motion.div className={style.languageContainer}
                initial="hidden"
                whileInView="visible"
                custom={window.innerWidth <= 768 ? 15 : 13}
                variants={animationsLang}
                viewport={{once: true }}
    > 
      <div className={style.container} onClick={() => setShow((show) => !show)}>
        <span className={show ? style.arrow : style.noArrow}></span>
        <img src={languageFlag} className={style.defaultLanguageImg} alt={"flag"} />
      </div>
      <div className={show ? style.showBody : style.body}>

      {Object.entries(languageOptions).map(([id, img]) => (
            <div className={show ? style.showItems : style.items}
                 key={id}onClick={() => handleLanguageChange(id, img)}>
              <img src={img} className={style.flagIcon} alt="flag" />
            </div>
         ))}
     </div>
    </motion.div>
  );
})

export default LanguageSelector;
