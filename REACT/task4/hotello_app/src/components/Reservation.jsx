import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './subcomponents/Navbar';
import Footer from './subcomponents/Footer';

function Reservation() {
  // Get the query parameter value from the location object
  const location = useLocation();
  const checkInDate = new URLSearchParams(location.search).get('checkindate');
  const checkOutDate = new URLSearchParams(location.search).get('checkoutdate');
  const nrDays = new URLSearchParams(location.search).get('nrDays');
  const totalPrice = new URLSearchParams(location.search).get('totalprice');
  const hoteName = new URLSearchParams(location.search).get('hotelname')


  return (
    <div>
      <Navbar />
      <div class="banner">
        <div>
          <h1 className='text-light'>Booking</h1>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row mt-5 reservation">
          <h6>YOUR RESERVATION</h6>
          <div className="col-md-4">
            <div className='p-3 bg-dark text-light'>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">check-In</label>
                  <input type="text" value={checkInDate} className='form-control mb-3 mt-1' />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Check-Out</label>
                  <input type="text" value={checkOutDate} className='form-control mb-3 mt-1' />
                </div>
              </div>
              <h4 className='mt-3'>{hoteName}</h4>
              <input type="text" value={hoteName} hidden="true" />
              <table width="100%" className='table'>
                <tbody>
                  <tr>
                    <td className='reservation-td-r text-mute'>Night(2):</td>
                    <td className='reservation-td-l text-light'>
                      <label htmlFor=""><strong>{nrDays}</strong></label>
                      <input type="text" value={nrDays} hidden />
                    </td>
                  </tr>
                  <tr>
                    <td className='reservation-td-r text-mute'>Price:</td>
                    <td className='reservation-td-l text-light'>
                      <label htmlFor=""><strong>R {totalPrice}</strong></label>
                      <input type="text" value={totalPrice} hidden />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a class="btn btn-outline-success" href="/rooms">Mofify</a>
          </div>
          <div className="col-8">
            <div class="row personal-details g-3 mb-3">
              <div class="col">
                <input type="text" className="form-control" placeholder="FIRST NAME" aria-label="FIRST NAME" />
              </div>
              <div class="col">
                <input type="text" className="form-control" placeholder="LAST NAME" aria-label="LAST NAME" />
              </div>
            </div>

            <div class="row personal-details g-3">
              <div class="col">
                <input type="text" className="form-control" placeholder="EMAIL ADDRESS" aria-label="EMAIL ADDRESS" />
              </div>
              <div class="col">
                <input type="text" className="form-control" placeholder="TELEPHONE" aria-label="TELEPHONE" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Reservation;