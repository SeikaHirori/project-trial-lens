import Corrections from "./Corrections";
import UserValue from "./UserValue";


const AnswerPrompt = (props: {
    checkAnswer: (event) => void,
    userAnswer: number,
    handleAnswerChange: (event) => void,
    isTrialLensNotNeeded: boolean,
    handleCheckboxNotNeeded: () => void,
    handleUserSubmitted: () => void,
    userSubmitted: boolean,
}) => {
    const {checkAnswer, userAnswer, handleAnswerChange, isTrialLensNotNeeded, handleCheckboxNotNeeded, handleUserSubmitted, userSubmitted} = props;

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
                <button type='submit' onClick={
                    handleUserSubmitted
                }>check</button>
            </div>

            <div>
                <Corrections 
                    userSubmitted={userSubmitted}
                />
            </div>

        </form>
      </div>
    )
}

export default AnswerPrompt