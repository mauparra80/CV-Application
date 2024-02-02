import { useState } from 'react'
import './App.css'

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

function PersonalFormRow({label, handlePersonalChange, personalDetails}) {
  let capitalizedLabel = Capitalize(label);
  const id = `personal-${label}`;
  if (label === 'fullName') {capitalizedLabel = 'Full Name';}
  
  return (
    <div className="form-row">
            <label htmlFor={id}>{capitalizedLabel}</label>
            <input 
              type="text" 
              name={id} 
              id={id}
              onChange={handlePersonalChange} 
              value={personalDetails[label] || ""}
              />
    </div>
  )
}

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [personalExpand, setPersonalExpand] = useState(false);

  function handlePersonalChange(e) {
    switch(e.target.id){
      case ("personal-fullName"): {
        setPersonalDetails({...personalDetails, fullName: e.target.value});
        break;
      }
      case ("personal-email"):  {
        setPersonalDetails({...personalDetails, email: e.target.value});
        break;
      }
      case ("personal-phone"):  {
        setPersonalDetails({...personalDetails, phone: e.target.value});
        break;
      }
      case ("personal-address"):  {
        setPersonalDetails({...personalDetails, address: e.target.value});
        break;
      }
    } 
  }

  function togglePersonalExpand(e) {
    e.preventDefault()
    setPersonalExpand(!personalExpand);
    console.log(personalDetails);
  }

  

  




  return (
    <div className="container">
      <div className="menu-container">
        <div className="menu-executiveButtons">
          <button className="clearFormBtn">Cear Resume</button>
          <button className="loadExampleBtn">Load Example</button>
        </div>
        <div className="addContent-container">
          <div className="personalDetails-container">
          <form>
            <div className="personalDetails-header">
              <h3>Personal Details</h3>
              <button className="dropdown" onClick={togglePersonalExpand}>\/</button>
            </div>
            {personalExpand && (
              <>
              <PersonalFormRow label="fullName" handlePersonalChange={handlePersonalChange} personalDetails={personalDetails}/>
              <PersonalFormRow label="email" handlePersonalChange={handlePersonalChange} personalDetails={personalDetails}/>
              <PersonalFormRow label="phone" handlePersonalChange={handlePersonalChange} personalDetails={personalDetails}/>
              <PersonalFormRow label="address" handlePersonalChange={handlePersonalChange} personalDetails={personalDetails}/>
              </>
            )}
            

          </form>
          </div>
        </div>
      </div>

      <div className="display-container">
        <div className="personalDisplay-container">
          <h1>{personalDetails.fullName}</h1>
          <div className="personalDetails">
            <p>{personalDetails.email}</p>
            <p>{personalDetails.phone}</p>
            <p>{personalDetails.address}</p>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default App
