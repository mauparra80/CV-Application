import React, { useState } from "react";
import FormRow from "./FormRow";

function PersonalForm({personalDetails, updateFormData}) {
  const [personalExpand, setPersonalExpand] = useState(false);
  const [expandButton, setExpandButton] = useState("˅");

  function togglePersonalExpand(e) {
    e.preventDefault()
    setPersonalExpand(!personalExpand);
    setExpandButton(personalExpand ? '˅': '✕');
  }

  const updateThisForm = (newValue, label, index = "") => {
    console.log("entered personal value", newValue);
    console.log("entered label", label);
    const labelAndValue = {[label]: newValue};
    updateFormData('personalForm', labelAndValue);
  }

  return (
    <div className="personalDetails-container form-container">
      <form>
        <div className="personalDetails-header formHeader">
          <h3>Personal Details</h3>
          <button className="dropdown" onClick={togglePersonalExpand}>{expandButton}</button>
        </div>
        {personalExpand && (
          <>
          <FormRow label="full_name" updateThisForm={updateThisForm} details={personalDetails}/>
          <FormRow label="email" updateThisForm={updateThisForm} details={personalDetails}/>
          <FormRow label="phone" updateThisForm={updateThisForm} details={personalDetails}/>
          <FormRow label="address" updateThisForm={updateThisForm} details={personalDetails}/>
          </>
        )}
      </form>
    </div>
  )
}

export default PersonalForm;