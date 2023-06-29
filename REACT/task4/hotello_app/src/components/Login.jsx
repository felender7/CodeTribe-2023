import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function GoToDashBoardPage(e) {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/dashboard");
        // window.location="/dashboard"
      })
      .catch((error) => {
        console.log(error.message);
        alert("Email or password is wrong");
      });
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-image">
        <div className="card" style={{ width: "600px" }}>
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <form id="loginForm" noValidate>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <div className="invalid-feedback">Please enter a password.</div>
              </div>
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={GoToDashBoardPage}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
