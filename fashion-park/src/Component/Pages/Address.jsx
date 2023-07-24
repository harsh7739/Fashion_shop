import { useNavigate } from "react-router-dom"

function Address(){
    const navigate = useNavigate()
    function handleSubmit(e){
     e.preventDefault()
     navigate("/payment")
    }
    
    return (
        <>
        {/* <h1>Address Page</h1> */}
        <div style={{backgroundColor:"teal",height:"1000px"}}>
        <form action="" style={{backgroundColor:"gray",width:"40%",margin:"auto",color:"white",paddingTop:"30px",paddingBottom:"30px"}} onSubmit={handleSubmit}>
            <label htmlFor="">Enter Address1</label><br />
            <input type="text" placeholder="village/colony" required/><br /><br />
            <label htmlFor="">Enter Address2</label><br />
            <input type="text" placeholder="Enter Address2"/><br /><br />
            <label htmlFor="">Enter Address3</label> <br />
            <input type="text" placeholder="Address3"/><br /><br />
            <label htmlFor="">Enter Pin code</label><br />
            <input type="number" placeholder="PIN code" required/><br /><br />
            <input type="submit" value={"Submit"}/>
</form>
        </div>
        </>
    )
}
export default Address