import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PatientsList from "./PatientsList";


const Patients = () => {
  const [name, useName] = useState("hamza");
  const navigate = useNavigate();
  const [patients, setPatient] = useState()
  /*([
    {nhs_number : '787879584043',first_name : 'Tony',last_name  : 'Smith',
     post_code : 'Ty9 3AW', date_of_birth : "2000-01-10"}
     ,
    {nhs_number : '8393817272', first_name : 'Simon',last_name  : 'Mac',
     post_code : 'Ty9 3AW', date_of_birth : "2000-01-10"}
  ])*/
  

  useEffect(() => {
    fetch('http://localhost:8000/patients').
      then(res => {
        return res.json();
      }).then(data => {setPatient(data);
            console.log(data)});
      console.log('HI')      
      console.log(patients)
    
  },[])

  return (
    <>
    {patients && <PatientsList patients={patients}/> }
    <button onClick={() => navigate('/config/addpatient')}>Add patient</button>
    </>
    )
  }
  


export default Patients;