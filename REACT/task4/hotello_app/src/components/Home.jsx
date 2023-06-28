import React from "react";
import Navbar from './subcomponents/Navbar'
import Banner from "./subcomponents/Banner"
import AboutSection from "./subcomponents/AboutSection";

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <AboutSection/>
    </div>
  )
}
export default Home;


