import { Footer } from "antd/es/layout/layout"
import { useEffect, useState } from "react"
import { Link,useNavigate } from "react-router-dom"

function Products(){
    const [data,setData] = useState([])
    const navigate = useNavigate()
    async function fetchFun(){
        
        try {
            let res = await fetch("https://fakestoreapi.com/products")
            res = await res.json()
            setData(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchFun()
    },[])
    console.log(data)
    function buyFun(){
        navigate("/address")
    }
    return (
        <>
        {/* <h2>Products Page</h2> */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>

        {
            data.map((item)=>(
                
                <div key={item.id} style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                    <img src={item.image} alt="" style={{width:"80%",margin:"auto"}}/>
                    <h2>{item.category}</h2>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <h5>{item.price}</h5>
                    <h5>{item.rating?.rate}</h5>
                    <Link to={`/cart/${item.id}`}>
                    <button style={{backgroundColor:"orange",color:"white",border:"none",padding:"8px 15px 8px 15px",margin:"15px"}}>Add To Cart</button>
                    </Link>
                    <button style={{backgroundColor:"green",color:"white",border:"none",padding:"8px 15px 8px 15px"}} onClick={buyFun}>Buy Now</button>
                    </div>
                    
                
              
                
               
            ))
        }
        </div>
        <Footer />
        </>
    )
}
export default Products 