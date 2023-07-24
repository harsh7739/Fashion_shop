
import { useNavigate } from "react-router-dom"
function Payment(){
    const navigate = useNavigate()
    function handleSubmit(e){
   e.preventDefault()
   alert("Your order is sucessfull")
   navigate("/")
    }
    return (
        <>
        {/* <h1>Payment Page</h1> */}
        <div style={{backgroundColor:"teal",height:"1000px"}}>
        <form action="" style={{backgroundColor:"gray",width:"40%",margin:"auto",color:"white",paddingTop:"30px",paddingBottom:"30px"}} onSubmit={handleSubmit}>
            <label htmlFor="">Enter Card Number</label><br />
            <input type="text" placeholder="Card number" required/><br /><br />
            <label htmlFor="">Date of Expiry</label><br />
            <input type="date" /><br /><br />
            <label htmlFor="">Enter cvv</label> <br />
            <input type="password" placeholder="cvv"/><br /><br />
           
            <input type="submit" value={"Submit"}/>
</form>
        </div>
        
        </>
    )
}
export default Payment