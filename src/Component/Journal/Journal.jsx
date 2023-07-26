import React from 'react'
import "./Journal.css";
import image1 from "../../assets/images/11.jpg"
import image2 from "../../assets/images/22.jpg"
import image3 from "../../assets/images/23.jpg"
import image4 from "../../assets/images/24.jpg"
import ContentWrapper from '../ContentWrapper/ContentWrapper';


const Journal = () => {
  return (
    <>
    <ContentWrapper>
    <div className="main-journal">
    <div className="left-side">
<img  className='left_images' src={image1} alt="image" />
    </div>
    <div className="right-side">
            <span className='post'>Latest Post</span>
            <div className="posts">
                <img className='img2' src={image2} alt="" />
                <span className='dis'>Live Life in Full bloom</span>
                <img className='img2' src={image3} alt="" />
                <span className='dis'>Live Life in Full bloom</span>
                <img className='img2' src={image4} alt="" />
                <span className='dis'>Live Life in Full bloom</span>

            </div>
            .
    </div>
    </div>
    </ContentWrapper>
    </>
    )
}

export default Journal