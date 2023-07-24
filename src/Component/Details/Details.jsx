import React from "react";
import "./Details.css";
import Button from "react-bootstrap/Button";
import img from "../../assets/images/image1.jpg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Details = () => {
  return (
    <>
      <ContentWrapper>
        <div className="maindiv">
          <div className="subdiv">
            <div className="letter">
              Welcome to our enchanting world of books and stationery, where
              imagination knows no bounds, and knowledge awaits to be unraveled!
              Whether you are a book lover, a student, an artist, or simply
              seeking inspiration, our store offers a treasure trove of
              possibilities to ignite your passion and quench your thirst for
              creativity. Discover the World of Books: Dive into the vast
              expanse of literature with our handpicked collection of books that
              cater to all ages and interests. From timeless classics to
              gripping novels, educational encyclopedias to spellbinding
              fantasy, we have something to enthrall every reader. Our shelves
              are adorned with tales that take you on thrilling adventures,
              teach you about history and cultures, and open doors to new
              perspectives. For the Curious Minds: Learning is a lifelong
              journey, and we're here to accompany you every step of the way.
              Whether you seek self-improvement, professional growth, or the
              pursuit of knowledge for its own sake, our educational and
              self-help books offer insights, tips, and guidance to elevate your
              skills and broaden your horizons.
            </div>
          </div>
          <div className="sub_img">
            <img className="img1" src={img} alt="img" />
          </div>
        </div>
        <Button className="p-2 mt-2 btn" variant="dark">Enjoy now !</Button>
      </ContentWrapper>
    </>
  );
};

export default Details;
