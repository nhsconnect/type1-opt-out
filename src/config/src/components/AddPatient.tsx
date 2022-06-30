const AddPatient = () => {
    return(
        <div>
            <h2>New Patient</h2>
            <form>
                <label>NHS number</label><br></br>
                <input type="text"
                    required/><br></br>
                <label>First name</label><br></br>
                <input type="text"
                    required/><br></br>
                <label>Last name</label><br></br>
                <input type="text"
                    required/><br></br>
                <label>Date of birth</label><br></br>
                <input type="date" min="1920-01-01"
                    required/><br></br>
                <label>Post code</label><br></br>
                <input type="text"
                    required/><br></br>
                <button>Add patient</button>
                
            </form>
            
        </div>
    )

}

export default AddPatient;