import styles from "../Css_Module/Login.module.css"
function Login(){
    return (
        <>
        <h1>Login page</h1>
        <div className={styles.login_main_div}>
            <div className={styles.left_cont}></div>
            <div className={styles.right_cont}>
            <form action="">
            <label htmlFor="">Enter user name</label>
            <input type="text" placeholder="Enter user name" />
            <label htmlFor="">Enter Email</label>
            <input type="email" placeholder="Enter email" />
            <label htmlFor="">Enter password</label>
            <input type="password" placeholder="Enter password" />
            <input type="submit" value={"Submit"} />
        </form>
            </div>
        </div>
        </>
    )
}
export default Login