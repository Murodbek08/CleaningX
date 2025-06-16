import styleHeader from "./Header.module.css";
import styleIndex from "../../index.module.css";
import navLogo from "../../assets/nav-logo.svg";
// import Switch from "../hamburger/Hamburger";

const Header = () => {
  return (
    <header className={styleHeader["header"]}>
      <div className={styleIndex["container"]}>
        <nav className={styleHeader["nav"]}>
          <div className={styleHeader["nav-content"]}>
            <div className={styleHeader["nav-content-top"]}>
              <div className={styleHeader["nav-logo"]}>
                <img src={navLogo} alt="Nav logo ?" />
              </div>
              {/* <div className={styleHeader["hamburger"]}>
                <Switch />
              </div> */}
            </div>
            <ul className={styleHeader["nav-menu"]}>
              <li>
                <a className={styleHeader["nav-menu-link"]} href="#Home">
                  Home
                </a>
              </li>
              <li>
                <a className={styleHeader["nav-menu-link"]} href="#About">
                  About
                </a>
              </li>
              <li>
                <a className={styleHeader["nav-menu-link"]} href="#Services">
                  Services
                </a>
              </li>
              <li>
                <a className={styleHeader["nav-menu-link"]} href="#Articles">
                  Articles
                </a>
              </li>
              <li>
                <a className={styleHeader["nav-menu-link"]} href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={styleHeader["nav-menu-btns"]}>
            <button className={styleHeader["nav-menu-btn-count"]}>
              Cart (0)
            </button>
            <button className={styleHeader["nav-menu-btn"]}>
              Get a free quote
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
