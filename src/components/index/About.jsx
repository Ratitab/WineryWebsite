import React from 'react';
import '../../assets/css/flexslider.min.css';
import '../../assets/css/line-icons.min.css';
import '../../assets/css/elegant-icons.min.css';
import '../../assets/css/lightbox.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/theme-1.css';
import '../../assets/css/custom.css';
import '../../assets/css/font-cardo.css';
import logo from "../../assets/img/logotype_dark.png"
import backgroundImageAbout from "../../assets/img/side_1.jpg"
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const AboutComponent = () => {
    return (
        <div>
            <DefaultLayout>
            <div className="main-container">
            <section className="pure-text-centered">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center mt-100" style={{ marginTop: '100px' }}>
                            <h1><strong>History of our Winery</strong></h1>
                            <p className="lead">
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="side-image clearfix">
                <div className="image-container col-md-5 col-sm-4 pull-left">
                    <div className="background-image-holder">
                        <img className="background-image" alt="Background" src={backgroundImageAbout} />
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-6 col-sm-7 col-sm-offset-5 content clearfix">
                            <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>

                            <div className="row">
                                <div className="col-md-6 no-pad-left">
                                    <div className="feature feature-icon-left">
                                        <div className="icon-holder">
                                            <i className="icon icon-trophy"></i>
                                        </div>
                                        <div className="feature-text">
                                            <h6>Award Winning</h6>
                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 no-pad-left">
                                    <div className="feature feature-icon-left">
                                        <div className="icon-holder">
                                            <i className="icon icon-beaker"></i>
                                        </div>
                                        <div className="feature-text">
                                            <h6>High Quality Ingredients</h6>
                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 no-pad-left">
                                    <div className="feature feature-icon-left">
                                        <div className="icon-holder">
                                            <i className="icon icon-wine"></i>
                                        </div>
                                        <div className="feature-text">
                                            <h6>Great Taste</h6>
                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 no-pad-left">
                                    <div className="feature feature-icon-left">
                                        <div className="icon-holder">
                                            <i className="icon icon-globe"></i>
                                        </div>
                                        <div className="feature-text">
                                            <h6>Well Known Around The World</h6>
                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
            <section className="text-banner">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="center-block">Neque porro quisquam qui dolorem ipsum</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                            <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <a href="process.html" className="btn btn-primary">See the process</a>
                            <a href="wines.html" className="btn btn-primary btn-text-only">See our wines</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            </DefaultLayout>
    </div>
    )
}

export default AboutComponent