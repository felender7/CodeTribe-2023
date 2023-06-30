import React from 'react'
import { LogoWhite } from '../components/Imports'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>

<div className="dashboard">
    <div className="dashboard-header bg-dark">
      <img src={LogoWhite} style={{width:"200px"}} classNameName='img-fluid'/>
      <a href="#" className="btn btn-outline-success">Logout</a>
    </div>
    <div className="row">
      <div className="col-md-3">
        <div className="dashboard-sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#"> <i className="bi bi-speedometer2"></i> Dashboard</a>
            </li>
            <li className="nav-item">
              <Link to="/add_hotel" className="nav-link"><i className="bi bi-plus-circle-fill"></i> Add Hotel</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <i className="bi bi-calendar-event"></i> Booked Hotels</a>
            </li>
           
          </ul>
        </div>
      </div>
      <div className="col-md-9">
        <div className="dashboard-content">
          <h3>Welcome to the Dashboard</h3>
          <p>.....</p>

          <hr />
          <h4>Recently Added Hotels</h4>
          <p>Nothing Yet</p>
        </div>
      </div>

      
    </div>
    <div className="dashboard-footer mt-5">
      <p>&copy; 2023 Hotello App. All rights reserved.</p>
    </div>
  </div>
  
    </div>
  )
}

export default Dashboard
