import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "swiper/swiper-bundle"
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import { Fade } from "react-awesome-reveal";
// sections for this page

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import Router from "next/router";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  new Swiper(".testimonials-carousel .swiper-container", {
    preloadImages: false,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    mousewheel: false,
    centeredSlides: true,
    pagination: {
      el: '.tc-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.listing-carousel-button-next',
      prevEl: '.listing-carousel-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      980: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },

    }
  });
  React.useEffect(() => {
    if (localStorage.getItem("admin") == "true") {
      Router.push("/admin");
    }

    console.log("hola")


  }, [])
  return (
    <div>
      <Header
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Fade>
                  <h1 className={classes.title}>NextJS Material Kit.</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Material Kit based on Material-UI and NextJS.
                  </h3>
                </Fade>

              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <div
          className={classes.containerFluid}
          style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "4%", paddingBottom: "4%" }}
        >
          <Fade>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "24px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Some of our{" "}
              <span style={{ color: "#a435f0" }}>featured courses</span>
            </h3>
            <h3 style={{ fontWeight: "bold", fontSize: "32px", color: "black", marginBottom: "24px" }}>
              Crypto Trading
            </h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <div className={classes.containerFluid} style={{ boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)", borderRadius: "3px", }}>
                  <a href="">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/2c/fdebb0728711e8a431b1fb8caaf072/MOOC-Logo.fw.png?auto=compress&dpr=0.8955223880597015&w=268&h=167&fit=crop"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className={classes.containerFluid} style={{ padding: "2% 4%" }}>
                      <h3 style={{ fontWeight: "400", fontSize: "16px" }}>Coures</h3>
                      <h3 style={{ fontWeight: "500", fontSize: "24px", marginTop: "20px" }}>Foundation to trading</h3>
                    </div>

                  </a>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <div className={classes.containerFluid} style={{ boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)", borderRadius: "3px", }}>
                  <a href="">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/2c/fdebb0728711e8a431b1fb8caaf072/MOOC-Logo.fw.png?auto=compress&dpr=0.8955223880597015&w=268&h=167&fit=crop"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className={classes.containerFluid} style={{ padding: "2% 4%" }}>
                      <h3 style={{ fontWeight: "400", fontSize: "16px" }}>Coures</h3>
                      <h3 style={{ fontWeight: "500", fontSize: "24px", marginTop: "20px" }}>Foundation to trading</h3>
                    </div>

                  </a>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <div className={classes.containerFluid} style={{ boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)", borderRadius: "3px", }}>
                  <a href="">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/2c/fdebb0728711e8a431b1fb8caaf072/MOOC-Logo.fw.png?auto=compress&dpr=0.8955223880597015&w=268&h=167&fit=crop"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className={classes.containerFluid} style={{ padding: "2% 4%" }}>
                      <h3 style={{ fontWeight: "400", fontSize: "16px" }}>Coures</h3>
                      <h3 style={{ fontWeight: "500", fontSize: "24px", marginTop: "20px" }}>Foundation to trading</h3>
                    </div>

                  </a>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <div className={classes.containerFluid} style={{ boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)", borderRadius: "3px", }}>
                  <a href="">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/2c/fdebb0728711e8a431b1fb8caaf072/MOOC-Logo.fw.png?auto=compress&dpr=0.8955223880597015&w=268&h=167&fit=crop"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className={classes.containerFluid} style={{ padding: "2% 4%" }}>
                      <h3 style={{ fontWeight: "400", fontSize: "16px" }}>Coures</h3>
                      <h3 style={{ fontWeight: "500", fontSize: "24px", marginTop: "20px" }}>Foundation to trading</h3>
                    </div>

                  </a>
                </div>
              </GridItem>
            </GridContainer>

          </Fade>

        </div>
        <div className={classes.containerFluid} style={{ overflow: "hidden", paddingLeft: "8%", paddingRight: "8%", paddingTop: "4%", paddingBottom: "4%", position: "relative" }}>
          <h3 style={{ fontWeight: "600", fontSize: "32px", color: "black", textAlign: "center" }}>From the Sonershub community</h3>
          <h3 style={{ fontWeight: "500", fontSize: "18px", color: "black", textAlign: "center" }}>87+ million people are already learning on Sonershub</h3>
          <div className="testimonials-carousel-wrap" style={{ overflow: "hidden" }}>
            <div className="listing-carousel-button listing-carousel-button-next"><i className="fa fa-caret-right" style={{ color: "#fff" }}></i></div>
            <div className="listing-carousel-button listing-carousel-button-prev"><i className="fa fa-caret-left" style={{ color: "#fff" }}></i></div>
            <div className="testimonials-carousel " style={{ overflow: "hidden" }}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-avatar"><img src="/img/faces/avatar.jpg" /></div>
                      <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#" className="text-link"></a>
                        <div className="testimonials-avatar">
                          <h3>John Doe</h3>
                          <h4>Owner</h4>
                        </div>
                      </div>
                      <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-avatar"><img src="6.jpg" /></div>
                      <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#" className="text-link"></a>
                        <div className="testimonials-avatar">
                          <h3>Doe John</h3>
                          <h4>Designer</h4>
                        </div>
                      </div>
                      <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>


                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-avatar"><img src="/img/faces/avatar.jpg" /></div>
                      <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#" className="text-link"></a>
                        <div className="testimonials-avatar">
                          <h3>Doe Boe</h3>
                          <h4>Director</h4>
                        </div>
                      </div>
                      <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-avatar"><img src="6.jpg" /></div>
                      <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#" className="text-link"></a>
                        <div className="testimonials-avatar">
                          <h3>Doe John</h3>
                          <h4>Designer</h4>
                        </div>
                      </div>
                      <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-avatar"><img src="/img/faces/avatar.jpg" /></div>
                      <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#" className="text-link"></a>
                        <div className="testimonials-avatar">
                          <h3>Boe Doe</h3>
                          <h4>Developer</h4>
                        </div>
                      </div>
                      <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>


                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-avatar"><img src="6.jpg" /></div>
                      <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#" className="text-link"></a>
                        <div className="testimonials-avatar">
                          <h3>Doe John</h3>
                          <h4>Designer</h4>
                        </div>
                      </div>
                      <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div className="tc-pagination"></div>
          </div>
        </div>
        <div className={classes.containerFluid} style={{ padding: "8% 8%", marginTop: "4%", marginBottom: "4%" }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.container}>
                <div style={{ width: "240px", height: "160px", position: "relative", margin: "auto auto", backgroundColor: "#f4522c" }}></div>
                <img src="/img/lol.png" style={{ width: "98%", margin: "0 auto", height: "auto", position: "absolute", top: "0%" }} />
              </div>

            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.container}>
                <Fade>
                  <h3 style={{ fontWeight: "600", fontSize: "28px", color: "black" }}>
                    Take the next step toward your personal and professional goals with Sonerhub.
                  </h3>
                  <p>Join now to receive personalized recommendations from the full Sonerhub catalog.</p>

                  <Button style={{ backgroundColor: "black", color: "white", border: "1px solid black", padding: "10px 28px", fontWeight: "500", textTransform: "capitalize", marginTop: "25px", fontSize: "16px", }}>Join now</Button>
                </Fade>

              </div>

            </GridItem>
          </GridContainer>
        </div>
      </div >
      <Footer />
    </div >
  );
}
