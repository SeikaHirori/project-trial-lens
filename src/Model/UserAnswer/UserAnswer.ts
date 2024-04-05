import { aN } from "vitest/dist/reporters-P7C2ytIv.js"

export default class UserAnswer {
    readonly #answer: number 
    readonly isTrialLensNotNeeded: boolean

    constructor(answer: number, isTrialLensNotNeeeded: boolean){
        this.#answer = answer * 100 // Convert parameter to be non-decimal value
        this.isTrialLensNotNeeded = isTrialLensNotNeeeded
    }

    get rawAnswer() {
        return this.#answer
    }

    get formattedAnswer() {
        return this.#answer / 100
    }

}