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
      route: 'wine-collection/mildiani'
    },
    {
      image: batonoLogo,
      brand: {
        id: 124,
        name: "BATONO",
      },
      route: 'wine-collection/batono'
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

          {/* Text Section */}
          <section className="duplicatable-content pure-text">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h1>Which one fits to you?</h1>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Nemo enim ipsam voluptatem",
                    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
                  },
                  {
                    title: "Dolorem ipsum quia dolor sit amet",
                    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
                  },
                  {
                    title: "Fugiat quo voluptas nulla pariatur",
                    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
                  },
                ].map((item, index) => (
                  <div className="col-sm-4" key={index}>
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="testimonials-slider text-center">
                    <ul className="slides">
                      {[
                        {
                          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                          author: "John Doe",
                        },
                        {
                          text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
                          author: "Jessica Marks",
                        },
                        {
                          text: "Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
                          author: "Steven Hanson",
                        },
                      ].map((item, index) => (
                        <li key={index}>
                          <p className="text-white lead">{item.text}</p>
                          <span className="author text-white">
                            {item.author}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default OurWines;
