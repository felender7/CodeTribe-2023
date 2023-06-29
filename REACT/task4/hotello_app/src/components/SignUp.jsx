import React from 'react'
import { Slider1 } from './Imports'
function SignUp() {
  return (
    <div className="centered-form bg-image ">
    <div className="card" style={{width: "600px"}}>
      <div className="card-body">
        <h4 className="card-title">SIGN UP</h4>
        <hr />
        <form>
          <div className="mb-3">
            <label for="inputEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Enter email"/>
          </div>
          <div className="mb-3">
            <label for="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-outline-success">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp
