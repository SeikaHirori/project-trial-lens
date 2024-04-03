import { Patient } from "./Patient/Patient";
import { RefractiveErrorType } from "./RET/RefractiveErrorTypeAbstract";
import { Myopia } from "./RET/Myopia";
import { Hyperopic } from "./RET/Hyperopic";
import { Emmetropic } from "./RET/Emmetropic";
import { debugConcreteRefractiveErrorType } from "./RET/ConcreteRefractiveErrorType";

class TrialLens {
    #currentPatient: Patient;
    #refractiveErrorType: RefractiveErrorType;

    constructor(patient: Patient) {
        this.#currentPatient = patient;
        this.#refractiveErrorType = this.determineRefractiveErrorType(patient); // FIXME ; This is placeholder... Use function "determineRefractiveErrorType() when it is written out."
    }

    // // TODO
    determineRefractiveErrorType(patient: Patient): RefractiveErrorType {
        const patientSphere: number = patient.sphereRaw;

        if (patientSphere < 0) {
            return new Myopia(this.#currentPatient);
        } else if (patientSphere === 0) {
            return new Emmetropic(this.#currentPatient);
        } else if (patientSphere > 0) {
            return new Hyperopic(this.#currentPatient);
        }

        throw new Error("Unable to determine Refractive Error Type")
    }
}

