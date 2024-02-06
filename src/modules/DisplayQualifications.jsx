function DisplayQualifications ({index, qualification}) {
  console.log("qualifications ran");

  return (
    <div className="sectionDetails" id="qualificationDetails">
      <div>
        <p>
          <b>• {qualification.topic}</b>
          <span> - </span>
          {qualification.description}
        </p>
      </div>
      
    </div>
  )
}

export default DisplayQualifications;