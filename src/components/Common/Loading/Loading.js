import React from "react";
import Logo from "../../HeaderContainer/Logo/Logo";
import style from './Loading.module.css'


const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.triangleWrapper}>
        <Logo logoBox="flex1" logoPhotoSize="logoSize" />
        <Logo logoBox="flex2" logoPhotoSize="logoSize" />
        <Logo logoBox="flex3" logoPhotoSize="logoSize" />
      </div>
    </div>
  );
};

export default Loading;
