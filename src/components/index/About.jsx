import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import heroImage from "../../assets/img/aboutus.jpg";

const AboutComponent = () => {
  const styles = {
    mainContainer: {
      maxWidth: "100%",
      margin: "0 auto",
      backgroundColor: "#FFFFFF",
      paddingTop: "100px",
    },
    contentBlock: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 60px",
    },
    elegantHeading: {
      fontSize: "7rem",
      fontFamily: "Cardo, serif",
      color: "#1A1A1A",
      lineHeight: 1.1,
      marginBottom: "40px",
      fontWeight: "400",
    },
    subHeading: {
      fontSize: "3.5rem",
      fontFamily: "Cardo, serif",
      color: "#1A1A1A",
      marginBottom: "30px",
      lineHeight: 1.3,
    },
    goldAccent: {
      width: "180px",
      height: "2px",
      backgroundColor: "#C1A460",
      margin: "30px 0",
    },
    bodyText: {
      fontSize: "1.2rem",
      lineHeight: 1.8,
      color: "#4A4A4A",
      marginBottom: "30px",
    },
    leadText: {
      fontSize: "2rem",
      lineHeight: 1.6,
      color: "#4A4A4A",
      marginBottom: "40px",
      fontWeight: "300",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px",
      marginTop: "60px",
    },
    statsBox: {
      padding: "40px",
      backgroundColor: "#F8F5F0",
      textAlign: "center",
    },
    statNumber: {
      fontSize: "3.5rem",
      fontFamily: "Cardo, serif",
      color: "#C1A460",
      marginBottom: "15px",
    },
    heritageSection: {
      padding: "120px 0",
      backgroundColor: "#FFFFFF",
    },
    heritageBorder: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "80px 60px",
      border: "1px solid #C1A460",
    },
    heritageGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "100px",
      margin: "60px 0",
    },
    featureBox: {
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      padding: "40px",
      backgroundColor: "#F8F5F0",
      transition: "transform 0.3s ease",
    },
    featureIcon: {
      width: "80px",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#C1A460",
      color: "#FFFFFF",
      fontSize: "2rem",
      marginBottom: "20px",
    },
    finalSection: {
      padding: "120px 0",
      backgroundColor: "#1A1A1A",
      color: "#FFFFFF",
      position: "relative",
      marginBottom: "0",
    },
    finalContent: {
      maxWidth: "1000px",
      margin: "0 auto",
      textAlign: "center",
      padding: "0 30px",
    },
    buttonGroup: {
      display: "flex",
      gap: "30px",
      justifyContent: "center",
      marginTop: "50px",
    },
    luxuryButton: {
      padding: "20px 60px",
      fontSize: "0.9rem",
      letterSpacing: "3px",
      textTransform: "uppercase",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: "Cardo, serif",
    },
  };

  const additionalStyles = {
    imageSection: {
      backgroundColor: "#F8F5F0",
      padding: "120px 0",
      marginTop: "80px",
    },
    imageGrid: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 60px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "center",
    },
    imageWrapper: {
      height: "700px",
      width: "100%",
      position: "relative",
    },
    styledImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <DefaultLayout>
      <div style={styles.mainContainer}>
        <section style={styles.contentBlock} className="">
          <div style={styles.contentBlock}>
            <h2 style={styles.elegantHeading}>
              8000 Years of Winemaking Excellence
            </h2>
            <div style={styles.goldAccent}></div>
            <p style={styles.leadText}>
              As Unated State's leading importer of Georgian wines, we bridge the
              ancient winemaking traditions of Georgia with America's most
              discerning wine market. Our mission is to introduce Americans to
              the extraordinary world of Georgian wines.
            </p>

            <div style={styles.infoGrid}>
              <div style={styles.statsBox}>
                <div style={styles.statNumber}>8,000</div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                  Years of Winemaking
                </h3>
                <p>World's oldest continuous winemaking tradition</p>
              </div>
              <div style={styles.statsBox}>
                <div style={styles.statNumber}>525+</div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                  Endemic Varieties
                </h3>
                <p>Unique Georgian grape varieties</p>
              </div>
              <div style={styles.statsBox}>
                <div style={styles.statNumber}>18</div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                  Wine Regions
                </h3>
                <p>Distinct appellations across Georgia</p>
              </div>
            </div>
          </div>
        </section>

        <section style={additionalStyles.imageSection}>
          <div style={additionalStyles.imageGrid}>
            <div style={additionalStyles.imageWrapper}>
              <img
                src={heroImage}
                alt="Georgian wine heritage"
                style={additionalStyles.styledImage}
              />
            </div>
            <div>
              <h2 style={additionalStyles.subHeading}>
                Tradition Meets Excellence
              </h2>
              <div style={additionalStyles.goldAccent}></div>
              <p style={additionalStyles.leadText}>
                Our dedication to preserving and sharing Georgia's rich
                winemaking heritage drives us to source only the finest wines
                from the country's most prestigious vineyards.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.heritageSection}>
          <div style={styles.heritageBorder}>
            <h2 style={{ ...styles.subHeading, textAlign: "center" }}>
              Our Heritage
            </h2>
            <div style={{ ...styles.goldAccent, margin: "30px auto" }}></div>
            <div style={styles.heritageGrid}>
              {[
                {
                  icon: "trophy",
                  title: "Award Winning",
                  text: "Internationally acclaimed wines recognized at prestigious competitions worldwide",
                },
                {
                  icon: "wine",
                  title: "Traditional Methods",
                  text: "Ancient Kvevri vessels merged with modern expertise for unparalleled quality",
                },
                {
                  icon: "beaker",
                  title: "Premium Terroir",
                  text: "Exceptional growing conditions in the renowned Alazani Valley",
                },
                {
                  icon: "globe",
                  title: "Global Recognition",
                  text: "Respected and sought after in the world's most distinguished markets",
                },
              ].map((feature, index) => (
                <div key={index} style={styles.featureBox}>
                  <div style={styles.featureIcon}>
                    <i className={`icon icon-${feature.icon}`}></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "2rem",
                      marginBottom: "15px",
                      fontFamily: "Cardo, serif",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      color: "#4A4A4A",
                    }}
                  >
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            ...styles.finalSection,
            marginBottom: 0, // Remove any margin
            paddingBottom: "120px", // Add padding instead
          }}
        >
          <div style={styles.finalContent}>
            <h2 style={{ ...styles.subHeading, color: "#FFFFFF" }}>
              Experience Georgian Excellence
            </h2>
            <div style={{ ...styles.goldAccent, margin: "30px auto" }}></div>
            <p
              style={{
                ...styles.leadText,
                color: "#FFFFFF",
                maxWidth: "700px",
                margin: "0 auto 40px",
              }}
            >
              Discover our collection of premium wines, from the prestigious
              SATRAPEZO line to our acclaimed regional varieties
            </p>
            <div style={styles.buttonGroup}>
              <a href="/ourWines">
                <button
                  style={{
                    ...styles.luxuryButton,
                    backgroundColor: "#C1A460",
                    color: "#FFFFFF",
                  }}
                >
                  EXPLORE OUR WINES
                </button>
              </a>

              <a href="/contact">
                <button
                  style={{
                    ...styles.luxuryButton,
                    backgroundColor: "transparent",
                    border: "1px solid #C1A460",
                    color: "#C1A460",
                  }}
                >
                  CONTACT US
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default AboutComponent;
