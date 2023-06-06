import React from 'react'
import {bgPhone } from "./Imports";

function Features() {
  return (
    <div>
           {/*App features section*/}
        <section id="features">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                <div className="col-md-6 mb-5">
                                     {/*Feature item*/}
                                    <div className="text-center">
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Improving end distrusts </h3>
                                        <p className="text-muted mb-0">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded!</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    {/*Feature item*/}
                                    <div className="text-center">
                                        <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Become the tended active</h3>
                                        <p className="text-muted mb-0">Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                     {/*Feature item*/}
                                    <div className="text-center">
                                        <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Message or am nothing</h3>
                                        <p className="text-muted mb-0">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/*Feature item*/}
                                    <div className="text-center">
                                        <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Really boy law county</h3>
                                        <p className="text-muted mb-0">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..'</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-0">
                         {/*Features section device mockup*/}
                        
                        <div className="features-device-mockup">
                            <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                        <stop className="gradient-start-color" offset="0%"></stop>
                                        <stop className="gradient-end-color" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="50" r="50"></circle></svg><svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg ><svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                            <div className="device-wrapper">
                                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                    <div className="screen bg-black">
                                     <img src={bgPhone} alt="" style={{with:"100%" , height:"100%"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
         
            </div>
        </section>
        <section className="bg-light">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-12 col-lg-5">
                        <h2 className="display-4 lh-1 mb-4">The possibilities are beyond your imagination</h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <div className="px-5 px-sm-0"><img className="img-fluid rounded-circle" src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Features
