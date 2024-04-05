import React, { SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Patient } from './Model/Patient/Patient'
import PatientInfo from './components/PatientInfo'
import AnswerPrompt from './components/AnswerPrompt'

function App() {
  const [patient, setPatient] = useState<Patient>(new Patient(100,100,1,24))
  const [userAnswer, setUserAnswer] = useState<number>(0)
  const [isTrialLensNeeded, setIsTrialLensNeeded] = useState<boolean>(true)
  

  const changePatient = (event) => {
    event.preventDefault()

    const newPatient: Patient = new Patient(200,200,2,49)

    setPatient(newPatient)
  }

  const handleAnswerChange = (event) => {
    const numInput = event.target.value

    console.log(numInput)
    setUserAnswer(numInput)
  }

  const checkAnswer = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("checking answer!")

    console.log("Does user think trial lens are needed?");
    
    if (isTrialLensNeeded) {
      console.log("They said: YES!");

    } else {
      console.log("They said: NO!");
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
      />
    </>
  )
}

export default App
