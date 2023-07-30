import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sahilsah357@gmail.com</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} /> */}
          {/* <Facebook color="white" size={"3rem"} /> */}
          {/* <Gitub color="white" size={"3rem"} /> */}
          <a href="https://github.com/sahi-dev"><img src={Github} alt="" /> </a>
          <a href="https://www.linkedin.com/in/sahil-sah-84ba89194/"> <img src={LinkedIn} alt="" /> </a>
          <a href="https://www.instagram.com/big_secret_sence/"> <img src={Instagram} alt="" />  </a>
        </div>
        <p>&#169; 2023 copyright all right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
