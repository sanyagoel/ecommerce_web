import { useState } from 'react'

import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/homePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/cart'
import Checkout from './customer/components/Checkout/Checkout'
import Order from './customer/components/Order/Order'
import OrderTracker from './customer/components/Order/OrderTracker'
import { Route,Routes } from 'react-router-dom'
import CustomerRouter from './Routers/CustomerRouter'
function App() {

  return (


    <>
      <Routes>
      <Route path='/*' element={<CustomerRouter/>}></Route>
      </Routes>
      {/* <Navigation/> */}
      {/* //  <HomePage />
      //  <Product/>  */}
      {/* <ProductDetails/>  */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Order /> */}
      {/* <OrderTracker/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
