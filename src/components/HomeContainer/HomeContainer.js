import React from "react";
import style from "./HomeContainer.module.css";

import ContentContainer from "./ContentContainer/ContentContainer";
import FullScreenVideo from "./FullScreenVideo/FullScreenVideo";
import AnimatedPage from "../Common/AnimatedPage/AnimatedPage";

const HomeContainer = () => {
  return (
    <AnimatedPage variants={'left'}>
      <div className={style.container}>
        <FullScreenVideo />
        <ContentContainer />
      </div>
    </AnimatedPage>
  );
};

export default HomeContainer;
