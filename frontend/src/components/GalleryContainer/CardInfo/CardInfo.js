import React,{useContext} from 'react'
import {useNavigate,useParams } from 'react-router-dom'
import style from  './CardInfo.module.css'
import { motion,AnimateSharedLayout } from 'framer-motion'
import { data } from '../Data'
import { LanguageContext } from "../../Common/LanguageProvider/LanguageProvider.tsx";

const animationCup = {
  initial : {
      opacity : 0,
      x: '-100%',
  
  },
  animate : {
      opacity : 1,
      x: 0
  },
  exit : {
      opacity: 0,
      x : '-100%',
  
  }
}

const animationText = {
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
const animationCardInfo = {
  initial : {
      opacity : 0,
      x: '-100%',
  
  },
  animate : {
      opacity : 1,
      x: 0
  },
  exit : {
      opacity: 0,
      x : '-100%',
  
  }
}


const CardInfo = (props) => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { dictionary } = useContext(LanguageContext);
  const galleryTextInfo = dictionary.galleryTextInfo;
  const galeryInfoParagraph = dictionary.galeryInfoParagraph;

  const singleCard = data.find( (card) => card.id === parseInt(id) )
   
  console.log(singleCard)
  return (

    <motion.div className = {style.container}
                initial = 'initial'
                animate = 'animate'
                exit = 'exit'
                variants={animationCardInfo }
                transition={{duration :0.5}}
    >
       <div onClick = { () => navigate('/gallery') } className = {style.goBack}></div>
        <div className = {style.bodyContainer}>
          
      
          <motion.div className= {style.imageWrapper}
                      initial = 'initial'
                      animate = 'animate'
                      variants={window.innerWidth > 768 ?  animationCup : animationText }
                      transition={{duration :0.5,delay : 0.4}}

          >
            <div className= {style.image}>
              <p className = {style.name}>{singleCard.name}</p>
            </div>
               
          </motion.div>
          
           <motion.div className = {style.infoTextContainer}
                         
                      initial = 'initial'
                      animate = 'animate'
                      variants={window.innerWidth > 768 ? animationText : animationCup }
                      transition={{duration :0.5,delay : 0.6}}
          
            >
            <AnimateSharedLayout>
               <motion.div layout className = {style.infoTextWrapper} transition={{duration :0.1}}>
                  <motion.div layout className = {style.paragraphWrapper}>
                     <div className = {style.paragraph}>{galeryInfoParagraph}</div>
                     <div className = {style.year}>{`${singleCard.year}`}</div>
                  </motion.div>
              
                    <div className = {style.infoText}> {galleryTextInfo[id]}</div>
              </motion.div>
            </AnimateSharedLayout>
            </motion.div>
      
        </div>
    </motion.div>
  )
}

export default CardInfo



