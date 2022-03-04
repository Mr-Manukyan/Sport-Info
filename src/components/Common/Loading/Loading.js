import React from "react";
import style from './Loading.module.css'


// const Loading = () => {
//   return (
//     <div className={style.container}>
//       <div className={style.triangleWrapper}>
//         <Logo logoBox="flex1" logoPhotoSize="logoSize" />
//         <Logo logoBox="flex2" logoPhotoSize="logoSize" />
//         <Logo logoBox="flex3" logoPhotoSize="logoSize" />
//       </div>
//     </div>
//   );
// };

const Loading = () => {
  return (
    <div className={style.container}>
       <div className = {style.wrapper}>
         <span className = {style.text}>Sport Info</span>
         <div className = {style.spinner}></div>
       </div>
    </div>
  );
};

export default Loading;
