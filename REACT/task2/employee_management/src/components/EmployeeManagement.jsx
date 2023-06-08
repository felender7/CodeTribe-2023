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
        <h2>Search Employee</h2>
        <input
          type="text"
          placeholder="ID"
          onChange={(e) => searchEmployee(e.target.value)}
        />
      </div>
      <hr />
      <div className="row">
        <span className="alert alert-primary" role="alert">
          <label id="status"></label>
        </span>
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
              required
              id="validationCustom01"
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

          <hr />
        </div>

        <div className="col-md-6">
          <h4>Employees</h4>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            {employees.map((employee) => (
              <div key={employee.idNumber}>
                <tbody>
                  <tr>
                    <td>{employee.idNumber}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailAddress}</td>
                  </tr>
                </tbody>
                <button
                  onClick={() => DeleteEmployee(employee.idNumber)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
                <button
                  className="btn btn-success btn-sm"
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
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagement;
