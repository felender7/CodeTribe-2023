import React, { useState } from 'react';

function EmployeeManagement() {
    
  //initialize employee
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    idNumber: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    position: '',
    image: ''
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
        idNumber: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        position: '',
        image: ''
    });
    if(newEmployee.idNumber !==''){
        document.getElementById("status").innerHTML = "Saved"
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
        <input type="text" placeholder="ID" onChange={(e) => searchEmployee(e.target.value)} />
      </div>
      <input
        type="text"
        name="idNumber"
        placeholder="ID Number"
        value={newEmployee.idNumber}
        onChange={InputChange}
      />

       <br />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={newEmployee.firstName}
        onChange={InputChange}
      />
 <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={newEmployee.lastName}
        onChange={InputChange}
      />
 <br />
      <input
        type="email"
        name="emailAddress"
        placeholder="Email Address"
        value={newEmployee.emailAddress}
        onChange={InputChange}
      />
 <br />
      <input
        type="number"
        name="phoneNumber"
        placeholder="Phone Number"
        value={newEmployee.phoneNumber}
        onChange={InputChange}
      />
 <br />
      <input
        type="text"
        name="position"
        placeholder="position"
        value={newEmployee.position}
        onChange={InputChange}
        required
      />
 <br />
      <input
        type="file"
        name="image"
        placeholder="upload.."
        value={newEmployee.image}
        onChange={InputChange}
        required
      />
<br />
<button onClick={AddEmployee}>Add</button>
  <label id="status"></label>

<hr />
  <div>
        <h2>Employees</h2>
        {employees.map((employee) => (
          <div key={employee.idNumber}>
            <span>ID: {employee.idNumber}</span>
            <span>Name: {employee.firstName}</span>
            <button onClick={() => DeleteEmployee(employee.idNumber)}>
              Delete
            </button>
            <button
              onClick={() =>
                 UpdateEmployee(employee.idNumber,{
                  ...employee,
                  idNumber: '',
                })
              }
            >
              Update
            </button>
          </div>
        ))}
      </div>


</div>

  ) 
}

export default EmployeeManagement;
