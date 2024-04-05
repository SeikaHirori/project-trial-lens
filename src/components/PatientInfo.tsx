import {Patient} from '../Model/Patient';

const PatientInfo = (props: {patient: Patient}) => {
    const { patient } = props;

    return (
        <div>
            <p>
                Patient info
            </p>

            <p>Sphere: {patient.sphereFormatted}</p>
            <p>Cylinder: {patient.cylinderFormatted}</p>
            <p>Axis: {patient.axis}</p>
            <p>Age: {patient.age}</p>
      </div>
    )
}

export default PatientInfo