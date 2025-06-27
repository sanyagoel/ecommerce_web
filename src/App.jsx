import { useState } from 'react'

import './App.css'
import Navigation from './customer/components/Navigation'
import HomePage from './customer/pages/homePage'

function App() {

  return (
    <>
      <Navigation/>
      <HomePage/>
    </>
  )
}

export default App
