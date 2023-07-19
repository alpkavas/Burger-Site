import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>
      <p>Tüm Hakları Saklıdır</p>
    </div>
  );
}

export default Footer;
