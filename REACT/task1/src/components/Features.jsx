import React from 'react'
import {ai } from "./Imports";

function Features() {
  return (
    <div>
           {/*App features section*/}
        <section id="features">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div class="container-fluid px-5">
                            <div class="row gx-5">
                                <div class="col-md-6 mb-5">
                                     {/*Feature item*/}
                                    <div class="text-center">
                                        <i class="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">Improving end distrusts </h3>
                                        <p class="text-muted mb-0">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded!</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-5">
                                    {/*Feature item*/}
                                    <div class="text-center">
                                        <i class="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">Become the tended active</h3>
                                        <p class="text-muted mb-0">Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-5 mb-md-0">
                                     {/*Feature item*/}
                                    <div class="text-center">
                                        <i class="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">Message or am nothing</h3>
                                        <p class="text-muted mb-0">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    {/*Feature item*/}
                                    <div class="text-center">
                                        <i class="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">Really boy law county</h3>
                                        <p class="text-muted mb-0">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..'</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 order-lg-0">
                         {/*Features section device mockup*/}
                        
                        <div class="features-device-mockup">
                            <div class="device-wrapper">
                                 
                                     <img  className="img-fluid" src={ai} alt="" style={{with:"100%", height:"100%"}} />
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}
export default Features
