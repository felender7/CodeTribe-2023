import React from 'react'

function HotelListing({ hotels }) {

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    return text.slice(0, maxLength) + "...";
  }

  return (
    <div>
      <div className='featured mb-5'>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="d-flex align-items-center">
                <div>
                  <h4>Enjoy free Wi-Fi</h4>
                  <p>We believe that when a hotel advertises free WiFi, they should provide travelers with a fast and reliable connection. </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex align-items-center">
                <div>
                  <h4>Concierge service</h4>
                  <p>Top-tier hotels have a lot to recommend them: luxurious spas, twice-daily room service and superb on-site restaurants.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex align-items-center">
                <div>
                  <h4>Pool access</h4>
                  <p>Hotel has pool room, in particular, hotels based in big cities might require keycard access to get into the pool. Spa, and amenity access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='text-center mb-5'>Best Rooms</h2>
      <div class="container mt-6" style={{ marginBottom: "200px" }}>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {hotels.map((hotel) => (
            <div key={hotel.id}>
              <div class="col">
                <div class="card" style={{ height: "427px" }}>
                  <img src={hotel.imageUrl} class="card-img-top" alt="Hotel Image" />
                  <div class="card-body">
                    <h5 class="card-title">{hotel.name}</h5>
                    <small className='text-dark'> <i class="bi bi-people"></i> {hotel.guest} adult(s) and {hotel.children} child(ren)</small>
                    <p class="card-text mt-3">{truncateText(hotel.description, 60)}    </p><br />
                    <a class="btn btn-outline-success btn-lg" href="#">Book now from R{hotel.price}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HotelListing
