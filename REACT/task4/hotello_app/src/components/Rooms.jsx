import React from 'react'
import Navbar from './subcomponents/Navbar'
import Footer from './subcomponents/Footer'
import HotelListing from './subcomponents/HotelListing'
import Extras from './subcomponents/Extras'


function Rooms() {
  return (
    <div>
      <Navbar />
      <div class="banner">
        <div>
          <h1 className='text-light'>Rooms & suits</h1>
        </div>
      </div>
      <Extras/>
      <HotelListing />
      <Footer />
    </div>
  )
}

export default Rooms
