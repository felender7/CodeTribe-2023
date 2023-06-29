import React from "react";
import Navbar from './subcomponents/Navbar'
import Banner from "./subcomponents/Banner"
import AboutSection from "./subcomponents/AboutSection";
import HotelListing from "./subcomponents/HotelListing";
import CTA from "./subcomponents/CTA";
import Footer from "./subcomponents/Footer";

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <AboutSection/>
        <HotelListing/>
        <CTA/>
        <Footer/>

    </div>
  )
}
export default Home;


