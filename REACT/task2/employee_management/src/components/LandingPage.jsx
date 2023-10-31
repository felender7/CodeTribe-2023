import React, { useState } from "react";
import data from "../data/data.json";

function LandingPage() {
  const [employees, setEmployees] = useState(data);
  const numbers=[1,2,3,4]
  return (
   <div className="bg-light p-5 showdow-md text-center mt-5 mb-5">
    <h3>Welcome to Employment Management App </h3>
    <p>"Empower Your Workforce, Excel in Employment Management!"</p>
      
      
   
   </div>
  )
}

export default LandingPage;
