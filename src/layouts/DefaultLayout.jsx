import { Link } from "react-router-dom";
import footerlogo from "../assets/img/IBM2.jpg";
import logo from "../assets/img/IBMLogo.jpg";

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
        <footer style={{
          background: 'linear-gradient(to bottom, #1a1a1a, #2d1518)',
          padding: '80px 0 40px',
          color: '#fff'
        }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div style={{ marginBottom: '30px' }}>
                  <img
                    src={footerlogo}
                    alt="Iberian Wines Imports"
                    style={{ 
                      maxWidth: '200px',
                      marginBottom: '20px'
                    }}
                  />
                  <p style={{ 
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: '1.8',
                    fontSize: '14px'
                  }}>
                    Our mission is to introduce the world to the bold flavors, 
                    distinct character, and unparalleled quality of Georgian wines.
                  </p>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <h5 style={{
                  color: '#D4AF37',
                  fontSize: '14px',
                  letterSpacing: '2px',
                  marginBottom: '20px',
                  textTransform: 'uppercase'
                }}>Contact Us</h5>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{ marginBottom: '15px' }}>
                    <a href="tel:123-456-789" style={{
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}>
                      123-456-789
                    </a>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <a href="mailto:abc123@email.com" style={{
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}>
                      abc123@email.com
                    </a>
                  </li>
                  <li>
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                      123 First Street XYZ
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 text-right">
                <h5 style={{
                  color: '#D4AF37',
                  fontSize: '14px',
                  letterSpacing: '2px',
                  marginBottom: '20px',
                  textTransform: 'uppercase'
                }}>Follow Us</h5>
                <ul className="social-icons" style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '15px'
                }}>
                  <li>
                    <a href="#" style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '20px',
                      transition: 'color 0.3s ease'
                    }}>
                      <i className="icon social_twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '20px',
                      transition: 'color 0.3s ease'
                    }}>
                      <i className="icon social_facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '20px',
                      transition: 'color 0.3s ease'
                    }}>
                      <i className="icon social_instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row mt-64">
              <div className="col-sm-12">
                <div style={{
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: '20px',
                  marginTop: '40px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '12px',
                    margin: 0
                  }}>
                    © {new Date().getFullYear()} Iberian Wines Imports. All rights reserved.
                  </p>
                  <div>
                    <a 
                      href="/privacy-policy" 
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '12px',
                        textDecoration: 'none',
                        marginLeft: '20px',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#D4AF37'}
                      onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      Privacy Policy
                    </a>
                    <a 
                      href="/terms" 
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '12px',
                        textDecoration: 'none',
                        marginLeft: '20px',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#D4AF37'}
                      onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
