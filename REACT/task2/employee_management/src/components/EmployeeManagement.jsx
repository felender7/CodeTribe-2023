import React, { useSate } from "react";

function EmployeeManagement() {
  //initialize employee
  const [employees, setEmployees] = useSate([]);
  const [newEmployee, setNewEmployee] = useSate({
    id_number: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    image: "",
    position: "",
  });

  // handle input changes

  function InputChange(event) {
    const { firstName, value } = event.target;
    setNewEmployee((prevEmployee) => ({ ...prevEmployee, [firstName]: value }));
  }

  // add employee
  function AddEmployee() {
    setEmployees((prevEmployee) => [...prevEmployee, newEmployee]);
    setEmployees({
      id_number: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      image: "",
      position: "",
    });
  }

  // delete employee
  function DeleteEmployee(id_number) {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id_number !== id_number)
    );
  }

  // update employee
  function UpdateEmployee(id_number, UpdateEmployee) {
    setEmployees((prevEmployee) =>
      prevEmployee.map((employee) =>
        employee.id_number === id_number ? UpdateEmployee : employee
      )
    );
  }

  return <div></div>;
}

export default EmployeeManagement;
