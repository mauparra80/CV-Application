import React, { useState } from "react";
import PersonalFormRow from "./PersonalFormRow";

function PersonalForm({personalDetails, updateFormData}) {
  
  const [personalExpand, setPersonalExpand] = useState(false);

  // function updateFormData(e) {
  //   switch(e.target.id){
  //     case ("personal-fullName"): {
  //       setPersonalDetails({...personalDetails, fullName: e.target.value});
  //       break;
  //     }
  //     case ("personal-email"):  {
  //       setPersonalDetails({...personalDetails, email: e.target.value});
  //       break;
  //     }
  //     case ("personal-phone"):  {
  //       setPersonalDetails({...personalDetails, phone: e.target.value});
  //       break;
  //     }
  //     case ("personal-address"):  {
  //       setPersonalDetails({...personalDetails, address: e.target.value});
  //       break;
  //     }
  //   } 
  // }

  function togglePersonalExpand(e) {
    e.preventDefault()
    setPersonalExpand(!personalExpand);
  }

  return (
    <div className="personalDetails-container">
      <form>
        <div className="personalDetails-header">
          <h3>Personal Details</h3>
          <button className="dropdown" onClick={togglePersonalExpand}>\/</button>
        </div>
        {personalExpand && (
          <>
          <PersonalFormRow label="fullName" updateFormData={updateFormData} personalDetails={personalDetails}/>
          <PersonalFormRow label="email" updateFormData={updateFormData} personalDetails={personalDetails}/>
          <PersonalFormRow label="phone" updateFormData={updateFormData} personalDetails={personalDetails}/>
          <PersonalFormRow label="address" updateFormData={updateFormData} personalDetails={personalDetails}/>
          </>
        )}
      </form>
    </div>
  )
}

export default PersonalForm;