import Utils from "./Utils";

function PersonalFormRow({label, updateFormData, personalDetails}) {

  let capitalizedLabel = Utils.Capitalize(label);
  const id = `personal-${label}`;
  if (label === 'fullName') {capitalizedLabel = 'Full Name';}

  const updatePersonalDetails = (newValue) => {
    console.log(newValue);
    const labelAndValue = {[label]: newValue};
    updateFormData('personalForm', labelAndValue);
  }
  
  return (
    <div className="form-row">
            <label htmlFor={id}>{capitalizedLabel}</label>
            <input 
              type="text" 
              name={id} 
              id={id}
              onChange={(e) => updatePersonalDetails(e.target.value)} 
              value={personalDetails[label] || ""}
              />
    </div>
  )
}

export default PersonalFormRow;
