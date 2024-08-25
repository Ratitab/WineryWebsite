import { Link } from "react-router-dom";
import logo from "../assets/img/logotype_dark.png";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="nav-container">
        <nav className="centered-logo top-bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <Link to="/">
                  <img
                    className="logo logo-dark"
                    alt="LogoAIRAKKK"
                    src={logo}
                  />
                </Link>
              </div>
            </div>

            <div className="row nav-menu">
              <div className="col-sm-12 columns text-center">
                <ul className="menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/proccess">Proccess</Link>
                  </li>
                  <li>
                    <Link to="/ourWines">ourWines</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mobile-toggle">
              <i className="icon icon_menu"></i>
            </div>
          </div>
          <div className="bottom-border"></div>
        </nav>
      </div>

      <div className="children-wrapper">{children}</div>
      <div className="footer-container">
        <footer className="short bg-secondary-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="icon social_twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon social_facebook"></i>
                    </a>
                  </li>
                </ul>
                <br />
                <br />
                <br />
                <font color="a87f97">
                  © Copyright 2014 Winery.&nbsp;Free Website Template Designed
                  by{" "}
                  <a href="http://www.themezy.com">
                    <font color="ffffff">Themezy</font>
                  </a>
                  .
                </font>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
