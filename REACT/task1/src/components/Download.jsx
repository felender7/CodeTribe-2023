import React from 'react'
import { appStoreBadge, googlePlayBadge } from "./Imports";
function Download() {
  return (
    <div>
       <section className="bg-gradient-primary-to-secondary" id="download">
        <div className="container px-5">
          <h2 className="text-center text-white font-alt mb-4">
            Get the app now!
          </h2>
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
              <img className="app-badge" src={googlePlayBadge} alt="..." />
            </a>
            <a href="#!">
              <img className="app-badge" src={appStoreBadge} alt="..." />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Download
