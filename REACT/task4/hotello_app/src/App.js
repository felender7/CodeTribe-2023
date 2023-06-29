
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Rooms from './components/Rooms'
import Galary from './components/Galary'
import About from './components/About'
import Contacts from './components/Contacts'
import DashBoard from './dashboard/Dashboard'
import PageError from './components/PageError';

import './App.css';
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/galary" element={<Galary />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="*" element={<PageError/>}/>
        </Routes>
    </div>
  );
}

export default App;
