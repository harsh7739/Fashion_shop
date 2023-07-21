import styles from "../Css_Module/Home.module.css"
import { Icon } from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'


function Navbar(){
    return (
        <>
       
        <div className={styles.main}>
    <div className={styles.main_Cont} >
   <div className={styles.logo_main_div} >
    <div>Fashion Park
        <img src="../src/../images./fashion_page-0001" alt="" />
    </div>
   <input className={styles.input_tag} type="text" />
   <Icon as={Search2Icon} />
   </div>
   
   <div className={styles.loginBtn}>Login</div>
   
   <div>More</div>
   <div>About</div>
   <div>Cart</div>
    </div>

    </div>
        </>
    )
}
export default Navbar