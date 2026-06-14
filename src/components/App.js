import { useEffect, useReducer } from 'react'
import Header from './Header'
import Main from './Main'
import StartScreen from './StartScreen'
import Error from './Error'
import Loader from './Loader'
import Progress from './Progress'
import Question from './Question'
import Footer from './Footer'
import Timer from './Timer'
import NextButton from './NextButton'
import FinishScreen from './FinishScreen'

const initialState = {
  status: 'loading',
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highScore: Number(localStorage.getItem('highScore')) || 0,
  secondsRemaining: null,
}
const SECS_PER_QUESTION = 30
function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'dataFailed':
      return { ...state, status: 'error' }
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: SECS_PER_QUESTION * state.questions.length,
      }
    case 'newAnswer':
      const question = state.questions[state.index]
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload ? state.points + question.points : state.points,
      }
    case 'nextQuestion':
      return { ...state, answer: null, index: state.index + 1 }
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highScore: Math.max(state.highScore, state.points),
      }
    case 'reset':
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: 'ready',
        secondsRemaining: null,
      }
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 1 ? 'finished' : state.status,
        highScore:
          state.secondsRemaining === 1 ? Math.max(state.highScore, state.points) : state.highScore,
      }
    default:
      throw new Error('something went wrong...')
  }
}

export default function App() {
  const [{ status, questions, index, answer, points, highScore, secondsRemaining }, dispatch] =
    useReducer(reducer, initialState)
  const numQuestions = questions.length
  const maxPoints = questions.reduce((sum, question) => sum + question.points, 0)

  useEffect(
    function () {
      localStorage.setItem('highScore', highScore)
    },
    [highScore]
  )

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          'https://gist.githubusercontent.com/SamanKalani/c19401115d11ea20d8f707d66ea477eb/raw/f475c8fbf2c32273302764a9a53d208cecd61743/gistfile1.txt'
        )
        const data = await res.json()
        dispatch({ type: 'dataReceived', payload: data.questions })
      } catch (err) {
        dispatch({ type: 'dataFailed' })
      }
    }
    fetchQuestions()
  }, [])
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <Progress
              numQuestions={numQuestions}
              index={index}
              points={points}
              maxPoints={maxPoints}
            />
            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                index={index}
                numQuestions={numQuestions}
                answer={answer}
              />
            </Footer>
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  )
}
