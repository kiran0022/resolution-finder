import React from 'react'
import Resolution from './resolution'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <h1>{' your screen resolution 🏴'.toUpperCase()}</h1>

      <Resolution />
    </div>
  )
}

export default App