import { useParams,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
function Cart(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [item,setItem] = useState([])
    async function fetchFun(){
        
        try {
            let res = await fetch(`https://fakestoreapi.com/products/${id}`)
            res = await res.json()
           
            setItem(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchFun()
    },[])
    // console.log(data)
    function handleClick(){
       navigate("/address")
    }
    return (
        <>
        {/* <h1>Cart Page</h1> */}
       <div style={{backgroundColor:"teal"}}>


       <div style={{width:"40%",margin:"auto" ,backgroundColor:"gray"}}>
       <img src={item.image} alt="" style={{width:"50%",margin:"auto",backgroundColor:"blue"}}/>
                    <h2>{item.category}</h2>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <h5>{item.price}</h5>
                    <h5>{item.rating?.rate}</h5>
                    <button style={{padding:"8px 15px 8px 15px",marginBottom:"20px",backgroundColor:"blue" , color:"white"}} onClick={handleClick}>Buy Now</button>
       </div>


       </div>
        </>
    )
}
export default Cart