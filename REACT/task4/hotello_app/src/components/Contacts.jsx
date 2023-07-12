import React from 'react'
import Navbar from './subcomponents/Navbar'
import Footer from './subcomponents/Footer'

function Contacts() {
  return (
    <div>
      <Navbar/>
      <div class="banner">
        <div>
          <h1 className='text-light'>Get in touch</h1>
        </div>
      </div>


    <section class="container py-5">
        <p>Waters midst. Creature man female. Them You’re female there his for first were have whose and blessed darkness his man Darkness had you’re hath fill were. Gathering may living moveth had evening called behold. Blessed darkness subdue he open she’d of void sea one let after light thing have creeping living the brought</p>
    <div class="row">
      <div class="col-lg-6 mt-5">
  
        <form action="https://formspree.io/f/xzblbkll" method="post">
          <div class="mb-3">
            <input type="text" class="form-control" id="name" placeholder="Name" required/>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" id="email" placeholder='Email' required/>
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="message" rows="5" required placeholder='Message'></textarea>
          </div>
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </form>
      </div>
      <div class="col-lg-6 mt-5">
        <h2>Our Location</h2>
        <p>28 Doornkraal, Annadale</p>
        <div class="map">
       
        </div>
      </div>
    </div>
  </section>
      <Footer/>
    </div>
  )
}

export default Contacts
