import React, { useState } from "react";
import logo from "../../assets/img/logotype_dark.png";
import proccessImage from "../../assets/img/process_image.jpg";
import { Link } from "react-router-dom";

import "../../assets/css/flexslider.min.css";
import "../../assets/css/line-icons.min.css";
import "../../assets/css/elegant-icons.min.css";
import "../../assets/css/lightbox.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme-1.css";
import "../../assets/css/custom.css";
import "../../assets/css/font-cardo.css";
import DefaultLayout from "../../layouts/DefaultLayout";

const ProccessComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <DefaultLayout>
        <div className="main-container">
          {/* Product Section */}
          <section className="product-right wood-divider">
            <div className="background-image-holder" style={{ width: "100%" }}>
              <img
                className="background-image"
                alt="Background Image"
                src={proccessImage}
              />
            </div>
            <div className="container align-vertical">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="text-white">
                    Adipisci velit sed quia non numquam eius modi tempora
                    incidunt labore dolore.
                  </h1>
                  <p className="text-white lead">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labor. Et harum quidem rerum.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Selector Section */}
          <section className="feature-selector">
            <div className="container">
              <div className="row">
                <ul className="selector-tabs clearfix">
                  <li
                    className={`clearfix text-primary col-md-3 col-sm-6 ${
                      activeTab === 1 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    <span>1. Lorem Ipsum</span>
                  </li>
                  <li
                    className={`clearfix text-primary col-md-3 col-sm-6 ${
                      activeTab === 2 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    <span>2. Nemo enim ipsam</span>
                  </li>
                  <li
                    className={`clearfix text-primary col-md-3 col-sm-6 ${
                      activeTab === 3 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    <span>3. Neque quisquam</span>
                  </li>
                  <li
                    className={`clearfix text-primary col-md-3 col-sm-6 ${
                      activeTab === 4 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(4)}
                  >
                    <span>4. Dolore magnam aliquam</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container">
              <div className="selector-content">
                {activeTab === 1 && (
                  <div className="clearfix active">
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="lead">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem.
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="lead">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="clearfix">
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <h1>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="lead">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem.
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="lead">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem. Ut enim ad minima
                          veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam, nisi ut aliquid ex ea commodi
                          consequatur.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="clearfix">
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <h1>
                          Enim minima veniam quis nostrum exercitationem ullam
                          corporis
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="lead">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem.
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="lead">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 4 && (
                  <div className="clearfix">
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <h1>
                          Duis aute irure dolor reprehenderit voluptate velit
                          cillum
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="lead">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem.
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="lead">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem. Ut enim ad minima
                          veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam, nisi ut aliquid ex ea commodi
                          consequatur.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default ProccessComponent;
