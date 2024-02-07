import { useEffect, useState } from 'react'
import './App.css'
import PersonalForm from './modules/PersonalForm';
import EducationForm from './modules/EducationForm';
import ExperienceForm from './modules/ExperienceForm';
import CVDisplay from './modules/CVDisplay';
import LoadExample from './modules/LoadExample';
import ClearCV from './modules/ClearCV';
import QualificationForm from './modules/QualificationForm';


/*TODO:
add github link to personal details
add browser memory
-when done, try to export to pdf somehow.  */



function App() {
  const storedData = JSON.parse(localStorage.getItem('data'));

  const templateData = {
    personalForm: {
      full_name: '',
      email: '',
      phone: '',
      address: '',
      link: ''
    },
    educationForm: {
      //array to hold multiple work experiences
      educations: [],
    },
    experienceForm: {
      //array to hold multiple experiences
      experiences: [],
    },
    qualificationForm: {
      qualifications: [],
    }
  };
  
  //holds all form data
  const [formData, setFormData] = useState(storedData ? storedData : templateData);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(formData));
  }, [formData])


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
          <button className="clearFormBtn" onClick={() => ClearCV(setFormData)}>Clear CV</button>
          <button className="loadExampleBtn" onClick={() => LoadExample(setFormData)}>Load Example</button>
        </div>
        <div className="addContent-container">
          <PersonalForm personalDetails={formData.personalForm} updateFormData={updateFormData} />
          <EducationForm educationForm={formData.educationForm} updateFormData={updateFormData} />
          <ExperienceForm experienceForm={formData.experienceForm} updateFormData={updateFormData} />
          <QualificationForm qualificationForm={formData.qualificationForm} updateFormData={updateFormData} />
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
