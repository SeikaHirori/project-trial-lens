import UserValue from "./UserValue";


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
                <UserValue 
                    userAnswer={userAnswer} 
                    handleAnswerChange={handleAnswerChange} 
                    isTrialLensNotNeeded={isTrialLensNotNeeded} 
                    handleCheckboxNotNeeded={handleCheckboxNotNeeded} 
                />
                <br/>

                <input 
                    type="checkbox" 
                    name="isTrialLensNeeded" 
                    id="isTrialLensNeeded" 
                    onChange={handleCheckboxNotNeeded}
                />
                <span> Trial Lens NOT Needed </span>
            </div>
            <br />

            <div>
                <button type='submit'>check</button>
            </div>

        </form>
      </div>
    )
}

export default AnswerPrompt