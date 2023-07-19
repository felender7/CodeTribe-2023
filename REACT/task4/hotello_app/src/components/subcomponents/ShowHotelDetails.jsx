import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore'; // Assuming you have imported the necessary Firebase v9 modules
import { db } from '../../config/firebase'; // Assuming you have configured Firebase

function ShowHotelDetailsPage() {
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
    return <div>Loading...</div>;
  }

  if (!hotel) {
    return <div>Hotel not found.</div>;
  }

  return (
    <div>
      <h2>{hotel.name}</h2>
      <img src={hotel.imageUrl} alt="Hotel" />
      <p>{hotel.description}</p>
      {/* Display other hotel details */}
    </div>
  );
}

export default ShowHotelDetailsPage;