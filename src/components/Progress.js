export default function Progress({ numQuestions, index, maxPoints, points }) {
  return (
    <div className="progress">
      {/* progress bar that shows the current question number as a fraction of the total number of questions */}
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </div>
  )
}
