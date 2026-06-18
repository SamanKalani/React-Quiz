import { useEffect } from 'react'

export default function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60)
  const seconds = secondsRemaining % 60
  useEffect(
    function () {
      //what is setInterval? setInterval is a function that takes a callback function and a delay in milliseconds, and calls the callback function every delay milliseconds until clearInterval is called with the id returned by setInterval
      const id = setInterval(function () {
        dispatch({ type: 'tick' })
      }, 1000)
      return () => clearInterval(id)
    },
    [dispatch]
  )
  return (
    <div className="timer">
      {minutes < 10 && 0}
      {minutes}:{seconds < 10 && 0}
      {seconds}
    </div>
  )
}
