import React from 'react'
import './carousel.css';

function Banner() {
  return (
    <>
    <div>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light" >
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner ">
      <div className="carousel-item active mb-3">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div className="container">
          <div className="carousel-caption text-center">
            <h1>Example headline.</h1>
            <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-outline-success" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item mb-3">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-outline-success" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item mb-3">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div className="container">
          <div className="carousel-caption text-center">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-outline-success" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>

    
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <br />
  <div className='search-rates mt-6'>
    <input type="text" name="" id="" placeholder='pickdate' />
    <input type="text" name="" id="" />
  </div>
    </div>
</>
  )
}

export default Banner
