import Utils from "./Utils";

function FormRow({label, updateThisForm, details, index, type}) {

  //fix id to match its form.
  const id = label;
  //creat a displayed label using label. (replace - with ' ')(it is capitalized using css)
  let displayedLabel = label.replace('_',' ');

  return (
    <div className="form-row">
            <label htmlFor={id} className="capitalize" >{displayedLabel}</label>
            {label == 'description' ? 
            <textarea
            className="form-input"
            name={id} 
            id={id}
            onChange={(e) => updateThisForm(e.target.value, label, index)} 
            value={details[label] || ""}>

            </textarea> 
            : <input 
            className="form-input"
            type="text"
            name={id} 
            id={id}
            onChange={(e) => updateThisForm(e.target.value, label, index)} 
            value={details[label] || ""}
            />}
            
    </div>
  )
}

export default FormRow;
