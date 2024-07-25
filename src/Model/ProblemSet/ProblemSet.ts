import { Patient } from "../Patient/Patient";

export class ProblemSet {
    patient: Patient;

    constructor(patient: Patient) {
        this.patient = patient;
    }
}