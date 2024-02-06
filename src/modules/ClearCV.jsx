function ClearCV (setFormData) {
  const clearedForm = {
    personalForm: {
      full_name: '',
      email: '',
      phone: '',
      address: ''
    },
    educationForm: {
      //array to hold multiple work experiences
      educations: [],
    },
    experienceForm: {
      //array to hold multiple experiences
      experiences: [],
    }
  }
  setFormData(clearedForm);
}

export default ClearCV;