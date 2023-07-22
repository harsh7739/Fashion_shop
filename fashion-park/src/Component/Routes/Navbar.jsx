import styles from "../Css_Module/Home.module.css"
import { Icon } from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'
import {Link} from "react-router-dom"


function Navbar(){
    return (
        <>
       
        <div className={styles.main}>
    <div className={styles.main_Cont} >
   <div className={styles.logo_main_div} >
    <Link to={"/"}>
        <div style={{color:"white"}}>Fashion Park
        <img src="../src/../images./fashion_page-0001" alt="" />
    </div>
    </Link>
   <input className={styles.input_tag} type="text" placeholder="Search for product brand , Category and more..." />
   {/* <Icon as={Search2Icon} /> */}
   </div>
   <Link to={"/login"}>
   <div className={styles.loginBtn}>Login</div>
   </Link>
   
   <div>More</div>
   <Link to={"/about"}>
   <div style={{color:"white"}}>About</div>
   </Link>
   <Link to={"/cart"}>
   <div style={{color:"white"}}>Cart</div>
   </Link>
    </div>

    </div>
        </>
    )
}
export default Navbar