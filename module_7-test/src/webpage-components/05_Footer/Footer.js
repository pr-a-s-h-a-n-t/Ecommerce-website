import React from "react";
import "./Footer.css";
import CompanyInfo from "./components/CompanyInfo";
import Legal from "./components/Legal";
import Features from "./components/Features";
import Resources from "./components/Resources";
import GetInTouch from "./components/GetIntouch/GetInTouch";

function Footer() {
  return (
    <>
      <div className="footer">
        <CompanyInfo />
        <Legal />
        <Features />
        <Resources />
        <GetInTouch />
         
      </div>
      <div className="mwl-container">
        <div className="mwl">
          <h6>Made with ❤️ at AccioJob</h6>
        </div>
      </div>
    </>
  );
}

export default  Footer;