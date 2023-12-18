import React from 'react'
import { useSelector } from 'react-redux'

export const Progress = () => {
    const {index, points, answer} = useSelector(store => store.questions)
    
  return (
    <header className='progress'>
        <progress max='5' value={index + Number(answer !== null)}/>
        <p>Question <strong>{index+1}</strong> / 5</p>
        <p><strong>{points}</strong> / 5</p>
    </header>
  )
}
