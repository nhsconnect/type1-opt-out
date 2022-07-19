
import React from 'react'
const PatientsList = (patients: any) => {

  return (
    
    <div>

      
      <tr className="nhsuk-table__row">
        <td className='nhsuk-table__cell'>NHS number</td>
        <td className='nhsuk-table__cell'> First name </td>
        <td className='nhsuk-table__cell'> Last name </td>
        <td className='nhsuk-table__cell'> Date of birth </td>
        <td className='nhsuk-table__cell'> Post code </td>
      </tr>

      {patients.patients.map((patient: any) => (
        <div key={patient.nhs_number}>
          <tr className="nhsuk-table__row">
            <td className='nhsuk-table__cell'>{patient.nhs_number}</td>
            <td className='nhsuk-table__cell'>{patient.first_name}</td>
            <td className='nhsuk-table__cell'>{patient.last_name}</td>
            <td className='nhsuk-table__cell'>{patient.date_of_birth}</td>
            <td className='nhsuk-table__cell'>{patient.post_code}</td>
          </tr>
        </div>
      )
      )}

    </div>
    


  )
}

export default PatientsList;