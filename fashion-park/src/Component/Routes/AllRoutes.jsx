import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import About from "../Pages/About"
import Cart from "../Pages/Cart"
function AllRoute(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        
        </>
    )
}
export default AllRoute