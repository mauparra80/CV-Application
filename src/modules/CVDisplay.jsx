import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperiences";
import DisplayQualifications from "./DisplayQualifications";

function CVDisplay({formData}) {
  const educations = formData.educationForm.educations;
  const experiences = formData.experienceForm.experiences;
  console.log(formData);
  const qualifications = formData.qualificationForm.qualifications;

  return (
    
    <div className="cv-container">
      <div className="personalDisplay-container">
        <h1>{formData.personalForm.full_name}</h1>
        <div className="personalDetails">
          <p>{formData.personalForm.email}</p>
          <p>{formData.personalForm.phone}</p>
          <p>{formData.personalForm.address}</p>
          <a href={formData.personalForm.link} target="_blank" rel="noreferrer">{formData.personalForm.link}</a>
        </div>
      </div>
      <div className="educationDisplay-container displaySection">
        {educations.length>0 && (
          <>
            <h3 className="section-title">Education</h3>
            {educations.map((education, index) => (
              <DisplayEducation index={index} education={education} key={index}/>
            ))}
          </>
        )}
        
      </div>
      <div className="experienceDisplay-container displaySection">
      {experiences.length>0 && (
          <>
            <h3 className="section-title">Professional Experience</h3>
            {experiences.map((experience, index) => (
              <DisplayExperience index={index} experience={experience} key={index}/>
            ))}
          </>
        )}
      </div>

      <div className="qualificationDisplay-container displaySection">
      {qualifications.length>0 && (

          <>
            <h3 className="section-title">Qualifications</h3>
            {qualifications.map((qualification, index) => (
              <DisplayQualifications index={index} qualification={qualification} key={index}/>
            ))}
          </>
        )}
      </div>
    </div>
      
  )
}

export default CVDisplay;