import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../../Component/ContentWrapper/ContentWrapper";
const Fotter = () => {
  return (
    <>
      <div className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li className="menuItem">Terms of services</li>
            <li className="menuItem">Private Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">QA</li>
          </ul>
          <div className="discreption">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className="socialIcons">
            <span className="icon">
              <FaFacebookF/>
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Fotter;