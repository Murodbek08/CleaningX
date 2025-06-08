import styleFooter from "./Footer.module.css";
import styleIndex from "../../index.module.css";
import navLogoImg from "../../assets/nav-logo.svg";

export const Footer = () => {
  const squares = [];
  for (let i = 0; i <= 4; i++) {
    squares.push(<div key={i} className={styleFooter["footer-square"]}></div>);
  }
  return (
    <footer className={styleFooter["footer"]}>
      <div className={styleIndex["container"]}>
        <div className={styleFooter["footer-content"]}>
          <div className={styleFooter["footer-textcontent"]}>
            <h2>Quality cleaning for your home</h2>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <div className={styleFooter["footer-squares"]}>{squares}</div>
          </div>
          <div className={styleFooter["footer-contact-us"]}>
            <h2>Contact us</h2>
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
            <p>(414) 567 - 2109</p>
            <p>contact@cleaning.com</p>
          </div>
          <div className={styleFooter["footer-hours"]}>
            <h2>Hours</h2>
            <h3>Monday to Friday</h3>
            <p>6:00 AM - 9:00 PM</p>
            <h3>Saturday & Sunday</h3>
            <p>8:00 AM - 8:00 PM</p>
          </div>
          <div className={styleFooter["footer-estimate"]}>
            <h2>Get a free estimate </h2>
            <span>(414) 567 - 2109</span>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <button>Request a free quote</button>
          </div>
        </div>
        <hr />
        <div className={styleFooter["footer-content-bottom"]}>
          <div>
            <img src={navLogoImg} alt="Nav logo ?" />
            <p>
              Copyright © Cleaning X | Designed by <span>BRIX Templates</span>{" "}
              - Powered by <span>Webflow</span> - <span>Licenses</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
