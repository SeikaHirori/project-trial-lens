import * as generateNewPatients from "../../Controller/NewRandomPatient";
import { Patient } from "../Patient/Patient";
import { Submission } from "../Submission/Submission";

export class ProblemSet {
    id: number;
    patient: Patient;
    submission: Submission;

    constructor(id: number) {
        this.id = id;
        this.patient = generateNewPatients.newRandomPatient();
    }

    /**
     * 
     * @param that 
     * @returns true if patient's info already exist
     */
    doesPatientInfoAlreadyExist(that: ProblemSet): boolean {
        return this.patient.equals(that.patient);
    }

    info(): string {
        return `${this.id}`
    }
}