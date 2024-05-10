import React from "react";
import "./Footer.css";
import {
  BiLogoTwitter,
  BiLogoFacebook,
} from "react-icons/bi";
import PlayStore from "../../images/Footer/google-playstore.webp"
export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="Footercol1">
        <div className="Footerheader">Burning Moon</div>
        <div className="FootersmallMenu">
          <div className="Footermenu">About Us</div>
          <div className="Footermenu">Careers</div>
        </div>
        <div className="FooterRightsArea">
          <div className="Footerrights"> ⓒ 2024 Debroglie. All Rights Reserved.</div>
          <div className="FooterDocuments">
            <div className="Footerparts">Terms Of Use</div>
            <div className="Footerparts">Privacy Policy</div>
            <div className="Footerparts">FAQ</div>
          </div>
        </div>
      </div>
      <div className="Footercol2">
        <div className="Footerheader">View Website in</div>
        <div className="FootersmallMenu">English</div>
      </div>
      <div className="Footercol3">
        <div className="Footerheader">Need Help?</div>
        <div className="FootersmallMenu">
          <div className="Footermenu">Visit Help Center</div>
          <div className="Footermenu">Share Feedback</div>
        </div>
      </div>
      <div className="Footercol4">
        <div className="Footerheader">Connect with Us</div>
        <div className="FootersocialIcons">
          <div className="Footerfb"><BiLogoTwitter /></div>
          <div className="Footertw"><BiLogoFacebook /></div>
        </div>
        <div className="FooterPlaystore">
          <img src={PlayStore} alt="adsfas" />
        </div>
      </div>
    </div>
  );
}
