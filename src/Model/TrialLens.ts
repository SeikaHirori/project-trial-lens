import { Patient } from "./Patient/Patient";
import { RefractiveErrorTypeAbstract } from "./RET/RefractiveErrorTypeAbstract";
import { Myopia } from "./RET/Myopia";
import { Hyperopic } from "./RET/Hyperopic";
import { Emmetropic } from "./RET/Emmetropic";
import { debugConcreteRefractiveErrorType } from "./RET/ConcreteRefractiveErrorType";

class TrialLens {
    currentPatient: Patient;


    constructor(patient: Patient) {
        this.currentPatient = patient;
    }

    // // TODO
    determineRefractiveErrorType(patient: Patient): RefractiveErrorTypeAbstract {
        const patientSphere: number = patient.sphereRaw;

        if (patientSphere < 0) {
            return new Myopia();
        } else if (patientSphere === 0) {
            return new Emmetropic();
        } else if (patientSphere > 0) {
            return new Hyperopic();
        }

        throw new Error("Unable to determine Refractive Error Type")
    }
}

