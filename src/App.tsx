import React, { useEffect, useState } from 'react'
import './App.css'
import { Patient } from './Model/Patient/Patient'
import PatientInfo from './components/PatientInfo'
import AnswerPrompt from './components/AnswerPrompt'

function App() {
  const [patient, setPatient] = useState<Patient>(new Patient(100,100,1,24))
  const [userAnswer, setUserAnswer] = useState<number>(0)
  const [isTrialLenNotsNeeded, setIsTrialLenNotsNeeded] = useState<boolean>(false)
  
  useEffect(() => {
    document.title = "Project Trial Lens"
  })

  const changePatient = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const newPatient: Patient = new Patient(200,200,2,49)

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
        handleCheckboxNotNeeded={handleCheckboxNotNeeded}      />
    </>
  )
}

export default App
