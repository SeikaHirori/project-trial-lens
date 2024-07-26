import * as generateNewPatients from "../../Controller/NewRandomPatient";
import { Patient } from "../Patient/Patient";

export class ProblemSet {
    id: number;
    patient: Patient;

    constructor(id: number) {
        this.id = id;
        this.patient = generateNewPatients.newRandomPatient();
    }

    doesPatientInfoAlreadyExist(that: ProblemSet): boolean {
        return this.patient.equals(that.patient);
    }

    info(): string {
        return `${this.id}`
    }
}