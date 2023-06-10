

import React from 'react';
import LandingPage from './components/LandingPage';
import EmployeeManagement from './components/EmployeeManagement';
import Nav from './components/Navigation'
function App() {
  return (
   
    <div className='container'>
       <Nav/>
       <LandingPage/>
      <EmployeeManagement/>
    </div>
 
  );
}

export default App;
