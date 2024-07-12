import {Patient} from '../Model/Patient/Patient';

const PatientInfo = (props: {patient: Patient}) => {
    const { patient } = props;
    
    let sphere = patient.sphereFormatted.toFixed(2)
    let cyl = patient.cylinderFormatted.toFixed(2)
    let axis = patient.axis
    let age = patient.age

    return (
        <div>
            <p>DistanceRx: {sphere}/ {cyl} x {axis}</p>
            <p>Age: {age}</p>
      </div>
    )
}

export default PatientInfo