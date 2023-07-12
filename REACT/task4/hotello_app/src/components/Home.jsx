import React, { useEffect, useState } from "react";
import Navbar from "./subcomponents/Navbar";
import Footer from "./subcomponents/Footer";
import Banner from "./subcomponents/Banner";
import AboutSection from "./subcomponents/AboutSection";
import HotelListing from "./subcomponents/HotelListing";
import CTA from "./subcomponents/CTA";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"


function Home() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Retrieve the collection "hotels" from Firestore
        const querySnapshot = await getDocs(collection(db, "hotels"));

        // Map the query snapshot to an array of hotel data objects
        const hotelsData = querySnapshot.docs.map((doc) => doc.data());
        console.log(hotelsData)

        // Set the hotels state with the retrieved data
        setHotels(hotelsData);
      } catch (error) {
        console.error("Error fetching hotels: ", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <AboutSection />
      <HotelListing hotels={hotels} />
      <CTA />
      <Footer />
    </div>
  )
}
export default Home;


