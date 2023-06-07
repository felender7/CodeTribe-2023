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

  return <div></div>;
}

export default EmployeeManagement;
