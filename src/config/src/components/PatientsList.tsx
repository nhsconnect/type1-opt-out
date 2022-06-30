
import React from 'react'
const PatientsList = (patients:any) => {

    return(
        <div>
            <h1> Patients </h1><p></p>
            {console.log(patients)}
            
    {patients.patients.map((patient:any) => (
    <div key = {patient.nhs_number}>
        <tr>
      <td>{patient.nhs_number}</td>
      <td>{patient.first_name}</td>
      <td>{patient.last_name}</td>
      <td>{patient.date_of_birth}</td>
      <td>{patient.post_code}</td>
      </tr>
        </div>
    )
    )}
   
    </div>
    )
}





export default PatientsList;