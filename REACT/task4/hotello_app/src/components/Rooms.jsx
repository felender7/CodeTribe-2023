import React, { useEffect, useState } from 'react'
import Navbar from './subcomponents/Navbar'
import Footer from './subcomponents/Footer'
import HotelListing from './subcomponents/HotelListing'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"

function Rooms() {
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
      <div class="banner">
        <div>
          <h1 className='text-light'>Rooms & suits</h1>
        </div>
      </div>
      <HotelListing hotels={hotels} />
      <Footer />
    </div>
  )
}

export default Rooms
