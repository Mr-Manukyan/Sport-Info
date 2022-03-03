import React from 'react'
import AnimatedPage from '../Common/AnimatedPage/AnimatedPage';
import Logo from '../HeaderContainer/Logo/Logo';

import style from './DietsContainer.module.css'

const DietsContainer = () => {
  
  return (
    <AnimatedPage variants={'left'}>
      <div className = {style.container}>
        <Logo />
      </div>
    </AnimatedPage>
    
  )
};

export default DietsContainer
