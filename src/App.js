import React from "react";
import { Route,Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";

import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import NavigationContainer from "./components/NavigationContainer/NavigationContainer";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import DietsContainer from "./components/DietsContainer/DietsContainer";
import AboutUsContainer from "./components/AboutUsContainer/AboutUsContainer";
import ContactUsContainer from "./components/ContactUsContainer/ContactUsContainer";
import ScrollTop from "./components/Common/ScrollTop/ScrollTop";
import Abdominal from "./components/NavigationComponents/Abdominal/Abdominal";
import Biceps from "./components/NavigationComponents/Biceps/Biceps";
import Broadest from "./components/NavigationComponents/Broadest/Broadest";
import Buttocks from "./components/NavigationComponents/Buttocks/Buttocks";
import Chest from "./components/NavigationComponents/Chest/Chest";
import Forearm from "./components/NavigationComponents/Forearm/Forearm";
import Legs from "./components/NavigationComponents/Legs/Legs";
import Shoulders from "./components/NavigationComponents/Shoulders/Shoulders";
import Trapeze from "./components/NavigationComponents/Trapeze/Trapeze";
import Triceps from "./components/NavigationComponents/Triceps/Triceps";



const App = (props) => {
  const location = useLocation()

  return (
    <div className="App">
       
       <HeaderContainer />
       <NavigationContainer />
       <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location = {location} >

          <Route exact path={'/'} element = { <HomeContainer /> } />
          <Route exact path='/diets' element = { <DietsContainer /> } />
          <Route exact path='/aboutUs' element = { <AboutUsContainer /> } />
          <Route exact path='/contactUs' element = { <ContactUsContainer /> }/>

          <Route exact path='/abdominal' element = { <Abdominal /> }/>
          <Route exact path='/biceps' element = { <Biceps /> }/>
          <Route exact path='/broadest' element = { <Broadest /> }/>
          <Route exact path='/buttocks' element = { <Buttocks /> }/>
          <Route exact path='/chest' element = { <Chest /> }/>
          <Route exact path='/forearm' element = { <Forearm /> }/>
          <Route exact path='/legs' element = { <Legs /> }/>
          <Route exact path='/shoulders' element = { <Shoulders /> }/>
          <Route exact path='/trapeze' element = { <Trapeze /> }/>
          <Route exact path='/triceps' element = { <Triceps /> }/>

          <Route path='*' element={<h2>Not Found 404</h2>} />
        </Routes>
       </AnimatePresence>
       <ScrollTop />
    </div>
  );
};

export default App;
