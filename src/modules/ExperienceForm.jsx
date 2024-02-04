import React, { useState } from "react";
import FormRow from "./FormRow";

function ExperienceForm({experienceForm, updateFormData}) {
  const [experienceExpand, setExperienceExpand] = useState(false);

  function toggleExperienceExpand(e) {
    e.preventDefault()
    setExperienceExpand(!experienceExpand);
  }

  function addExperience(e) {
    e.preventDefault();
    updateFormData('experienceForm', {
      experiences: [...experienceForm.experiences, {}],
    });
  }

  //compiles data for this formtype and calls update state
  const updateThisForm = (newValue, label, index) => {
    const correctedNewValue = {[label]: newValue};
    const updatedExperiences = [...experienceForm.experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], ...correctedNewValue };
    updateFormData('experienceForm', { experiences: updatedExperiences });
  }

  return (
    <div className="experience-container">
      <form>
        <div className="experience-header">
          <h3>experience</h3>
          <button className="dropdown" onClick={toggleExperienceExpand}>\/</button>
        </div>
        {experienceForm.experiences.map((experience, index) => (
          <div key={index}>
            <FormRow label="company_name" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
            <FormRow label="position_title" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
            <FormRow label="start_date" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
            <FormRow label="end_date" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
            <FormRow label="location" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
            <FormRow label="description" updateThisForm={updateThisForm} details={experienceForm.experiences[index]} index={index}/>
          </div>
        ))}
        <button onClick={addExperience}>+ experience</button>
      </form>
    </div>
  );
}
export default ExperienceForm;