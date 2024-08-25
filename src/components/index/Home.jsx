import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/flexslider.min.css";
import "../../assets/css/line-icons.min.css";
import "../../assets/css/elegant-icons.min.css";
import "../../assets/css/lightbox.min.css";
import "../../assets/css/theme-1.css";
import "../../assets/css/custom.css";
import "../../assets/css/font-cardo.css";
import backgroundImage from "../../assets/img/main_image.jpg";
import DefaultLayout from "../../layouts/DefaultLayout";

const HomeComponent = () => {
  return (
    <div>
      {/* Loader */}
      {/* <div className="loader">img
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div> */}

      {/* Navigation */}

      <DefaultLayout>
        <div className="main-container">
        </div>
          <header className="fullscreen-element no-pad centered-text">
            <div className="background-image-holder parallax-background overlay">
              <img
                className="background-image"
                alt="Background"
                src={backgroundImage}
              />
            </div>

            <div className="container align-vertical">
              <div className="row">
                <div className="col-md-7 col-sm-8 home-hero">
                  <h1 className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </h1>
                  <p className="lead text-white">
                    Excepteur sint occaecat cupidatat sunt culpa officia.
                  </p>
                  <a
                    target="_self"
                    href="#"
                    className="btn btn-primary btn-white inner-link"
                  >
                    Learn more
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary btn-filled inner-link"
                    target="_self"
                  >
                    Sign up for tasting
                  </a>
                </div>
              </div>
            </div>
          </header>
      </DefaultLayout>

      {/* Scripts */}
      {/* <script src="https://www.youtube.com/iframe_api"></script>
      <script src="../../assets/js/jquery.min.js"></script>
      <script src="../../assets/js/jquery.plugin.min.js"></script>
      <script src="../../assets/js/bootstrap.min.js"></script>
      <script src="../../assets/js/jquery.flexslider-min.js"></script>
      <script src="../../assets/js/smooth-scroll.min.js"></script>
      <script src="../../assets/js/skrollr.min.js"></script>
      <script src="../../assets/js/spectragram.min.js"></script>
      <script src="../../assets/js/scrollReveal.min.js"></script>
      <script src="../../assets/js/isotope.min.js"></script>
      <script src="../../assets/js/twitterFetcher_v10_min.js"></script>
      <script src="../../assets/js/lightbox.min.js"></script>
      <script src="../../assets/js/jquery.countdown.min.js"></script>
      <script src="../../assets/js/scripts.js"></script> */}
    </div>
  );
};

export default HomeComponent;
