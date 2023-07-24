import React from 'react';
import { Carousel } from 'antd';
import styles from "../Css_Module/carasoule.module.css"
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',

};
const Crosaule = () => (
  <Carousel autoplay>
    <div className={styles.first_div}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-iuh8MnX1f7C3xcY8RwRs1qV4MVdCpwoOA&usqp=CAU" alt="" />
      {/* <h3 >1</h3> */}
    </div>
    <div className={styles.second_div}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEE0XaJ1XiLlyD763SsjzIrcLaouO-Crm6A&usqp=CAU" alt="" />
      {/* <h3 style={contentStyle}>2</h3> */}
    </div>
    <div className={styles.third_div}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88E9w5DmhoKyd9vuQvJ4X06Zb3eJuq5wIVA&usqp=CAU" alt="" />
 
      {/* <h3 style={contentStyle}>3</h3> */}
    </div>
    <div className={styles.fourth_div}>
      {/* <h3 style={contentStyle}>4</h3> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlQLLcmlwuVGYltr4iFq9EOxv2ye8_u6RVg&usqp=CAU" alt="" />
    </div>
  </Carousel>
);
export default Crosaule;