import { useState } from "react";


const AddPatient = () => {
    const [nhsnumber, setNhsnum] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [dateofbirth, setDateofbirth] = useState("")
    const [postcode, setPostcode] = useState("")
    const handlesubmit = (e: any) => {
        e.preventDefault();
        const patient = { nhsnumber, firstname, lastname, dateofbirth, postcode }
        fetch('http://localhost:8000/patients', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patient)
        })

    }

    return (
        <main className="nhsuk-main-wrapper " id="maincontent" role="main">

            <div className="nhsuk-grid-row">
                <div className="nhsuk-grid-column-two-thirds">

                    <form onSubmit={handlesubmit}>
                        <fieldset className="nhsuk-fieldset">
                            <legend className="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
                                <h1 className="nhsuk-fieldset__heading">
                                    New Patient
                                </h1>
                            </legend>
                            <div className="nhsuk-form-group">
                                <label className='nhsuk-label'>NHS number</label>
                                <input className='nhsuk-input nhsuk-u-width-three-quarters' type="text"
                                    required
                                    value={nhsnumber} onChange={(e) => setNhsnum(e.target.value)}
                                />
                            </div>
                            <div className="nhsuk-form-group">
                                <label className='nhsuk-label'>First name</label>
                                <input className='nhsuk-input nhsuk-u-width-three-quarters' type="text"
                                    required
                                    value={firstname} onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className="nhsuk-form-group">
                                <label className='nhsuk-label'>Last name</label>
                                <input className='nhsuk-input nhsuk-u-width-three-quarters' type="text"
                                    required
                                    value={lastname} onChange={(e) => setLastname(e.target.value)}
                                />
                            </div>
                            <div className="nhsuk-form-group">
                                <label className='nhsuk-label'>Date of birth</label>
                                <input className='nhsuk-input nhsuk-u-width-three-quarters' type="date" min="1920-01-01"
                                    required
                                    value={dateofbirth} onChange={(e) => setDateofbirth(e.target.value)}
                                />
                            </div>
                            <div className="nhsuk-form-group">
                                <label className='nhsuk-label'>Post code</label>
                                <input className='nhsuk-input nhsuk-u-width-three-quarters' type="text"
                                    required
                                    value={postcode} onChange={(e) => setPostcode(e.target.value)}
                                />
                            </div>
                        </fieldset>
                        <button className="nhsuk-button">Add patient</button>

                    </form>
                </div>
            </div>


        </main>
    )

}

export default AddPatient;