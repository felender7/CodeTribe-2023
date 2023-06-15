import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div className="card-img-left d-none d-md-flex">
     
          </div>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
            <form>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com"/>
                <label for="floatingInputEmail">Email address</label>
              </div>

              <hr/>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password"/>
                <label for="floatingPasswordConfirm">Confirm Password</label>
              </div>

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
              </div>

              <Link to="/"className="d-block text-center mt-2 small">Have an account? Sign In</Link>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Registration
