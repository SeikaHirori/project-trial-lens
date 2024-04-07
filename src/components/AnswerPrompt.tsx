

const AnswerPrompt = (props: {
    checkAnswer: (event) => void,
    userAnswer: number,
    handleAnswerChange: (event) => void,
    isTrialLensNotNeeded: boolean,
    handleCheckboxNotNeeded: () => void
}) => {
    const {checkAnswer, userAnswer, handleAnswerChange, isTrialLensNotNeeded, handleCheckboxNotNeeded} = props;

    return (
        <div>
        {/* Calculate trial lens/ answer box */}
        <form onSubmit={checkAnswer}>
            <div>
                <input 
                    type='number'
                    value={userAnswer} 
                    onChange={handleAnswerChange}
                    step='0.25'
                />
            </div>

            <div>
                
                <input 
                    type="checkbox" 
                    name="isTrialLensNeeded" 
                    id="isTrialLensNeeded" 
                    onChange={handleCheckboxNotNeeded}
                />
                <span> Is trial lens not needed?: {isTrialLensNotNeeded ? "Not needed" : "I NEED ITTT" } </span>
            </div>

            <div>
                <button type='submit'>check</button>
            </div>

        </form>
      </div>
    )
}

export default AnswerPrompt