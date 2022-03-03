import React from "react";
import useScrollTop from "../Hooks/useGetScrollTop";
import style from "./ScrollTop.module.css";

const ScrollTop = (props) => {


  const scrollTop = useScrollTop();
  const { height,windowHeight,location :{pathname}  } = scrollTop;

  const handle = () => {
      window.scrollTo(0,0)
  }


  if (pathname === '/') {
    return (
      <div className={style.container } 
           style = { {
              opacity: windowHeight >= (height * 1.2) ? 1 : 0,
              transform: windowHeight >= (height * 1.2) ? 'translateY(0px)' : `translateY(-${height / 2}px)` 
          }}>

        <div className={style.wrapper} onClick = {handle}>
          <div className={style.href}>
            <div className={style.scrollUp}></div>
          </div>
        </div>

      </div>
    );
  }else {
      return null
  }
};

export default ScrollTop;
