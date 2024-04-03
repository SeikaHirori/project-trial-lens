import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Patient } from './Model/Patient'

function App() {
  const [count, setCount] = useState(0)
  const [patient, setPatient] = useState<Patient>(new Patient(100,100,1,24))

  const changePatient = (event) => {
    event.preventDefault()

    const newPatient: Patient = new Patient(200,200,2,49)

    setPatient(newPatient)
  }

  return (
    <>
      <div>
        <p>
          Patient info
        </p>

        <p>Sphere: {patient.sphereFormatted}</p>
        <p>Cylinder: {patient.cylinderFormatted}</p>
        <p>Axis: {patient.axis}</p>
        <p>Age: {patient.age}</p>
      </div>
      <div>
        {/* Button for change patient */}
      </div>
    </>
  )
}

export default App
