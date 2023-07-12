
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import ListHotels from './dashboard/views/hotels/index'

import './App.css';
function App() {

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/galary" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dashboard" element={<DashBoard hotels={hotels}/>}/>
          <Route path="*" element={<PageError/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/sign_up" element={<SignUp/>}/>
          <Route path="/add_hotel" element={<AddHotel/>}/>
          <Route path="/show_hotel" element={<ShowHotel />}/>
          <Route
          path="/list_hotels"
          element={<ListHotels hotels={hotels} />}
        />
         
        </Routes>
    </div>
  );
}

export default App;
