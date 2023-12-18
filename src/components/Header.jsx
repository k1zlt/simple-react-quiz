import React from 'react'
import { Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className='app-header'>
          <h1>Simple Quiz game</h1>
      </header>
      <Outlet/>
    </>
  )
}
