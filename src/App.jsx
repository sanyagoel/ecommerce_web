import { useState } from 'react'

import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/homePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/cart'
function App() {

  return (
    <>
      <Navigation/>
      {/* //  <HomePage />
      //  <Product/>  */}
      {/* <ProductDetails/>  */}
      <Cart/>
      <Footer/>
    </>
  )
}

export default App
