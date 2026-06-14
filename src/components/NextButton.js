export default function NextButton({ index, numQuestions, dispatch, answer }) {
  if (answer === null) return null
  if (numQuestions > index + 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion' })}>
        Next
      </button>
    )

  if (numQuestions === index + 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'finish' })}>
        Finish!
      </button>
    )
}
