import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import About from "../Pages/About"
import Cart from "../Pages/Cart"
import Products from "../Pages/product"
import Electronics from "../Pages/Electronics"
import Cloths from "../Pages/Cloths"
import Admin from "../Admin/Admin"
import Address from "../Pages/Address"
import Payment from "../Pages/Payment"
import Signup from "../Pages/Signup"
function AllRoute(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart/:id" element={<Cart />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/electronics" element={<Electronics />}></Route>
            <Route path="/cloths" element={<Cloths />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/address" element={<Address />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        
        </>
    )
}
export default AllRoute