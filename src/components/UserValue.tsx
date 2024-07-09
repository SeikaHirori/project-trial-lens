

const UserValue = (props: {
    userAnswer: number,
    handleAnswerChange: (event) => void,
    isTrialLensNotNeeded: boolean,
    handleCheckboxNotNeeded: () => void
}) => {
    const {userAnswer, handleAnswerChange, isTrialLensNotNeeded, handleCheckboxNotNeeded} = props;

    return (
        <div>
            <input 
                type='number'
                value={userAnswer} 
                onChange={handleAnswerChange}
                step='0.25'
                disabled={isTrialLensNotNeeded}
            />
        </div>
    )
}

export default UserValue