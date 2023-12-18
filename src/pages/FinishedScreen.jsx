import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const FinishedScreen = () => {
    const {points} = useSelector(store => store.questions)
    const {gameMode} = useSelector(store => store.difficulty)
    const navigate = useNavigate()
    const persentage = Math.ceil(points / 5 * 100)

  return (
    <>
        <p className='result'>
           You scored <strong>{points}</strong> out of 5 ({persentage} %)
        </p>
        <div className='reset-btns'>
            <button className='btn' onClick={()=>navigate(`/`)}>Main Menu</button>
            <button className='btn' onClick={()=>navigate(`/quiz/${gameMode}`)}>Reset</button>
        </div>
    </>
  )
}
