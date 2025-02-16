import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/flexslider.min.css";
import "../../assets/css/line-icons.min.css";
import "../../assets/css/elegant-icons.min.css";
import "../../assets/css/lightbox.min.css";
import "../../assets/css/theme-1.css";
import "../../assets/css/custom.css";
import "../../assets/css/font-cardo.css";
import backgroundImage from "../../assets/img/heroImage.jpg";
import DefaultLayout from "../../layouts/DefaultLayout";
import mildianiImage from '../../assets/img/Mildiani.png'
import batonoImage from "../../assets/img/BatonoLogo.jpeg"

const HomeComponent = () => {
  return (
    <div>
      <DefaultLayout>
        <div className="main-container">
          <header 
            className="fullscreen-element no-pad centered-text" 
            style={{ 
              height: '100vh', 
              minHeight: '100vh',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div 
              className="background-image-holder parallax-background overlay" 
              style={{ 
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            >
              <img
                className="background-image"
                alt="Background"
                src={backgroundImage}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: 'none'
                }}
              />
            </div>

            <div 
              className="container align-vertical" 
              style={{ 
                position: 'relative', 
                zIndex: 2,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div className="row">
                <div className="col-md-7 col-sm-8 home-hero">
                  <h1 className="text-white">
                    Discover Georgia's 8,000-Year-Old Wine Heritage
                  </h1>
                  <p className="lead text-white">
                    Experience authentic Georgian wines, from the birthplace of winemaking
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

          <section className="page-title page-title-4" style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            padding: '100px 0'
          }}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Decorative element */}
                  <div style={{
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #D4AF37 0%, rgba(212,175,55,0.3) 100%)',
                    marginBottom: '30px'
                  }} />
                  <h2 className="text-white" style={{
                    fontSize: '2.8rem',
                    fontWeight: '300',
                    letterSpacing: '2px',
                    marginBottom: '25px'
                  }}>The Cradle of Wine</h2>
                  <p className="lead text-white" style={{ fontWeight: '300', lineHeight: '1.8' }}>
                    Georgia's winemaking tradition dates back between 9000 and 7000 BC, making it the world's oldest wine region
                  </p>
                </div>
                
                <div className="col-md-6">
                  <div style={{
                    border: '1px solid rgba(212,175,55,0.2)',
                    padding: '40px',
                    background: 'rgba(0,0,0,0.2)'
                  }}>
                    <p className="lead text-white" style={{ fontWeight: '300', lineHeight: '1.8' }}>
                    "The unique terroir of Georgia is defined by the Caucasus Mountains and Black Sea, creating a perfect microclimate for viticulture. At altitudes ranging from 250-650 meters above sea level, our vineyards benefit from long, sun-drenched days and cool mountain nights. This distinctive climate, combined with Georgia's rich volcanic and limestone soils, creates ideal conditions that have sustained winemaking here for over 8,000 years.
The Alazani Valley, stretching for 110km between the Great Caucasus and Tsiv-Gombori mountain ranges, is particularly renowned. Here, traditional Georgian grape varieties like Saperavi and Rkatsiteli thrive in conditions that have made Kakheti the heart of Georgian winemaking, producing 70% of the country's finest wines.
What makes Georgian wine truly unique is not just its climate, but its unbroken 8,000-year-old winemaking tradition, including the UNESCO-protected Qvevri method - a testament to the perfect harmony between nature and ancient wisdom."

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section with luxury styling */}
          <section className="features features-1" style={{ 
            padding: '120px 0',
            background: '#fff' 
          }}>
            <div className="container">
              <div className="row text-center mb-64">
                <div className="col-md-8 col-md-offset-2">
                  <div style={{
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #4A171E 0%, rgba(74,23,30,0.3) 100%)',
                    margin: '0 auto 30px'
                  }} />
                  <h2 style={{
                    fontSize: '2.4rem',
                    fontWeight: '300',
                    letterSpacing: '2px',
                    marginBottom: '25px',
                    color: '#4A171E'
                  }}>Our Heritage</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div style={{
                    padding: '60px 40px',
                    background: '#fff',
                    boxShadow: '0 15px 45px -10px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div className="text-center">
                      <i className="icon-wine icon-large" style={{ color: '#D4AF37', fontSize: '48px' }}></i>
                      <h5 style={{
                        fontSize: '1.4rem',
                        letterSpacing: '1px',
                        marginTop: '25px',
                        marginBottom: '20px'
                      }}>Traditional Methods</h5>
                    </div>
                    <p style={{ lineHeight: '1.8', color: '#666' }}>
                      Experience wines made in Qvevri - traditional Georgian clay vessels buried in the earth, a UNESCO-protected method dating back 6000 years
                    </p>
                    {/* Decorative corner */}
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderTop: 'none',
                      borderLeft: 'none'
                    }} />
                  </div>
                </div>

                {/* Similar styling for other feature boxes */}
                <div className="col-md-4">
                  <div style={{
                    padding: '60px 40px',
                    background: '#fff',
                    boxShadow: '0 15px 45px -10px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div className="text-center">
                      <i className="icon-trophy icon-large" style={{ color: '#D4AF37', fontSize: '48px' }}></i>
                      <h5 style={{
                        fontSize: '1.4rem',
                        letterSpacing: '1px',
                        marginTop: '25px',
                        marginBottom: '20px'
                      }}>Award-Winning Excellence</h5>
                    </div>
                    <p style={{ lineHeight: '1.8', color: '#666' }}>
                      Our wines consistently earn recognition from International Wine Challenge, Decanter World Wine Awards, and other prestigious competitions
                    </p>
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderTop: 'none',
                      borderLeft: 'none'
                    }} />
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{
                    padding: '60px 40px',
                    background: '#fff',
                    boxShadow: '0 15px 45px -10px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div className="text-center">
                      <i className="icon-map icon-large" style={{ color: '#D4AF37', fontSize: '48px' }}></i>
                      <h5 style={{
                        fontSize: '1.4rem',
                        letterSpacing: '1px',
                        marginTop: '25px',
                        marginBottom: '20px'
                      }}>Premier Regions</h5>
                    </div>
                    <p style={{ lineHeight: '1.8', color: '#666' }}>
                      Sourced from renowned regions like Kakheti, producing 70% of Georgia's finest wines in ideal vineyard conditions
                    </p>
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderTop: 'none',
                      borderLeft: 'none'
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partner Wineries Section with luxury styling */}
          <section className="bg-dark" style={{ 
            padding: '120px 0',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          }}>
            <div className="container">
              <div className="row text-center mb-64">
                <div className="col-md-8 col-md-offset-2">
                  <div style={{
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #D4AF37 0%, rgba(212,175,55,0.3) 100%)',
                    margin: '0 auto 30px'
                  }} />
                  <h2 className="text-white" style={{
                    fontSize: '2.4rem',
                    fontWeight: '300',
                    letterSpacing: '2px',
                    marginBottom: '25px'
                  }}>Our Partner Wineries</h2>
                  <p className="lead text-white" style={{ fontWeight: '300' }}>
                    We carefully select and import exceptional wines from Georgia's most prestigious wineries
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '60px 40px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div className="text-center mb-32">
                      <img
                        src={mildianiImage}
                        alt="Mildiani Family Winery"
                        style={{
                          maxHeight: '250px',
                          width: 'auto',
                          marginBottom: '20px'
                        }}
                      />
                    </div>

                    <p className="text-white" style={{ opacity: 0.8, lineHeight: '1.8' }}>
                      A renowned family winery committed to preserving Georgian winemaking traditions while embracing modern excellence. Their wines exemplify the perfect balance of heritage and innovation.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '60px 40px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div className="text-center mb-32">
                      <img
                        src={batonoImage}
                        alt="Batono Winery"
                        style={{
                          maxHeight: '250px',
                          width: 'auto',
                          marginBottom: '20px'
                        }}
                      />
                    </div>
                    <p className="text-white" style={{ opacity: 0.8, lineHeight: '1.8' }}>
                      Known for their exceptional craftsmanship and attention to detail, Batono Winery produces distinguished wines that showcase the unique terroir of Georgia's finest wine regions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mt-64">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                  <p className="lead text-white" style={{ opacity: 0.9, marginBottom: '40px' }}>
                    As Georgia's premier wine importer to America, we carefully select and curate wines that represent the finest of Georgian winemaking tradition and quality.
                  </p>
                  <a href="/ourWines" className="btn" style={{
                    background: '#D4AF37',
                    color: '#fff',
                    padding: '15px 40px',
                    fontSize: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontWeight: '400',
                    transition: 'all 0.3s ease'
                  }}>Explore Our Wines</a>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section with luxury styling */}
          <section style={{ 
            padding: '100px 0',
            background: '#fff' 
          }}>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div style={{
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #D4AF37 0%, rgba(212,175,55,0.3) 100%)',
                    margin: '0 auto 30px'
                  }} />
                  <h3 style={{
                    fontSize: '2.4rem',
                    fontWeight: '300',
                    letterSpacing: '2px',
                    marginBottom: '60px'
                  }}>International Recognition</h3>
                </div>
              </div>
              
              <div className="row">
                <div className="col-sm-12">
                  <div style={{
                    background: '#fff',
                    boxShadow: '0 15px 45px -10px rgba(0,0,0,0.08)',
                    padding: '60px'
                  }}>
                    <div className="row">
                      <div className="col-sm-4 text-center">
                        <h1 style={{
                          fontSize: '4rem',
                          color: '#D4AF37',
                          marginBottom: '15px'
                        }}>90+</h1>
                        <h5 style={{
                          fontSize: '1.2rem',
                          letterSpacing: '2px',
                          textTransform: 'uppercase'
                        }}>Points Ratings</h5>
                      </div>
                      
                      <div className="col-sm-4 text-center">
                        <h1 style={{
                          fontSize: '4rem',
                          color: '#D4AF37',
                          marginBottom: '15px'
                        }}>18</h1>
                        <h5 style={{
                          fontSize: '1.2rem',
                          letterSpacing: '2px',
                          textTransform: 'uppercase'
                        }}>SVA Regions</h5>
                      </div>
                      
                      <div className="col-sm-4 text-center">
                        <h1 style={{
                          fontSize: '4rem',
                          color: '#D4AF37',
                          marginBottom: '15px'
                        }}>8000</h1>
                        <h5 style={{
                          fontSize: '1.2rem',
                          letterSpacing: '2px',
                          textTransform: 'uppercase'
                        }}>Years of Heritage</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>
      </DefaultLayout>
    </div>
  );
};

export default HomeComponent;