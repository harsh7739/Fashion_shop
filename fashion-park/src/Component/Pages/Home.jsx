import { Link } from "react-router-dom"
import styles from "../Css_Module/Home.module.css"
import Crosaule from "./carosaul"

import Footer from "../Footer/Footer"

let men_arr = [
  {
    category: "men's clothing",
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
id: 1,
image: 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-shgoRNC2_blX29doQTJQh7bC6FqjljBcg&usqp=CAU",
price: 109.95,
rating: {rate: 3.9, count: 120},
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  },
  {
    category: "men's clothing",
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
id: 2,
image: 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCe4NVHbn8753kxeuYUNdcK9iLAICbnHRg30Ie9qCuH3KrGubbVh0ee5t0eQ1Mpene3I&usqp=CAU",
price: 109.95,
rating: {rate: 3.9, count: 120},
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  },
  {
    category: "men's clothing",
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
id: 3,
image: 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNTXQ6UcZ2B7paufYTpW32bco27ksl_M43Q&usqp=CAU",
price: 109.95,
rating: {rate: 3.9, count: 120},
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  },
  {
    category: "men's clothing",
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
id: 4,
image: 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQII5BXvHETEwU9QxgXiAimFGUS8JLXOiEDoQ&usqp=CAU",
price: 109.95,
rating: {rate: 3.9, count: 120},
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  },
]

let women_arr = [
  {
    category: "women's clothing",
description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight",
id: 1,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eaievEXTeXFLG5HEtWqXh26xXMJDy9MTBw&usqp=CAU",
price: 7.95,
rating: {rate: 4.5, count: 146},
title: "Opna Women's Short Sleeve Moisture",
  },
  {
    category: "women's clothing",
description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight",
id: 2,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQqOvIEcE1sgr5ZlgD0uERi16R9zbQb5XPg&usqp=CAU",
price: 7.95,
rating: {rate: 4.5, count: 146},
title: "Opna Women's Short Sleeve Moisture",
  },
  {
    category: "women's clothing",
description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight",
id: 3,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTat_emriiMbBzOJvJfUzVqPwbf7B3j2jFhq_3oFxozmuXsRqmqEIED3bF4QdLiEIeSpmY&usqp=CAU",
price: 7.95,
rating: {rate: 4.5, count: 146},
title: "Opna Women's Short Sleeve Moisture",
  },
  {
    category: "women's clothing",
description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight",
id: 4,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MZgZEh0UFWnaIXHVvgHiu7QBOb3e-vXhUA&usqp=CAU",
price: 7.95,
rating: {rate: 4.5, count: 146},
title: "Opna Women's Short Sleeve Moisture",
  },
]

function Home(){
  return (
    <>
    {/* <h1>Home Page</h1> */}
    <div>

    <Crosaule />
    </div>
    <div className={styles.home_header_main_cont}>
      <Link to={"/products"}>
    <div>
    <img src="https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="Fasshion" />
    <h6>All Products</h6>
   </div>
      </Link>

     <Link to={"/cloths"}>
    <div>
    <img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" alt="Fasshion" />
   <h6>Fashion</h6>
   </div>
     </Link>


      <div>
    
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="Grocery" />
        <h6>Grocery</h6>
      </div>
   <div>
    <img src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="Mobile" />
    <h6>Mobile</h6>
   </div>
   <Link to={"/electronics"}>
   <div>
    <img src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="Electronis" />
    <h6>Elentronics</h6>
   </div>
   </Link>
    </div>

    <div style={{display:"flex"}}>
      <div style={{width:"18%",backgroundColor:"teal",textAlign:"center",marginRight:"10px"}}><h1>Mens Fashion</h1></div>
     <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}}>
      {men_arr.map((item)=>(
        <div key={item.id} style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
        <img src={item.image} alt="" style={{width:"100%",margin:"auto"}}/>
        <h2>{item.category}</h2>
        {/* <h5>{item.title}</h5>
        <p>{item.description}</p>
        <h5>{item.price}</h5>
        <h5>{item.rating?.rate}</h5> */}
        </div>
      ))}
     </div>

    </div>




    <div style={{display:"flex",marginTop:"15px"}}>
      <div style={{width:"18%",backgroundColor:"teal",textAlign:"center",marginRight:"10px"}}><h1>Womens Fashion</h1></div>
     <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}}>
      {women_arr.map((item)=>(
        <div key={item.id} style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
        <img src={item.image} alt="" style={{width:"100%",margin:"auto"}}/>
        <h2>{item.category}</h2>
        {/* <h5>{item.title}</h5>
        <p>{item.description}</p>
        <h5>{item.price}</h5>
        <h5>{item.rating?.rate}</h5> */}
        </div>
      ))}
     </div>

    </div>


    <Footer />
    </>
  )
}
export default Home