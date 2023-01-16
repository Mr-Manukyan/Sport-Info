import React from "react";
import style from "./HomeContainer.module.css";

import ContentContainer from "./ContentContainer/ContentContainer";
import FullScreenVideo from "./FullScreenVideo/FullScreenVideo";


const HomeContainer = () => {

    return (
      <div className={style.container}>
        <FullScreenVideo />
        <ContentContainer />
      </div>
    )
  
};
export default HomeContainer;
