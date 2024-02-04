import Utils from "./Utils";

function FormRow({label, updateThisForm, details, index, type}) {

  //fix id to match its form.
  const id = `${type}-${label}`;
  //creat a displayed label using label. (replace - with ' ')(it is capitalized using css)
  let displayedLabel = label.replace('_',' ');

  return (
    <div className="form-row">
            <label htmlFor={id} className="capitalize" >{displayedLabel}</label>
            <input 
              type="text" 
              name={id} 
              id={id}
              onChange={(e) => updateThisForm(e.target.value, label, index)} 
              value={details[label] || ""}
              />
    </div>
  )
}

export default FormRow;
