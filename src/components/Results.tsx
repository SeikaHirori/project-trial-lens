

const AnswerKey = (props: {
    correctAnswer: number
}) => {
    const {correctAnswer} = props;
    
    return (
        <>
            <>Correct Answer: {correctAnswer}</>
        
        </>
    )
}

const Results = (props: {
    userSubmitted: boolean,
    userAnswer: number | null,
    correctAnswer: number | null,
}) => {

    // const {userSubmitted, userAnswer, correctAnswer} = props // Reactivate after debugging
    
    // Debugging only
    const {userSubmitted, userAnswer} = props
    const correctAnswer = 0.50;


    if (userSubmitted) {
        console.log()
        console.log(userAnswer)
        console.log(correctAnswer)
        if (userAnswer == correctAnswer) {
            return (
                <>
                    <AnswerKey correctAnswer={correctAnswer}/>
                    <p>EXACT answer!</p>
                </>
            )
        }
        
        const margin: number = correctAnswer - userAnswer;
        if (margin >= -0.25 && margin <= +0.25) {
            return (
                <>
                    <AnswerKey correctAnswer={correctAnswer}/>
                    <p>You're within margin of the exact answer!</p>
                </>
            )
        } else {
            return (
                <>
                    <AnswerKey correctAnswer={correctAnswer}/>
                    <p>You're not within the margin.</p>
                </>
            )
        }

    } else {
        return (<div>
            <p>pending...</p>
        </div>)
    }
}

export default Results