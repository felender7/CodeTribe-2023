import React from 'react'
import { LogoWhite } from '../components/Imports'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="#">Bootstrap 5 Admin Dashboard</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item active">
<a class="nav-link" href="#">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Dashboard</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Users</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Settings</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="row">
<div class="col-md-12">
<h1>Bootstrap 5 Admin Dashboard</h1>
<p>This is a simple Bootstrap 5 admin dashboard. It includes a navigation bar, a navbar collapse, and a container with a row and a column.</p>
</div>
</div>
</div>
  
    </div>
  )
}

export default Dashboard
