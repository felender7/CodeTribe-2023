
import React, { useEffect, useState } from "react";
import { Route, Routes  } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase"

import Home from './components/Home';
import Rooms from './components/Rooms'
import Gallery from './components/Gallery'
import About from './components/About'
import Contacts from './components/Contacts'
import DashBoard from './dashboard/Dashboard'
import PageError from './components/PageError';
import LoginForm from './components/Login';
import SignUp from './components/SignUp';
import AddHotel from './dashboard/views/hotels/New'
import ShowHotel from "./dashboard/views/hotels/Show"
import ListHotels from './dashboard/views/hotels/Index'
import AddGalleriImages from "./dashboard/views/gallery/AddNew";
import ShowHotelDetails from "./components/subcomponents/ShowHotelDetails";

import './App.css';
function App() {

  const [hotels, setHotels] = useState([]);
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Retrieve the collection "hotels" from Firestore
        // Retrieve the collection "gallery" from Firestore
        const querySnapshot = await getDocs(collection(db, "hotels"));
        const querySnapshot_gallery = await getDocs(collection(db, "gallery"));

        // Map the query snapshot to an array of hotel data objects
         // Map the query snapshot to an array of hotel data objects with document ID included
      const hotelsData = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Include the document ID
        ...doc.data(),
      }));
        const galleryData = querySnapshot_gallery.docs.map((doc) => doc.data());
      
        
     
        // Set the hotels state with the retrieved data
        // Set the gallery state with the retrieved data
        setHotels(hotelsData);
        setGallery(galleryData)
      } catch (error) {
        console.error("Error fetching hotels: ", error);
      }
    };

    fetchHotels();
  }, []);
  

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery  gallery={gallery} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dashboard" element={<DashBoard hotels={hotels}/>}/>
          <Route path="*" element={<PageError/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/sign_up" element={<SignUp/>}/>
          <Route path="/add_hotel" element={<AddHotel/>}/>
          <Route path="/show_hotel" element={<ShowHotel />}/>
          <Route path="/add_gallery" element={<AddGalleriImages/>}/>
          <Route
          path="/list_hotels"
          element={<ListHotels hotels={hotels} />}
        />
         <Route path="/show_hotel_details/:id" element={<ShowHotelDetails hotels={hotels}/>} />  
         
        </Routes>
    </div>
  );
}

export default App;
