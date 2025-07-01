import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/homePage";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Cart from "../customer/components/Cart/cart";
import Product from "../customer/components/Product/product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderTracker from "../customer/components/Order/OrderTracker";


//  {/* //  <HomePage />
      //  <Product/>  */}
      {/* <ProductDetails/>  */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Order /> */}
      {/* <OrderTracker/> */}

export default function CustomerRouter() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>
                <Route path="/:level1/:level2/:level3" element={<Product/>}></Route>
                <Route path="/product/:productID" element={<ProductDetails/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/product/order" element={<Order />}></Route>
                <Route path = "/product/order/:orderID" element={<OrderTracker/>}></Route>
            </Routes>
            <Footer/>
        </>
    )
}