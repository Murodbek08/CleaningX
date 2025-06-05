import styleFooter from "./Footer.module.css";
import styleIndex from "../../index.module.css";

export const Footer = () => {
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
          </div>
          <div className={styleFooter["footer-contact-us"]}>
            <h2>Contact us</h2>
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          </div>
          <div className={styleFooter["footer-hours"]}>
            <h2>Hours</h2>
            <p> Monday to Friday 6:00 AM - 9:00 PM</p>
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
      </div>
    </footer>
  );
};
export default Footer;
