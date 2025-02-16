import React from "react";
import "../../assets/css/flexslider.min.css";
import "../../assets/css/line-icons.min.css";
import "../../assets/css/elegant-icons.min.css";
import "../../assets/css/lightbox.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme-1.css";
import "../../assets/css/custom.css";
import "../../assets/css/font-cardo.css";

// Import images

import mildianiLogo from "../../assets/img/Mildiani.png";
import batonoLogo from "../../assets/img/BatonoLogo.jpeg";

import ProductCard from "../productCard";
import DefaultLayout from "../../layouts/DefaultLayout";

const OurWines = () => {
  const products = [
    {
      image: mildianiLogo,
      brand: {
        id: 123,
        name: "Mildiani",
      },
      route: "wine-collection/mildiani",
    },
    {
      image: batonoLogo,
      brand: {
        id: 124,
        name: "BATONO",
      },
      route: "wine-collection/batono",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <div className="main-container">
          {/* Team Section */}
          <div className="product-cards-container">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <section className="duplicatable-content pure-text">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h1>Discover Our Wine Collections</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <h6>Regional Wines</h6>
                  <p>
                    Our regional wines express the colorful personality and
                    diversity of Kakhetian traditional wines, which have been
                    adored for centuries by wine lovers. They are young, fresh
                    and redolent, highlighting the regional character and
                    intended to reflect the best of Kakheti terroir and Alazani
                    Valley.
                  </p>
                </div>

                <div className="col-sm-4">
                  <h6>Single Vineyard Wines</h6>
                  <p>
                    Sourced exclusively from dedicated vineyard areas, with
                    grape yields limited to 6-7 tons per hectare. Strict
                    selection of grapes in the vineyard, hand sorting in the
                    winery before crushing, and careful winemaking processes
                    ensure the highest quality wines that showcase our best
                    terroirs.
                  </p>
                </div>

                <div className="col-sm-4">
                  <h6>Traditional Kvevri Wines</h6>
                  <p>
                    Our most cherished wine line is produced in compliance with
                    ancient winemaking techniques dating back 6000 years, in
                    traditional clay jars - Kvevris, buried in the cellar's
                    earthen floor. The grapes are sourced from selected vineyard
                    plots, with limited yields for maximum quality and
                    concentration.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default OurWines;
