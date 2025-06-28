import { useState } from 'react'

import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/homePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/product'

function App() {

  return (
    <>
      <Navigation/>
      {/* <HomePage /> */}
      <Product/>
      <Footer/>
    </>
  )
}

export default App
