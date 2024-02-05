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
        <div className="education-header formHeader">
          <h3>Education</h3>
          <button className="dropdown" onClick={toggleEducationExpand}>{expandButton}</button>
        </div>
        {educationExpand && (
          <>
          {educationForm.educations.map((education, index) => (
            <div key={index}>
              <FormRow label="school" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
              <FormRow label="degree" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
              <FormRow label="start_date" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
              <FormRow label="end_date" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
              <FormRow label="location" updateThisForm={updateThisForm} details={educationForm.educations[index]} index={index}/>
            </div>
          ))}
          <button onClick={addEducation}>+ Education</button>
          </>
        )}
        
      </form>
    </div>
  );
}
export default EducationForm;