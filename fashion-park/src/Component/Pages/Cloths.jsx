import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
function Cloths(){
    const [data,setData] = useState([])
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
    let Data = data.filter((item)=>{
        return item.category=="men's clothing" || item.category=="women's clothing"
    })
    console.log(data)
    return (
        <>
        {/* <h1>Cloths Page</h1> */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>

        {
            Data.map((item)=>(
                <div key={item.id} style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>

                    <img src={item.image} alt="" style={{width:"80%",margin:"auto"}}/>
                    <h2>{item.category}</h2>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <h5>{item.price}</h5>
                    <h5>{item.rating?.rate}</h5>
                    <Link to={"/address"}>
                    <button  style={{backgroundColor:"green",color:"white",border:"none",margin:"10px"}}>Buy Now</button>
                    </Link>
                    <Link to={"/cart"}>
                    <button style={{backgroundColor:"orange",color:"white",border:"none"}}>Add To Cart</button>
                    </Link>

                </div>
            ))
        }
        </div>
        </>
    )
}
export default Cloths