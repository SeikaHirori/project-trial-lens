

const Corrections = (props: {
    userSubmitted: boolean
}) => {

    const {userSubmitted} = props

    if (userSubmitted) {
        return (<div>
            <p>SUBMITTED!</p>
        </div>)
    } else {
        return (<div>
            <p>pending...</p>
        </div>)
    }
}

export default Corrections