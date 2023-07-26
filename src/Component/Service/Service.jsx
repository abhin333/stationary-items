import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./Service.css";
import image1 from "../../assets/images/10.jpg";
import image2 from "../../assets/images/12.jpg";
import image3 from "../../assets/images/13.jpg";
import image4 from "../../assets/images/14.jpg";
import image5 from "../../assets/images/21.jpg";
import image6 from "../../assets/images/20.jpg";
import image7 from "../../assets/images/19.jpg";
import image8 from "../../assets/images/18.jpg";
import image9 from "../../assets/images/2.jpg";
import image10 from "../../assets/images/4.jpg";

const Service = () => {
  const data = [
    {
      image: image1,
      name: "Stapler",
    },
    {
      image: image2,
      name: "Red pen",
    },
    {
      image: image3,
      name: "Casual pen",
    },
    {
      image: image4,
      name: "blue pen",
    },
    {
      image: image5,
      name: "Pencel",
    },
    {
      image: image6,
      name: "black",
    },
    {
      image: image7,
      name: "Compo pen",
    },
    {
      image: image8,
      name: "Gel pen",
    },
    {
      image: image8,
      name: "Pencel",
    },
    {
      image: image8,
      name: "Rgb pen",
    },
  ];

  return (
    <>
      <section id="Service"></section>
      <div className="maindiv">
        <ContentWrapper>
          <span className="service">Service...</span>
          <div className="products2">
            {data.map((e, index) => {
              console.log("eee", e);
              return (
                <div className="image1">
                  <img
                    className="img1"
                    key={index}
                    src={e.image}
                    alt={`Image ${index + 1}`}
                  />

                  <span className="name">{e.name}</span>
                </div>
              );
            })}
          </div>

          <div className="pages">
            <div className="left">
              <img className="left2" src={image9} alt="image1" />
            </div>
            <div className="right">
              <img className="right2" src={image10} alt="image2" />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Service;
