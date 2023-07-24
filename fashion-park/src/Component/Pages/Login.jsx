import styles from "../Css_Module/Login.module.css"
import { Link ,useNavigate} from "react-router-dom"
function Login(){
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
navigate("/")
    }
    return (
        <>
        {/* <h1>Login page</h1> */}
        <div className={styles.login_main_div}>
            <div className={styles.left_cont}>
                <h1>Login</h1>
                <h4>Get acess to your Order,wishlist and recommandation</h4>
            </div>
            <div className={styles.right_cont}>
            <form action="" onSubmit={handleSubmit}>
            
            <label htmlFor="">Enter Email</label><br />
            <input type="email" placeholder="Enter email" required/><br /><br />
            <label htmlFor="">Enter password</label><br />
            <input type="password" placeholder="Enter password" required/><br /><br />
            <input type="submit" value={"Submit"} />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </form>

        <Link to={"/signup"}>
         <p style={{color:"white"}}>new to Fashion park ? create a account</p>
        </Link>
            </div>
        </div>
        </>
    )
}
export default Login