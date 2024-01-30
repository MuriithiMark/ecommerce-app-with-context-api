import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import './index.css'

const HeaderComponent = () => {
  return (
    <div className='header'>
        <h1> E-commerce app</h1>
      <DarkModeToggle/>
    </div>
  )
}

export default HeaderComponent