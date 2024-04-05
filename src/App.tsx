import React, { SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Patient } from './Model/Patient/Patient'
import PatientInfo from './components/PatientInfo'

function App() {
  const [patient, setPatient] = useState<Patient>(new Patient(100,100,1,24))
  const [userAnswer, setUserAnswer] = useState<number>()
  

  const changePatient = (event) => {
    event.preventDefault()

    const newPatient: Patient = new Patient(200,200,2,49)

    setPatient(newPatient)
  }

  const handleAnswerChange = (event) => {
    const input = event.target.value
    console.log(input)
    setUserAnswer(input)
  }

  const checkAnswer = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("checking answer!")
    
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

      <div>
        {/* Calculate trial lens/ answer box */}
        <form onSubmit={checkAnswer}>
          <input 
            type='number'
            value={userAnswer} 
            onChange={handleAnswerChange}
            step='0.25'
          />
          <button type='submit'>check</button>
        </form>
      </div>
    </>
  )
}

export default App
