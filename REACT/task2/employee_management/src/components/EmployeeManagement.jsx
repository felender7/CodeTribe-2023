import React, { useState } from "react";

function EmployeeManagement() {
  //initialize employee
  const [employees, setEmployees] = useState([]);
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
      document.getElementById("status").innerHTML = "Saved";
      console.log(newEmployee);
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
        <h2>Search Employee</h2>
        <input
          type="text"
          placeholder="ID"
          onChange={(e) => searchEmployee(e.target.value)}
        />
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
            <h4>Add Employee</h4>
            <hr />
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={newEmployee.idNumber}
          onChange={InputChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newEmployee.firstName}
          onChange={InputChange}
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
          className="form-control"
          type="file"
          name="image"
          placeholder="upload.."
          value={newEmployee.image}
          onChange={InputChange}
          required
        />
      </div>

      <button className="btn btn-primary" onClick={AddEmployee}>
        Add
      </button>
      <label id="status"></label>
      <hr />
      </div>
 
        <div className="col-md-6">
        <h4>Employees</h4>
        <hr />
        {employees.map((employee) => (
          <div key={employee.idNumber}>
            <span>ID: {employee.idNumber}</span>
            <span>Name: {employee.firstName}</span>
            <button onClick={() => DeleteEmployee(employee.idNumber)}>
              Delete
            </button>
            <button
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
      </div>
      </div>
    </div>
  );
}

export default EmployeeManagement;
