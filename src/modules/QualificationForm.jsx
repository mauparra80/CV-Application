import React, { useState } from "react";
import FormRow from "./FormRow";

function QualificationForm({qualificationForm, updateFormData}) {
  const [qualificationExpand, setQualificationExpand] = useState(false);
  const [expandButton, setExpandButton] = useState("˅");

  function toggleQualificationExpand(e) {
    e.preventDefault()
    setQualificationExpand(!qualificationExpand);
    setExpandButton(qualificationExpand ? '˅': '✕');
  }

  function addQualification(e) {
    e.preventDefault();
    updateFormData('qualificationForm', {
      qualifications: [...qualificationForm.qualifications, {}],
    });
  }

  function removeQualification(e, index) {
    e.preventDefault();
    const updatedQualifications = [...qualificationForm.qualifications];
    updatedQualifications.splice(index, 1); //extract index section
    updateFormData('qualificationForm', {qualifications: updatedQualifications});
  }

  //compiles data for this formtype and calls update state
  const updateThisForm = (newValue, label, index) => {
    const correctedNewValue = {[label]: newValue};
    const updatedQualifications = [...qualificationForm.qualifications];
    updatedQualifications[index] = { ...updatedQualifications[index], ...correctedNewValue };
    updateFormData('qualificationForm', { qualifications: updatedQualifications });
  }

  return (
    <div className="qualification-container form-container">
      <form>
        <div className="qualification-header formHeader" onClick={toggleQualificationExpand}>
          <h3>qualification</h3>
          <button className="dropdown" >{expandButton}</button>
        </div>
        {qualificationExpand && (
          <>
          {qualificationForm.qualifications.map((qualification, index) => (
            <div key={index} className="form-section">
              {qualificationForm.qualifications.length>1 && (
                <>
                <hr></hr>
                <div className="formSection-divider">
                  <p><b>Qualification {index+1}</b></p>
                  <button className="deleteSectionBtn" onClick={(e) => removeQualification(e, index)}>Delete Section</button>
                </div>
                </>
              )}
              <FormRow label="topic" updateThisForm={updateThisForm} details={qualificationForm.qualifications[index]} index={index}/>
              <FormRow label="description" updateThisForm={updateThisForm} details={qualificationForm.qualifications[index]} index={index}/>
            </div>
          ))}
          <button className="addSectionBtn" onClick={addQualification}>+ qualification</button>
          </>
        )}
        
        
      </form>
    </div>
  );
}
export default QualificationForm;