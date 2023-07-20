import React from 'react'
import Slider from "react-slick";
// import styles from "./Home.module.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home(){

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }


    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <>
         <div className='container,w-90%,m-auto'>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZihabfMYtTzSGiSJCkoJUKn1qmetRiDaP87jNDQG1mA_l6mFo1H-YSbQaNyVs22SgHQ&usqp=CAU" alt=""  className="w-100%"/>
            
            <div className='card-body'>
            <h3>1</h3>
            <p>React-slick</p>
            </div>
          </div>
          <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPKCCKPb0GunF21Sqd3U8tjXYWIr31vzsvQ&usqp=CAU" alt=""  className="w-100%"/>
            <div className='card-body'>
                
            <h3>2</h3>
            <p>React-slick</p>
            </div>
          </div>
          <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPKCCKPb0GunF21Sqd3U8tjXYWIr31vzsvQ&usqp=CAU" alt=""  className="w-100%"/>
            <div className='card-body'>
                
            <h3>3</h3>
            <p>React-slick</p>
            </div>
          </div>
          <div className='card'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPKCCKPb0GunF21Sqd3U8tjXYWIr31vzsvQ&usqp=CAU" alt=""  className="w-100%"/>
            <div className='card-body'>
                
            <h3>4</h3>
            <p>React-slick</p>
            </div>
          </div>
          <div className='card'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPKCCKPb0GunF21Sqd3U8tjXYWIr31vzsvQ&usqp=CAU" alt=""  className="w-100%"/>
            <div className='card-body'>
                
            <h3>5</h3>
            <p>React-slick</p>
            </div>
          </div>
          <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPKCCKPb0GunF21Sqd3U8tjXYWIr31vzsvQ&usqp=CAU" alt=""  className="w-100%"/>
            <div className='card-body'>
                
            <h3>6</h3>
            <p>React-slick</p>
            </div>
          </div>
        </Slider>
      </div>
         </>
    )
}
export default Home