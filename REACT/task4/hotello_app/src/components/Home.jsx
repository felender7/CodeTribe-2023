import React from "react";
import Navbar from "./subcomponents/Navbar";
import Footer from "./subcomponents/Footer";
import Banner from "./subcomponents/Banner";
import AboutSection from "./subcomponents/AboutSection";
import HotelListing from "./subcomponents/HotelListing";
import CTA from "./subcomponents/CTA";



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


