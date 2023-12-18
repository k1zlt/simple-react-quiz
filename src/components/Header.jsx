import React from 'react'
import { Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className='app-header'>
          <h1>Simple Quiz game with (Open Trivia DB)</h1>
      </header>
      <Outlet/>
    </>
  )
}
