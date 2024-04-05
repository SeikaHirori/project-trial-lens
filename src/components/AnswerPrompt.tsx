

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
          <input 
            type='number'
            value={userAnswer} 
            onChange={handleAnswerChange}
            step='0.25'
          />
          <button type='submit'>check</button>
        </form>
      </div>
    )
}

export default AnswerPrompt