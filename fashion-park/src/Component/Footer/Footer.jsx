import styles from "../Css_Module/Footer.module.css"
function Footer(){
    return (
        <>
        {/* <h1>Footer Page</h1> */}
        <div className={styles.footer_main_cont}>
            <div>
                <h5>ABOUT US</h5>
                {/* <br /> */}
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Careers</p>
                <p>Stories</p>
                <p>Press</p>
                <p>Corporate Information</p>
            </div>


            <div>
                <h5>HELP</h5>
                {/* <br /> */}
                 <p>Payments</p>
                 <p>Shipping</p>
                 <p>Cancellation $ Return</p>
                 <p>FAQ</p>
                 <p>Report Infrigment</p>
            </div>

            <div>
                <h5>CONSUMER POLICY</h5>
                {/* <br /> */}
                <p>Return Policy</p>
                <p>Terms Of Use</p>
                <p>Security</p>
                <p>Privacy</p>
                <p>Sitemap</p>
                <p>EPR Redressal</p>
            </div>
            <div>
                <h5>SOCIAL</h5>
                {/* <br /> */}
                <p>Facebook</p>
                <p>Twitter</p>
                <p>YouTube</p>
            </div>
        </div>
        </>
    )
}
export default Footer