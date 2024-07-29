export class Submission {
    isSubmitted: boolean = false;
    userSubmission: string = null;

    isSubmissionCorrect(solution: string): boolean {
        if (this.userSubmission === solution) {
            return true;
        } 

        return false;
    }
}