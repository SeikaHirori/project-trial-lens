import { Patient } from "./Patient";
import { RefractiveErrorType, Emmetropic, Hyperopic, Myopia } from "./RefractiveErrorType";

class TrialLens {
    #currentPatient: Patient;
    #refractiveErrorType: RefractiveErrorType;

    constructor(patient: Patient) {
        this.#currentPatient = patient;
        this.#refractiveErrorType = new Myopia(this.#currentPatient); // FIXME ; This is placeholder... Use function "determineRefractiveErrorType() when it is written out."
    }

    // // TODO
    // determineRefractiveErrorType(patient: Patient): RefractiveErrorType {
    //     const patientSphere: number = patient.sphereRaw;
    // }
}