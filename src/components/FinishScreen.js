export default function FinishScreen({ points, maxPoints, dispatch, highScore }) {
  const percentage = Math.round((points / maxPoints) * 100)

  let emoji
  if (percentage === 100) emoji = '🥇'
  if (percentage >= 80 && percentage < 100) emoji = '🎉'
  if (percentage >= 50 && percentage < 80) emoji = '🙃'
  if (percentage > 0 && percentage < 50) emoji = '🤨'
  if (percentage === 0) emoji = '🤦‍♂️'

  return (
    <>
      <p className="result">
        <span>{emoji}</span> you scored <strong>{points}</strong> out of
        <strong> {maxPoints}</strong> <span>({percentage}%)</span>
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'reset' })}>
        Restart Quiz
      </button>
    </>
  )
}
