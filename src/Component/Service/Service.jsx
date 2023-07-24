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

const Service = () => {
  const data = [
    {
      image: image1,
      name: "Stapler",
    },
    {
      image: image2,
      name: "Redpen",
    },
    {
      image: image3,
      name: "Casualpen",
    },
    {
      image: image4,
      name: "Gelpen",
    },
    {
      image: image5,
      name: "Pencel",
    },
    {
      image: image6,
      name: "Rgbpen",
    },
    {
      image: image7,
      name: "Compopen",
    },
    {
      image: image8,
      name: "Gelpen",
    },
    {
      image: image8,
      name: "Pencel",
    },
    {
      image: image8,
      name: "Rgbpen",
    },
  ];

  return (
    <>
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
        </ContentWrapper>
      </div>
    </>
  );
};

export default Service;
