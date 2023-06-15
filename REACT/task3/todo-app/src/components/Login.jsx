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
    <div class="container-fluid ps-md-0">
      <div className="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image" ></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Welcome back!</h3>
                  <form onSubmit={handleSubmit}>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={InputChange}
                        required
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={InputChange}
                        required
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div className="text-center">
                        <Link to="/registration" className="small" href="#">
                          Register
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
