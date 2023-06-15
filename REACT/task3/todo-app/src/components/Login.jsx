import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [newSession, setNewSession] = useState({
    email: "",
    password: "",
  });

  // handle input changes
  function InputChange(event) {
    const { name, value } = event.target;

    setNewSession((prevSession) => ({
      ...prevSession,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login will be handled here

    //redirect
    navigate("/home");
  };
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label className="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
        
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Login;
