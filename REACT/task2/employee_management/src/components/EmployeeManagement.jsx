import data from "../data/data.json";
import React, { useState } from "react";
function EmployeeManagement() {

  
  const [employees, setEmployees] = useState(data);
  const [newEmployee, setNewEmployee] = useState({
    idNumber: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    position: "",
    image: "",
  });

  // handle input changes
  function InputChange(event) {
    const { name, value } = event.target;

    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  }

  // add employee
  function AddEmployee() {
    
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setNewEmployee({
      idNumber: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      position: "",
      image: "",
    });
    if (newEmployee.idNumber !== "") {
      document.getElementById("status").innerHTML =
        "Employee details saved successfully";

      console.log(newEmployee);
    } else {
      document.getElementById("status").innerHTML =
        "Error saving some fields are missing";
    }


  }

  // delete employee
  function DeleteEmployee(idNumber) {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.idNumber !== idNumber)
    );
  }

  // update employee
  function UpdateEmployee(idNumber, UpdateEmployee) {
    setEmployees((prevEmployee) =>
      prevEmployee.map((employee) =>
        employee.idNumber === idNumber ? UpdateEmployee : employee
      )
    );
  }

  //search employee
  function searchEmployee(idNumber) {
    const employee = employees.find(
      (employee) => employee.idNumber === idNumber
    );
    if (employee) {
      console.log("Found Employee:", employee);
    } else {
      console.log("Employee not found");
    }
  }

  
  return (
    
    <div>
      <div>
        <div className="d-flex" role="search" mt-2>
          <input
            className="form-control me-2"
            type="search employee"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => searchEmployee(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
      </div>
      <div id="status" className="alert alert-primary"></div>
      <hr />
      <div className="row">
        <h4>Add Employee</h4>
        <hr />
        <form className="col-md-6 bg-light p-3  shadow-sm needs-validation" novalidate>
          <div className="mb-3  ">
            <input
              className="form-control"
              type="text"
              name="idNumber"
              placeholder="ID Number"
              value={newEmployee.idNumber}
              onChange={InputChange}
              required
              id="id_number"
            />
             <div class="invalid-feedback">
           Please provide a valid ID Number.
        </div>
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={newEmployee.firstName}
              onChange={InputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              value={newEmployee.lastName}
              onChange={InputChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="emailAddress"
              placeholder="Email Address"
              value={newEmployee.emailAddress}
              onChange={InputChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={newEmployee.phoneNumber}
              onChange={InputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="position"
              placeholder="position"
              value={newEmployee.position}
              onChange={InputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              accept="image/*"
              className="form-control"
              type="file"
              name="image"
              placeholder="upload.."
              value={newEmployee.image}
              onChange={InputChange}
              required
            />
          </div>

          <button className="btn btn-primary" onClick={AddEmployee} type="submit">
            Add
          </button>

          <hr />
        </form>

        <div className="col-md-6 ">
         
          {employees.map((employee) => (
            <div key={employee.idNumber} className="bg-light p-3  shadow-sm">
               <div className="row">
            <div className="col-md-4"> <img src={employees.image="https://placehold.co/128x128"} alt="" /> </div>
            <div className="col-md">
            <span>
                <b>Name:</b> {employee.firstName} {employee.lastName}{" "}
              </span>
              <br />
              <span>
                <b>Position:</b> {employee.position}
              </span>
              <br />
              <span>
                <b>Email Address:</b> {employee.emailAddress}{" "}
              </span>
              <br />
              <span>
                <b>Phone:</b> {employee.phoneNumber}
              </span>
             
            </div>
          </div>
              
              <hr />

              <button
                onClick={() => DeleteEmployee(employee.idNumber)}
                className="btn btn-danger btn-sm p-3"
              >
                Delete
              </button>
              <span style={{ marginRight: "5px" }}></span>
              <button
                className="btn btn-success btn-sm p-3"
                onClick={() =>
                  UpdateEmployee(employee.idNumber, {
                    ...employee,
                    idNumber: "",
                  })
                }
              >
                Update
              </button>
            </div>
          ))}
          <br />
          <br />
        </div>
      </div>
     
    </div>
  );
}

export default EmployeeManagement;
