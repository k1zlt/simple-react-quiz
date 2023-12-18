import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gameEnded, nextQuestion } from '../features/questions/questionsSlice'

const NextStyle = {
  display: 'block',
  width: "100%",
  padding: "10px",
  marginTop: "10px"
}

export const Next = () => {
    const {index} = useSelector(store => store.questions)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleFinish = ()=>{
        dispatch(gameEnded())
        navigate('/results')
    }

  if(index < 4) return (
    <button style={NextStyle} className='btn btn-ui' onClick={()=>dispatch(nextQuestion())}>Next</button>
  )
  
  return (
    <button style={NextStyle} className='btn btn-ui' onClick={handleFinish}>Finish</button>
  )
}
