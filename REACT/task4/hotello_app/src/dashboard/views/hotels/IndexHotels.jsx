import React from "react";

function ListHotels({ hotels }) {
  return (
    <div>
      <h3>Hotel List</h3>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          
          <h4>{hotel.name}</h4>
          <p>{hotel.description}</p>
          <p>Guests: {hotel.guest}</p>
          <p>Children: {hotel.children}</p>
          <p>Price: {hotel.price}</p>
          <img src={hotel.imageUrl} alt="Hotel" />
        </div>
      ))}
    </div>
  );
}
export default ListHotels;

