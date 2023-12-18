import React from 'react'
import { useNavigate } from 'react-router-dom'
import { selectGameMode } from '../features/difficulty/difficultySlice'
import { useDispatch } from 'react-redux'

export const StartScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (e)=>{
        dispatch(selectGameMode(e.target.value))
        navigate(`/quiz/${e.target.value}`)
      }
      
  return (
    <div className='start-screen'>
        <h2>Welcome!</h2>
        <h3>Answer 5 question to test your general knowledge</h3>
        <h4>What difficulty do you want to play:</h4>
        <div className="game-mode">
            <button className='btn2' value='easy' onClick={(e)=>handleClick(e)}>Easy</button>
            <button className='btn2' value='medium' onClick={(e)=>handleClick(e)}>Medium</button>
            <button className='btn2' value='hard' onClick={(e)=>handleClick(e)}>Hard</button>
        </div>
    </div>
  )
}
