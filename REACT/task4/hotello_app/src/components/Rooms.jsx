import React from 'react'
import Navbar from './subcomponents/Navbar'
import Footer from './subcomponents/Footer'
import HotelListing from './subcomponents/HotelListing'


function Rooms({hotels}) {
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
