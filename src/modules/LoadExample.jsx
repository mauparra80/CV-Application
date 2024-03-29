
function LoadExample(setFormData) {
  const templateFormData = {
    personalForm: {
      full_name: 'John Smith',
      email: 'JohnSmith80@hotmail.com',
      phone: '123-456-7890',
      address: 'Houston, Texas',
      link: ''
    },
    educationForm: {
      //array to hold multiple educations
      educations: [
        {
          school: 'University of Texas at Dallas',
          degree: 'Bachelors in Computer Engineering',
          start_date: '1/2016',
          end_date: '1/2020',
          location: 'Dallas, Texas'
        },
      ],
    },
    experienceForm: {
      //array to hold multiple experiences
      experiences: [
        {
          company_name: 'Web Design Freelance',
          start_date: '9/2023',
          end_date: 'present',
          description: 'while studying under "The Odin Project", created and published multiple sites for local small businesses'
        },
        {
          company_name: 'Eanes ISD',
          position_title: 'Web Design and Comp Science Educator',
          start_date: '6/2022',
          end_date: '8/2023',
          location: 'Austin, Texas',
          description: '-taught more than 150 students in multiple tech-oriented classes including basics in HTML, CSS, javascript and graphic design principles. Ran the robotics department and participated in future engineers of US. Finally, taught fundamentals of Compuer Science using Swift'
        },
        {
          company_name: 'Houston ISD',
          position_title: 'Biology Educator',
          start_date: '6/2020',
          end_date: '6/2022',
          location: 'Houston, Texas',
          description: '-taught 200 students both remote and in person and participated in creation of new course material. head coached the volleyball team, and assisted with math tutoring.'
        }
      ],
    },
    qualificationForm: {
      qualifications: [
        {
          topic: 'Technical Profeciency',
          description: 'HTML, CSS, JavaScript, React.js'
        }
      ]
    }
  }

  setFormData(templateFormData);
}

export default LoadExample;