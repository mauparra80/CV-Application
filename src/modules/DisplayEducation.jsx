

function DisplayEducation ({index, education}) {


  return (
    <div className="sectionDetails">
      <div>
        <p>
          {education.start_date}
          <span> - </span>
          {education.end_date}
        </p>
        <p>
          {education.location}
        </p>
      </div>
      <div>
        <p><b>{education.school}</b></p>
        <p>{education.degree}</p>
      </div>
    </div>
  )
}

export default DisplayEducation;