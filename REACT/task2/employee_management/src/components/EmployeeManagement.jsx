import React, { useSate } from "react";

function EmployeeManagement() {
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

  //

  return <div></div>;
}

export default EmployeeManagement;
