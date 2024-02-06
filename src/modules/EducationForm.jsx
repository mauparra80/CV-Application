import React, { useState } from "react";
import FormRow from "./FormRow";

function EducationForm({educationForm, updateFormData}) {
  const [educationExpand, setEducationExpand] = useState(false);
  const [expandButton, setExpandButton] = useState("˅");

  function toggleEducationExpand(e) {
    e.preventDefault()
    setEducationExpand(!educationExpand);
    setExpandButton(educationExpand ? '˅': '✕');
  }

  function addEducation(e) {
    e.preventDefault();
    updateFormData('educationForm', {
      educations: [...educationForm.educations, {}],
    });
  }

  function removeEducation(e, index) {
    e.preventDefault();
    const updatedEducations = [...educationForm.educations];
    updatedEducations.splice(index, 1); //extract index section
    updateFormData('educationForm', {educations: updatedEducations});
  }

  //compiles data for this formtype and calls update state
  const updateThisForm = (newValue, label, index) => {
    const correctedNewValue = {[label]: newValue};
    const updatedEducations = [...educationForm.educations];
    updatedEducations[index] = { ...updatedEducations[index], ...correctedNewValue };
    updateFormData('educationForm', { educations: updatedEducations });
  }


  return (
    <div className="education-container form-container">
      <form>
        <div className="education-header formHeader" onClick={toggleEducationExpand}>
          <h3>Education</h3>
          <button className="dropdown" >{expandButton}</button>
        </div>
        {educationExpand && (
          <>
          {educationForm.educations.map((education, index) => (
            <div key={index} className="form-section">
              {educationForm.educations.length>1 && (
                <>
                <hr></hr>
                <div className="formSection-divider">
                  <p><b>Education {index+1}</b></p>
                  <button className="deleteSectionBtn" onClick={(e) => removeEducation(e, index)}>Delete Section</button>
                </div>
                </>
              )}
              <FormRow label="school" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
              <FormRow label="degree" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
              <FormRow label="start_date" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
              <FormRow label="end_date" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
              <FormRow label="location" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
            </div>
          ))}
          <button className="addSectionBtn" onClick={addEducation}>+ Education</button>
          </>
        )}
        
      </form>
    </div>
  );
}
export default EducationForm;