import React, { useState } from "react";
import FormRow from "./FormRow";

function ExperienceForm({experienceForm, updateFormData}) {
  const [experienceExpand, setExperienceExpand] = useState(false);
  const [expandButton, setExpandButton] = useState("˅");

  function toggleExperienceExpand(e) {
    e.preventDefault()
    setExperienceExpand(!experienceExpand);
    setExpandButton(experienceExpand ? '˅': '✕');
  }

  function addExperience(e) {
    e.preventDefault();
    updateFormData('experienceForm', {
      experiences: [...experienceForm.experiences, {}],
    });
  }

  function removeExperience(e, index) {
    e.preventDefault();
    const updatedExperiences = [...experienceForm.experiences];
    updatedExperiences.splice(index, 1); //extract index section
    updateFormData('experienceForm', {experiences: updatedExperiences});
  }

  //compiles data for this formtype and calls update state
  const updateThisForm = (newValue, label, index) => {
    const correctedNewValue = {[label]: newValue};
    const updatedExperiences = [...experienceForm.experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], ...correctedNewValue };
    updateFormData('experienceForm', { experiences: updatedExperiences });
  }

  return (
    <div className="experience-container form-container">
      <form>
        <div className="experience-header formHeader" onClick={toggleExperienceExpand}>
          <h3>experience</h3>
          <button className="dropdown" >{expandButton}</button>
        </div>
        {experienceExpand && (
          <>
          {experienceForm.experiences.map((experience, index) => (
            <div key={index} className="form-section">
              {experienceForm.experiences.length>1 && (
                <>
                <hr></hr>
                <div className="formSection-divider">
                  <p><b>Experience {index+1}</b></p>
                  <button className="deleteSectionBtn" onClick={(e) => removeExperience(e, index)}>Delete Section</button>
                </div>
                </>
              )}
              <FormRow label="company_name" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
              <FormRow label="position_title" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
              <FormRow label="start_date" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
              <FormRow label="end_date" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
              <FormRow label="location" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
              <FormRow label="description" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
            </div>
          ))}
          <button className="addSectionBtn" onClick={addExperience}>+ experience</button>
          </>
        )}
        
        
      </form>
    </div>
  );
}
export default ExperienceForm;