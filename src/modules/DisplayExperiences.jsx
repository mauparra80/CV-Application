function DisplayExperience ({index, experience}) {


  return (
    <div className="sectionDetails">
      <div>
        <p>
          {experience.start_date}
          <span> - </span>
          {experience.end_date}
        </p>
        <p>
          {experience.location}
        </p>
      </div>
      <div>
        <p><b>{experience.company_name}</b></p>
        <p>{experience.position_title}</p>
      </div>
    </div>
  )
}

export default DisplayExperience;