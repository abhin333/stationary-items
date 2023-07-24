import React, { useEffect, useState } from "react";
import "./Banner.css";
import image1 from "../../assets/banner/1.png";
import image2 from "../../assets/banner/2.png";
import image3 from "../../assets/banner/3.png";
import image4 from "../../assets/banner/4.png";
import { AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai";

const Banner = () => {
  const images = [image1, image2, image3, image4];
  const [slide,setSlide]=useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); // Change the interval (in milliseconds) for auto slide

    // Clear the timer when the component is unmounted
    return () => {
      clearInterval(slideTimer);
    };
  }, [images.length]);

  const left=(()=>{
   preventDefault();
    setSlide((prevSlide)=>(prevSlide - 1) % images.length);
  })
  const right=(()=>{
    setSlide((prevSlide)=>(prevSlide + 1) % images.length);
   
  })


  return (
    <>  
      <div className="banner_main">
        <div className="banner">
          <img className="image" src={images[slide]} alt="" />
        </div>
        <div className="left_icon">
          <AiFillCaretLeft size={"45px"}  onClick={left}/>
        </div>
        <div className="right_icon">
        <AiFillCaretRight  size={"45px"} onClick={right}/>
               </div>
      </div>
    </>
  );
};

export default Banner;
