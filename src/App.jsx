import ImageSlider from './components/ImageSlider'
import AboutUs from './components/AboutUs'
import OurCourses from './components/OurCourses'
import LatestNews from './components/LatestNews'
import PastEvents from './components/PastEvents'
import ChairmanMessage from './components/ChairmanMessage'
import OurInstructors from './components/OurInstructors'
import OurAlumni from './components/OurAlumni'
import SuccessStories from './components/SuccessStories'
import ContactUs from './components/ContactUs'
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/AppContext";

function App() {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div className='' >
      <ImageSlider />
      <AboutUs />
      <OurCourses />
      <LatestNews />
      <PastEvents />
      <ChairmanMessage />
      <OurInstructors />
      <OurAlumni />
      <SuccessStories />
      <ContactUs />
    </div>
  )
}

export default App
