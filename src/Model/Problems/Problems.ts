import { ProblemSet } from "../ProblemSet/ProblemSet";


export default class Problems {
    problems: ProblemSet[];
    totalQuestion: number;
    currentQuestion: number;

    constructor(totalQuestions: number) {
        this.totalQuestion = totalQuestions;

        // Start at question 0
        this.currentQuestion = 0;

        // Setup Problems
        this.problems = this.createProblems(totalQuestions);
        
    }

    // TODO
    createProblems(totalQuestions: number): ProblemSet[] {
        const problems: ProblemSet[] = [];

        // create problems
        for (let i = 0; i < totalQuestions; i++) {
            let newProblemSet: ProblemSet;
            // Make new patient
            // Check if new patient's info already exist
            while (true) {
                newProblemSet = new ProblemSet(i);

                // If there are no problems
                if (problems.length === 0) {
                    break;
                }

                // If patient does not exist, break
                if (this.isNewProblemSetUnique(newProblemSet, problems)) {
                    break;
                }

            }

            problems[i] = newProblemSet;
        }

        return problems;
    }

    isNewProblemSetUnique(newProblemSet: ProblemSet, problems: ProblemSet[]): boolean {
        for (const p of problems) {

            // Exit if patient's info already exist
            if (p.doesPatientInfoAlreadyExist(newProblemSet)) {
                return false;
            }
        }

        return true;
    }

    printPatients() {
        console.log();
        
        for (const p of this.problems) {
            console.log(p.info());
            console.log();
            
        }
    }
}