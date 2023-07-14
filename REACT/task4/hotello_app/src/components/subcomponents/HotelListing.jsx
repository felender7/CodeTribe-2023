import React from 'react';

function HotelListing({ hotels }) {

  
  function truncateText(text, maxLength) {
    if (!text || typeof text !== 'string') {
      return ''; // Return an empty string or handle the case when the text is undefined or not a string
    }
  
    if (text.length <= maxLength) {
      return text;
    }
  
    return text.substring(0, maxLength) + '...';
  }

  return (
    <div>
      <div className='featured mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4>Enjoy free Wi-Fi</h4>
                  <p>We believe that when a hotel advertises free WiFi, they should provide travelers with a fast and reliable connection. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4>Concierge service</h4>
                  <p>Top-tier hotels have a lot to recommend them: luxurious spas, twice-daily room service, and superb on-site restaurants.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4>Pool access</h4>
                  <p>Hotels with pool rooms, especially those based in big cities, might require keycard access to get into the pool, spa, and other amenities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='text-center mb-5'>Best Rooms</h2>
      <div className="container mt-6" style={{ marginBottom: "200px" }}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="col">
              <div className="card" style={{ height: "450px" }}>
                <img src={hotel.imageUrl} className="card-img-top" alt="Hotel Image" />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <small className='text-dark'> <i className="bi bi-people"></i> {hotel.guest} adult(s) and {hotel.children} child(ren)</small>
                  <p className="card-text mt-3">{truncateText(hotel.description, 60)}</p><br />
                  <a className="btn btn-outline-success btn-lg" href="#">Book now from R{hotel.price}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelListing;

