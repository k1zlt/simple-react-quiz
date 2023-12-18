import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../components/Loader'
import { Progress } from '../components/Progress'
import { Next } from '../components/Next'
import { useDispatch, useSelector } from 'react-redux'

import { getQuestions, newAnswer } from '../features/questions/questionsSlice'

export const Question = () => {
    const {difficulty} = useParams()
    const {gameMode} = useSelector(store => store.difficulty)
    const {status, index, currentQuestion, answer} = useSelector(store => store.questions)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getQuestions(gameMode))
    },[])

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[index])

    const statement = currentQuestion?.question
    const options = currentQuestion?.options
    const hasAnswered = answer !== null
    const styleCat = {
      backgroundColor: difficulty === 'medium' ? '#e3ce0e' : '#fc2121'
    }
  return (
    <main className='main'>
      {status === 'loading' && <Loader/>}
      {status === 'ready' && 
      <>
      <Progress/>
      <div className='question-cont'>
        <div className='category' style={difficulty !== 'easy' ? styleCat : {}}>{difficulty} quiz</div>
        <h4>{statement}</h4>
        <div className="options">
          {options?.map(option=>{
            return <button key={option} className={`btn btn-option ${answer === option ? 
            "answer" : ""} 
            ${hasAnswered ? currentQuestion.correctAnswer === option
            ? "correct" : "" : ""}`} 
            disabled={hasAnswered}
            onClick={()=>dispatch(newAnswer(option))}>{option}</button>
          })}
        </div>
      </div> 
      <footer>
        {answer && <Next/>}
      </footer>
      </>}
    </main>
  )
}
