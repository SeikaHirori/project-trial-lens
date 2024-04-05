

const AnswerPrompt = (props: {
    checkAnswer: (event) => void,
    userAnswer: number,
    handleAnswerChange: (event) => void
}) => {
    const {checkAnswer, userAnswer, handleAnswerChange} = props;

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
                Not Needed 
                <input 
                    type="checkbox" 
                    name="isTrialLensNeeded" 
                    id="isTrialLensNeeded" 
                    checked={false}
                />
            </div>

            <div>
                <button type='submit'>check</button>
            </div>

        </form>
      </div>
    )
}

export default AnswerPrompt