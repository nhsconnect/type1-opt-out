import React from "react";
import { useState } from "react";

const Patients = () => {
  const [name, useName] = useState("hamza");
  const [patients, setPatient] = useState([
    {nhs_number : '787879584043',first_name : 'Tony',last_name  : 'Smith',
     post_code : 'Ty9 3AW', date_of_birth : "2000-01-10"},
    {nhs_number : '8393817272', first_name : 'Simon',last_name  : 'Mac',
     post_code : 'Ty9 3AW', date_of_birth : "2000-01-10"}
  ])
  return (
    <><><h1> Patients </h1><p> {name} </p></>
    <>{patients.map((patient) =>
    <div key = {patient.nhs_number}>
      {patient.first_name}
    </div>

    )}</></>
  );
};

export default Patients;