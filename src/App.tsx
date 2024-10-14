import React, { useEffect, useState } from 'react'
import './App.css'
import { Patient } from './Model/Patient/Patient'
import PatientInfo from './components/PatientInfo'
import AnswerPrompt from './components/AnswerPrompt'
import Problems from './Model/Problems/Problems'

function App() {
  const [patient, setPatient] = useState<Patient>(new Patient(200,-150,180,24))
  const [problems, setProblems] = useState<Problems>(new Problems(5));
  const [userAnswer, setUserAnswer] = useState<number>(0)
  const [submittedAnswer, setSubmittedAnswer] = useState<number | null>(0);
  const [isTrialLenNotsNeeded, setIsTrialLenNotsNeeded] = useState<boolean>(false)
  const [userSubmitted, setUserSubmitted] = useState<boolean>(false)
  
  useEffect(() => {
    document.title = "Project Trial Lens"
  })

  const changePatient = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const newPatient: Patient = new Patient(+400, -250, 180, 49)

    setPatient(newPatient)
  }

  const handleAnswerChange = (event: { target: { value: any } }) => {
    const numInput = event.target.value


    console.log(numInput)
    setUserAnswer(numInput)
  }

  const checkAnswer = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("checking answer!")

    console.log("Does user think trial lens are needed?");
    
    if (isTrialLenNotsNeeded) {
      console.log("They said: YES!");

    } else {
      console.log("They said: NO!");
    }
    
  }

  const handleCheckboxNotNeeded = () => {
    const switcherro = !isTrialLenNotsNeeded

    const message = switcherro 
      ? "Trial lens not needed"
      : "Trial lens is needed"
    setIsTrialLenNotsNeeded(switcherro)
    console.log(`User says that trial lens is ${message}`
    );
    
    console.log(switcherro); 
  }

  const handleUserSubmitted = () => {
    const switcherro = true

    const message = userSubmitted 
      ? "Hmmm, this was corrected before. Checking again."
      : "This is the first correction!"
    console.log(message);
    setUserSubmitted(switcherro)

    if (isTrialLenNotsNeeded === true) {
      setSubmittedAnswer(switcherro ? null : userAnswer)
    } else {
      setSubmittedAnswer(userAnswer)
    }
  }

  return (

    <>
      <PatientInfo patient={patient}/>

      <div>
        {/* Button for change patient */}
      </div>

      <div>
        {/* Refractive Error Type */}
      </div>

      <AnswerPrompt 
        checkAnswer={checkAnswer}
        userAnswer={userAnswer}
        handleAnswerChange={handleAnswerChange}
        isTrialLensNotNeeded={isTrialLenNotsNeeded}
        handleCheckboxNotNeeded={handleCheckboxNotNeeded}   
        handleUserSubmitted={handleUserSubmitted}   
        userSubmitted={userSubmitted}
        submittedAnswer={submittedAnswer}
      />
    </>
  )
}

export default App
