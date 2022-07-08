import { useState } from "react";


const UpdatePatient = (patient:any) => {
const [nhsnumber,setNhsnum] =useState(patient.nhsnumber)
const [firstname,setFirstname] = useState(patient.firstname)
const [lastname,setLastname] = useState(patient.lastname)
const [dateofbirth,setDateofbirth] = useState(patient.dateofbirth)
const [postcode,setPostcode] = useState(patient.postcode)
const handlesave= (e:any) => {
    e.preventDefault();
    const patient={nhsnumber,firstname,lastname,dateofbirth,postcode}
    fetch('http://localhost:8000/patients', {
        method: 'get',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(patient)
    })

}
const handleprevious= (e:any) => {
}
const handlenext= (e:any) => {
}
const handleback= (e:any) => {
}


    return(
        <main className="nhsuk-main-wrapper " id="maincontent" role="main">
          
  <div className="nhsuk-grid-row">
    <div className="nhsuk-grid-column-two-thirds">
            
            <form>
            <fieldset className="nhsuk-fieldset">
          <legend className="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
            <h1 className="nhsuk-fieldset__heading">
            New Patient
            </h1>
            </legend>
            <div className="nhsuk-form-group">  
                <label className='nhsuk-label'>NHS number</label>
                <input className= 'nhsuk-input nhsuk-u-width-three-quarters' type="text"
                    required
                    value={patient.nhsnumber} onChange={(e) => setNhsnum(e.target.value)}
                />
                </div>
          <div className="nhsuk-form-group">
                <label className='nhsuk-label'>First name</label>
                <input className= 'nhsuk-input nhsuk-u-width-three-quarters' type="text" 
                    required
                    value={patient.firstname} onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>
          <div className="nhsuk-form-group">
                <label className='nhsuk-label'>Last name</label>
                <input className= 'nhsuk-input nhsuk-u-width-three-quarters' type="text"
                    required
                    value={patient.lastname} onChange={(e) => setLastname(e.target.value)}
                    />
                    </div>
          <div className="nhsuk-form-group">
                <label className='nhsuk-label'>Date of birth</label>
                <input className= 'nhsuk-input nhsuk-u-width-three-quarters' type="date" min="1920-01-01"
                    required
                    value={patient.dateofbirth} onChange={(e) => setDateofbirth(e.target.value)}
                    />
                </div>
          <div className="nhsuk-form-group">
                <label className='nhsuk-label'>Post code</label>
                <input className= 'nhsuk-input nhsuk-u-width-three-quarters' type="text"
                    required
                    value={patient.postcode} onChange={(e) => setPostcode(e.target.value)}
                    />
                </div>
                </fieldset>
                <button className="nhsuk-button" onClick={handlesave}>Save</button>
                <button className="nhsuk-button" onClick={handleback}>Return to Search</button>
                <button className="nhsuk-button" onClick={handleprevious}>Previous</button>
                <button className="nhsuk-button" onClick={handlenext}>Next</button>
                
            </form>
            </div>
        </div>
    
            
        </main>
    )

}

export default UpdatePatient;