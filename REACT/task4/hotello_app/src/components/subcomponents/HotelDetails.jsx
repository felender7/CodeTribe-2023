import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';  

function HotelDetails() {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchHotelDetails = async () => {
        try {
          // Retrieve the specific hotel document from Firestore based on the id
          const hotelDocRef = doc(db, 'hotels', id);
          const hotelSnapshot = await getDoc(hotelDocRef);
  
          if (hotelSnapshot.exists()) {
            // Set the hotel state with the retrieved data
            setHotel(hotelSnapshot.data());
          } else {
            console.log('Hotel not found');
          }
        } catch (error) {
          console.error('Error fetching hotel details:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchHotelDetails();
    }, [id]);
  
    if (loading) {
      return <div className='text-center p-3 bg-light shadow-sm'>Loading...</div>;
    }
  
    if (!hotel) {
      return <div>Hotel not found.</div>;
    }
  return (
    <div>

<div className="banner mb-5 ">
        <div>
          <h1 className='text-light'>{hotel.name}</h1>
        </div>
      </div>
     <div className="container">
     <div className="row">
        <div className="col-md-8">
        <img src={hotel.imageUrl} alt={hotel.name} style={{width:"800px"}} className='img-fluid mb-5' />
        <br />
        <p style={{textAlign:"justify"}} >{hotel.description}</p>
        </div>
        <div className="col ">
          <div className='p-5 bg-light shadow-sm'>
          <input type="text" name="pick date" id="pickDate"  className="datepicker form-control mb-3" placeholder="Pick Date" style={{borderRadius:"0px"}} />
          <input type="text" name="Days"  className="form-control" placeholder="How Many Night(s)" style={{borderRadius:"0px"}} />
          <div className='price-pernight'>
            R{parseFloat(hotel.price).toFixed(2)} / PER NIGHT
          </div>

        </div>           
          
        </div>
     </div>

     </div>
      
S
    </div>
  )
}

export default HotelDetails
