import { useEffect, useState } from "react";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import headerImg from "../assets/mypfp.jpg";
import "../styles/Home.css";

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = ["My name is Sunhu Choi", "Welcome to my Portfolio"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setisDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setisDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="home">
      <div className="about">
        <img src={headerImg}></img>
        <h2>{text}</h2>
        <div className="prompt">
          <h4>Student at UCSB, aspiring SWE</h4>
          <BiLogoLinkedinSquare
            onClick={() =>
              window.open("https://www.linkedin.com/in/sunhuchoi/", "_blank")
            }
          />
          <BiLogoGithub
            onClick={() =>
              window.open("https://github.com/SunhuChoi", "_blank")
            }
          />
          <a href="mailto:svnhuchoi@gmail.com">
            <BiLogoGmail />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          {/* <li className="item">
            <h2>Front-End</h2>
            <span>Hello</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Hi</span>
          </li> */}
          <li className="item">
            <h2>Languages</h2>
            <span>C++, Java, JavaScript, Python, Assembly</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
