import React from 'react'
import { Room1,Room2,Room3,Room4 } from '../Imports'

function HotelListing() {
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
    <div class="container mt-6" style={{marginBottom:"200px"}}>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <div class="col">
        <div class="card">
          <img src={Room1} class="card-img-top" alt="Hotel Image"/>
          <div class="card-body">
            <h5 class="card-title">Deluxe Dark Room</h5>
            <small className='text-dark'> <i class="bi bi-people"></i> 3 adult(s) and 2 child(ren)</small> <br />
            <p class="card-text mt-3">This comfortable, modern hotel is set in the urban center of Pontevedra, 10 minutes’ wa... </p>
            <br />
            <a class="btn btn-outline-success btn-lg"  href="#">Book now from R400.00</a>
          </div>
        </div>
      </div>
     
      <div class="col">
        <div class="card">
          <img src={Room2} class="card-img-top" alt="Hotel Image"/>
          <div class="card-body">
            <h5 class="card-title">Standart Big Room</h5>
            <small className='text-dark'> <i class="bi bi-people"></i> 3 adult(s) and 2 child(ren)</small> 
            <p class="card-text mt-3">Ah, the humble studio apartment. At one time, this dwelling was considered to be the ho... </p> <br />
            <a class="btn btn-outline-success btn-lg"  href="#">Book now from R400.00</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={Room3} class="card-img-top" alt="Hotel Image"/>
          <div class="card-body">
            <h5 class="card-title">Standart One Person Room</h5>
            <small className='text-dark'> <i class="bi bi-people"></i> 3 adult(s) and 2 child(ren)</small> 
            <p class="card-text mt-3">The classic room is equipped with desk and chair, 2 single beds, TV and plenty of stora...     </p><br />
            <a class="btn btn-outline-success btn-lg"  href="#">Book now from R400.00</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={Room4} class="card-img-top" alt="Hotel Image"/>
          <div class="card-body">
            <h5 class="card-title">Studio Broadway Room</h5>
            <small className='text-dark'> <i class="bi bi-people"></i> 3 adult(s) and 2 child(ren)</small> <br />
            <p class="card-text mt-3"> Classic Rooms in the our Hotel have been refurbished to a very high standard. Our class...</p> <br />
            <a class="btn btn-outline-success btn-lg"  href="#">Book now from R400.00</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
  )
}
export default HotelListing
