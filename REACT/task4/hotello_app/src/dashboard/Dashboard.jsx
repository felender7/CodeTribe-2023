import React from 'react'
import { LogoWhite } from '../components/Imports'

function Dashboard() {
  return (
    <div>

<div class="dashboard">
    <div class="dashboard-header bg-dark">
      <img src={LogoWhite} style={{width:"200px"}} className='img-fluid'/>
      <a href="#" class="btn btn-outline-success">Logout</a>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="dashboard-sidebar">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#"> <i class="bi bi-speedometer2"></i> Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-plus-circle-fill"></i> Add Hotel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <i class="bi bi-calendar-event"></i> Booked Hotels</a>
            </li>
           
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <div class="dashboard-content">
          <h3>Welcome to the Dashboard</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, dolores.</p>
        </div>
      </div>
    </div>
    <div class="dashboard-footer">
      <p>&copy; 2023 Hotello App. All rights reserved.</p>
    </div>
  </div>
  
    </div>
  )
}

export default Dashboard
