import {Patient} from '../Model/Patient/Patient';

const PatientInfo = (props: {patient: Patient}) => {
    const { patient } = props;
    
    let sphere = patient.sphereFormatted
    let cyl = patient.cylinderFormatted
    let axis = patient.axis
    let age = patient.age

    return (
        <div>
            <p>
                Patient info
            </p>

            <p>Sphere: {sphere}</p>
            <p>Cylinder: {cyl}</p>
            <p>Axis: {axis}</p>
            <p>Age: {age}</p>
      </div>
    )
}

export default PatientInfo