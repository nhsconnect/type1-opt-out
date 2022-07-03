
import React from 'react'
const PatientsList = (patients:any) => {

    return(
    
   <div>
    
      
    <tr className="nhsuk-table__row">
    <td>NHS number</td>
    <td> First name </td>
    <td> Last name </td>
    <td> Date of birth </td>
    <td> Post code </td>
    </tr>
     
    {patients.patients.map((patient:any) => (
    <div key = {patient.nhs_number}>
        <tr className="nhsuk-table__body">
      <td className='nhsuk-table__cell'>{patient.nhs_number}</td>
      <td className='nhsuk-table__cell'>{patient.first_name}</td>
      <td className='nhsuk-table__cell'>{patient.last_name}</td>
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