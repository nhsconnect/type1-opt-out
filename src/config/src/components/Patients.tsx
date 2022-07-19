import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PatientsList from "./PatientsList";


const Patients = () => {
  const [name, useName] = useState("hamza");
  const navigate = useNavigate();
  const [patients, setPatient] = useState(null)
  const [nhsnumber, setNhsnum] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  const handlesearch = (e: any) => {
    e.preventDefault();
    const patient = { nhsnumber, firstname, lastname }
    console.log(patient)

    if (nhsnumber === '' && firstname === '' && lastname === '') {
      setPatient(null)
    }

    else {

      fetch('http://localhost:8000/patients?nhs_number_like=' + nhsnumber + '&first_name_like=' + firstname + '&last_name_like=' + lastname, {
        //http://localhost:8000/patients?nhs_number=787879584043&&?first_name=Tony&&?last_name=smitht
        method: 'get',
        headers: { "Content-Type": "application/json" }
      }).then(res => res.json()).then(result => setPatient(result))
      console.log(patients)
    }
  }

  return (
    <>
      <main className="nhsuk-main-wrapper " id="maincontent" role="main">
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-two-thirds">
            <form>
              <fieldset className="nhsuk-fieldset">
                <legend className="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
                  <h1 className="nhsuk-fieldset__heading">
                    Enter details
                  </h1>
                </legend>
                <div className="nhsuk-form-group">
                  <label className='nhsuk-label'>NHS number</label>
                  <input className='nhsuk-input nhsuk-u-width-three-quarters' type="text"
                    value={nhsnumber} onChange={(e) => setNhsnum(e.target.value)}
                  />
                </div>
                <div className="nhsuk-form-group">
                  <label className='nhsuk-label'>First name</label>
                  <input className='nhsuk-input nhsuk-u-width-three-quarters' type="text"
                    value={firstname} onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="nhsuk-form-group">
                  <label className='nhsuk-label'>Last name</label>
                  <input className='nhsuk-input nhsuk-u-width-three-quarters' type="text"
                    value={lastname} onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </fieldset>

              <button className="nhsuk-button" onClick={handlesearch}>Search</button><span> </span>
              <button className="nhsuk-button">Clear</button><span> </span>
              <button className="nhsuk-button" onClick={() => navigate('/config/addpatient')}>Add patient</button>

            </form>
          </div>
        </div>

        {patients && <PatientsList patients={patients} />}
      </main>

    </>
  )
}



export default Patients;