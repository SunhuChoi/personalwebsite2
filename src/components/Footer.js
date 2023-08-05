import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BiLogoFacebookCircle
          onClick={() =>
            window.open("https://www.facebook.com/Qyubey/", "_blank")
          }
        />
        <BiLogoGithub
          onClick={() => window.open("https://github.com/SunhuChoi", "_blank")}
        />
        <BiLogoInstagram
          onClick={() =>
            window.open("https://www.instagram.com/svnhu.choi/", "_blank")
          }
        />
        <BiLogoLinkedinSquare
          onClick={() =>
            window.open("https://www.linkedin.com/in/sunhuchoi/", "_blank")
          }
        />
      </div>
      <p>&copy; 2023, Credits to PedroTech and Webdecoded for code help</p>
    </div>
  );
};
