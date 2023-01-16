import React from "react";
import { Route,Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { withSuspense } from "./components/Common/Hooks/withSuspense";

import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import NavigationContainer from "./components/NavigationContainer/NavigationContainer";
import ScrollTop from "./components/Common/ScrollTop/ScrollTop";
import Loading from "./components/Common/Loading/Loading";

const HomeContainer = withSuspense(React.lazy( () => import("./components/HomeContainer/HomeContainer")))
const DietsContainer = withSuspense(React.lazy( () => import("./components/DietsContainer/DietsContainer.tsx")))
const GalleryContainer = withSuspense(React.lazy( () => import("./components/GalleryContainer/GalleryContainer")))
const ContactUsContainer = withSuspense(React.lazy( () => import("./components/ContactUsContainer/ContactUsContainer.tsx")))
const CardInfo = withSuspense(React.lazy( () => import("./components/GalleryContainer/CardInfo/CardInfo")))

const Abdominal = withSuspense(React.lazy( () => import("./components/NavigationComponents/Abdominal/Abdominal")))
const Biceps = withSuspense(React.lazy( () => import("./components/NavigationComponents/Biceps/Biceps")))
const Broadest = withSuspense(React.lazy( () => import("./components/NavigationComponents/Broadest/Broadest")))
const Buttocks = withSuspense(React.lazy( () => import("./components/NavigationComponents/Buttocks/Buttocks")))
const Chest = withSuspense(React.lazy( () => import("./components/NavigationComponents/Chest/Chest")))
const Forearm = withSuspense(React.lazy( () => import("./components/NavigationComponents/Forearm/Forearm")))
const Legs = withSuspense(React.lazy( () => import("./components/NavigationComponents/Legs/Legs")))
const Shoulders = withSuspense(React.lazy( () => import("./components/NavigationComponents/Shoulders/Shoulders")))
const Trapeze = withSuspense(React.lazy( () => import("./components/NavigationComponents/Trapeze/Trapeze")))
const Triceps = withSuspense(React.lazy( () => import("./components/NavigationComponents/Triceps/Triceps")))




const App = (props) => {
  
  const location = useLocation()

  return (
    <div className="App">
   
       <HeaderContainer />
       <NavigationContainer />
       <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location = {location} >

          <Route exact path={'/'} element = {<HomeContainer /> } />
          <Route exact path='/diets' element = {<DietsContainer /> } />
          <Route exact path='/gallery' element = { <GalleryContainer /> } />
          <Route exact path='/gallery-info/:id' element = { <CardInfo /> } />
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
       <Loading zIndex />
    </div>
  );
};

export default App;
