import styleIndex from "../index.module.css";
import styleHome from "./HomePage.module.css";
import phoneIcon from "../assets/phone-icon.svg";
import heroImg from "../assets/hero-img.png";
import kalendarImg from "../assets/kalendar.png";
import cardPayImg from "../assets/card-pay.png";
import clearImg from "../assets/clear.png";
import homeImg from "../assets/home.png";
import officeImg from "../assets/office.png";
import industrialImg from "../assets/industrial.png";
import peopleFloverImg from "../assets/people-flower.png";

export const HomePage = () => {
  return (
    <main>
      {/* Hero section */}
      <section className={styleHome["hero-section"]}>
        <div className={styleIndex["container"]}>
          <div className={styleHome["hero-section-content"]}>
            <div className={styleHome["hero-section-text"]}>
              <h1>Quality cleaning for your home</h1>
              <p>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className={styleHome["hero-section-buttons"]}>
                <button>Get a free quote</button>
                <div className={styleHome["hero-section-phone"]}>
                  <div className={styleHome["hero-section-phone-icon"]}>
                    <img src={phoneIcon} alt="Phone icon ?" />
                  </div>
                  <div className={styleHome["hero-section-phone-text"]}>
                    <p>Call us now</p>
                    <h3>(414) 567 - 2109</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styleHome["hero-section-img"]}>
              <img src={heroImg} alt="Hero img ?" />
            </div>
          </div>
        </div>
      </section>
      {/* About section */}
      <section className={styleHome["about-section"]}>
        <div className={styleIndex["container"]}>
          <h2>About Us</h2>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
          <div className={styleHome["about-cards"]}>
            <div className={styleHome["about-card"]}>
              <img src={kalendarImg} alt="Kalendar img ?" />
              <h3>1. Schedule online</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className={styleHome["about-card"]}>
              <img src={cardPayImg} alt="Kalendar img ?" />
              <h3>2. Pay online easily</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className={styleHome["about-card"]}>
              <img src={clearImg} alt="Kalendar img ?" />
              <h3>3. Get your house cleaned</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
          </div>
          <div className={styleHome["about-buttons"]}>
            <button>Get a free quote</button>
            <button>Explore services</button>
          </div>
        </div>
      </section>
      {/* Services section */}
      <section className={styleHome["services-section"]}>
        <div className={styleIndex["container"]}>
          <div className={styleHome["services-section-header"]}>
            <h2>Our Services</h2>
            <button>Explore services</button>
          </div>
          <div className={styleHome["services-section-cards"]}>
            <div className={styleHome["services-section-card"]}>
              <img src={homeImg} alt="Home img ?" />
              <h4>House cleaning</h4>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className={styleHome["services-section-card"]}>
              <img src={officeImg} alt="Office img ?" />
              <h4>Office cleaning</h4>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className={styleHome["services-section-card"]}>
              <img src={industrialImg} alt="Industrial img ?" />
              <h4>Industrial cleaning</h4>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Follow section */}
      <section className={styleHome["follow-section"]}>
        <div className={styleIndex["container"]}>
          <div className={styleHome["follow-section-card"]}>
            <div className={styleHome["follow-section-card-img"]}>
              <img src={peopleFloverImg} alt="Flover img ?" />
            </div>
            <div className={styleHome["follow-section-card-text"]}>
              <h4>Covid-19 sanitization</h4>
              <h2>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h2>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className={styleHome["follow-section-card-buttons"]}>
                <button>Get a free quote</button>
                <div className={styleHome["follow-section-card-phone"]}>
                  <div>
                    <img src={phoneIcon} alt="Phone img ?" />
                  </div>
                  <div className={styleHome["follow-section-card-phone-text"]}>
                    <p>Call us now</p>
                    <span>(414) 567 - 2109</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styleIndex["container"]}>
        <hr />
      </div>
      {/* Article section */}
      <section className={styleHome["article-section"]}>
        <div className={styleIndex["container"]}>
          <div className={styleHome["article-section-top"]}>
            <h2>Articles & resources</h2>
            <div className={styleHome["article-section-buttons"]}>
              <button>Get a free quote</button>
              <button>Browse articles</button>
            </div>
          </div>
          <div className={styleHome["article-section-cards"]}>
            <div className={styleHome["article-section-card-1"]}>
              <div className={styleHome["article-section-card-text"]}>
                <h3>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className={styleHome["article-section-card-date"]}>
                  <data>Jan 28, 2022</data>
                  <div className={styleHome["article-section-card-img"]}></div>
                </div>
              </div>
            </div>
            <div className={styleHome["article-section-card-2"]}>
              <div className={styleHome["article-section-card-text"]}>
                <h3>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className={styleHome["article-section-card-date"]}>
                  <data>Jan 28, 2022</data>
                  <div className={styleHome["article-section-card-img"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section */}
      <section className={styleHome["contact-section"]}>
        <div className={styleIndex["container"]}>
          <div className={styleHome["contact-section-content"]}>
            <div className={styleHome["contact-section-text"]}>
              <h2>Contact Us</h2>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className={styleHome["contact-section-card-phone"]}>
                <div>
                  <img src={phoneIcon} alt="Phone img ?" />
                </div>
                <div className={styleHome["contact-section-card-phone-text"]}>
                  <p>Call us now</p>
                  <span>(414) 567 - 2109</span>
                </div>
              </div>
              <hr />
              <h3>Not convinced yet?</h3>
              <h5>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </h5>
              <button>Browse our packages</button>
            </div>
            <div className={styleHome["contact-section-form"]}>
              <form>
                <div className={styleHome["form-groups"]}>
                  <div className={styleHome["form-group"]}>
                    <label htmlFor="name">Full name</label>
                    <input id="name" type="text" />
                  </div>
                  <div className={styleHome["form-group"]}>
                    <label htmlFor="number">Phone number</label>
                    <input id="number" type="text" />
                  </div>
                </div>
                <div className={styleHome["form-groups"]}>
                  <div className={styleHome["form-group"]}>
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" />
                  </div>
                  <div className={styleHome["form-group"]}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" />
                  </div>
                </div>
                <div className={styleHome["form-textarea"]}>
                  <label htmlFor="message">Add a note</label>
                  <textarea id="message"></textarea>
                </div>
                <button type="submit">Submit message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
