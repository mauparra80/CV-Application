import { useState } from 'react'
import './App.css'
import PersonalForm from './modules/PersonalForm';
import EducationForm from './modules/EducationForm';
import ExperienceForm from './modules/ExperienceForm';
import CVDisplay from './modules/CVDisplay';


function App() {
  
  //holds all form data
  const [formData, setFormData] = useState({
    personalForm: {
      full_name: '',
      email: '',
      phone: '',
      address: ''
    },
    educationForm: {
      //array to hold multiple work experiences
      educations: [],
    },
    experienceForm: {
      //array to hold multiple experiences
      experiences: [],
    }
  });

  //TODO: make sure this works. difficult to understand
  //it gets passed formType and updateData, but how
  //formType = 'personalForm'
  //updatedData = 'fullName: 'bob'' or 'educations: [{experience1}, {experience2}]
  const updateFormData = (formType, updatedData) => {
    console.log(formType);
    console.log(updatedData);
    console.log(formData.educationForm);

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
          <EducationForm educationForm={formData.educationForm} updateFormData={updateFormData} />
          <ExperienceForm experienceForm={formData.experienceForm} updateFormData={updateFormData} />
        </div>
      </div>

      <div className="display-container">
        <CVDisplay formData = {formData} />
        {/* <div className="cv-container">
          <div className="personalDisplay-container">
            <h1>{formData.personalForm.full_name}</h1>
            <div className="personalDetails">
              <p>{formData.personalForm.email}</p>
              <p>{formData.personalForm.phone}</p>
              <p>{formData.personalForm.address}</p>
            </div>
          </div>

        </div> */}
      </div>
    </div>
  )
  
}

export default App
