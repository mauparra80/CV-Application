import { useState } from 'react'
import './App.css'
import PersonalForm from './modules/PersonalForm';





function App() {
  
  //holds all form data
  const [formData, setFormData] = useState({
    personalForm: {
      fullName: '',
      email: '',
      phone: '',
      address: ''
    },
    WorkForm: {
      //array to hold multiple work experiences
      workExperiences: [],
    },
    ExperienceForm: {
      //array to hold multiple experiences
      experiences: [],
    }
  });

  //TODO: make sure this works. difficult to understand
  //it gets passed formType and updateData, but how
  const updateFormData = (formType, updatedData) => {
    console.log(formType);
    console.log(updatedData);

    setFormData((prevData) => ({
      ...prevData,
      [formType]: {
        ...prevData[formType],
        ...updatedData,
      }
    }))
  }




  return (
    <div className="container">
      <div className="menu-container">
        <div className="menu-executiveButtons">
          <button className="clearFormBtn">Cear Resume</button>
          <button className="loadExampleBtn">Load Example</button>
        </div>
        <div className="addContent-container">
          <PersonalForm personalDetails={formData.personalForm} updateFormData={updateFormData} />
        </div>
      </div>

      <div className="display-container">
        <div className="personalDisplay-container">
          {console.log(formData.personalForm.fullName)}
          <h1>{formData.personalForm.fullName}</h1>
          <div className="personalDetails">
            <p>{formData.personalForm.email}</p>
            <p>{formData.personalForm.phone}</p>
            <p>{formData.personalForm.address}</p>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default App
