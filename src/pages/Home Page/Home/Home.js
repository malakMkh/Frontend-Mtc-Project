import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../About Us/AboutUs";
import Footer from "../About Us/Footer";
export default function Home() {
  return (
    <div>
      <div>
        {/* Mirrored from www.devsnews.com/template/micoach/micoach/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 13 Feb 2023 20:49:22 GMT */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>MiCoach - Online Courses HTML5 Template</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.html" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="homeassets/img/favicon.ico"
        />
        {/* Place favicon.ico in the root directory */}
        {/* CSS here */}
        <link rel="stylesheet" href="homeassets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="homeassets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="homeassets/css/animate.min.css" />
        <link rel="stylesheet" href="homeassets/css/magnific-popup.css" />
        <link rel="stylesheet" href="homeassets/css/nice-select.css" />
        <link rel="stylesheet" href="homeassets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="homeassets/css/themify-icons.css" />
        <link rel="stylesheet" href="homeassets/css/metisMenu.css" />
        <link rel="stylesheet" href="homeassets/css/meanmenu.css" />
        <link rel="stylesheet" href="homeassets/css/slick.css" />
        <link rel="stylesheet" href="homeassets/css/main.css" />
        {/* header-start */}
        <header className="header-transparent">
          <div
            id="sticky-header"
            className="main-menu-area menu-padding pl-55 pr-55"
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-7 col-md-6 col-8">
                  <div className="logo">
                    <a href="index.html">
                      <img src="homeassets/img/logo/logo.png" alt />
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                  <div className="main-menu text-left ml-15">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="active">
                          <a href="index.html">
                            Home <i className="far fa-angle-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Cours <i className="far fa-angle-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Instructeurs <i className="far fa-angle-down" />
                          </a>
                        </li>

                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-md-6 col-4">
                  <div className="header-right d-sm-flex align-items-center justify-content-end">
                    <div className="header-icon d-none d-md-inline-block"></div>
                    <div className="header-sing d-none d-md-inline-block"></div>
                    <div>
                      {" "}
                      <Link to="/Signin">Sign In</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-start */}

        <main>
          {/* hero-area start */}
          <section className="hero-area pos-rel">
            <div className="slider-img d-none d-sm-block">
              <img
                className="img-fluid"
                src="homeassets/img/slider/01.png"
                alt
              />
            </div>
            <div className="hero-slider">
              <div
                className="single-slider slider-height d-flex align-items-center"
                data-background="homeassets/img/slider/01.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-9">
                      <div className="hero-content mt-80">
                        <div className="hero-slider-caption">
                          <span data-animation="fadeInUp" data-delay=".5s">
                            <i className="fal fa-ellipsis-h" />
                            Bienvenue à notre platforme
                          </span>
                          <h2
                            className="mb-45"
                            data-animation="fadeInUp"
                            data-delay=".7s"
                          >
                            C'est l'apprentissage qui vient à vous
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hero-area end */}

          {/* course-cat-area-start */}
          <div className="course-cat-area pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                  <div className="section-title text-center mb-60">
                    <span>
                      <i className="fal fa-ellipsis-h" /> Nos Fonctionnalités{" "}
                      <i className="fal fa-ellipsis-h" />
                    </span>
                    <h2>Catégories des Cours </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/01.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Graphics Design (UI)</a>
                      </h4>
                      <span>
                        {" "}
                        Apprenez les principes de la conception Graphique{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/02.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Business </a>
                      </h4>
                      <span>
                        Un cours complet comprenant les fondamentaux des
                        affaires, le leadership, le marketing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/03.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Informatique</a>
                      </h4>
                      <span>maîtriser les sciences informatiques</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/04.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">
                          Productivité Bureautique
                        </a>
                      </h4>
                      <span>Gagnez du temps, améliorez la productivité</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/05.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Photographie</a>
                      </h4>
                      <span>
                        approfondir votre apprentissage sur la Photographie
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/06.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="#">Santé et Bien être</a>
                      </h4>
                      <span>
                        Permettre à tous de vivre en bonne santé et promouvoir
                        le bien-être de tous à tout âge{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/07.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Marketing</a>
                      </h4>
                      <span>
                        {" "}
                        Développer votre activité en devenissant un expert en
                        marketing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/08.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Développement</a>
                      </h4>
                      <span>
                        Apprendre à coder est le véritable super pouvoir du 21e
                        siècle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* course-cat-area-end */}
          {/* brand-area-start */}
          <div className="brand-area theme-bg pb-65 pt-65">
            <div className="container">
              <div className="row brand-active">
                <div className="col-xl-2 text-center">
                  <div className="single-brand text-center">
                    <img src="homeassets/img/brand/01.png" alt />
                  </div>
                </div>
                <div className="col-xl-2 text-center">
                  <div className="single-brand">
                    <img src="homeassets/img/brand/02.png" alt />
                  </div>
                </div>
                <div className="col-xl-2 text-center">
                  <div className="single-brand">
                    <img src="homeassets/img/brand/03.png" alt />
                  </div>
                </div>
                <div className="col-xl-2 text-center">
                  <div className="single-brand">
                    <img src="homeassets/img/brand/04.png" alt />
                  </div>
                </div>
                <div className="col-xl-2 text-center">
                  <div className="single-brand">
                    <img src="homeassets/img/brand/05.png" alt />
                  </div>
                </div>
                <div className="col-xl-2 text-center">
                  <div className="single-brand">
                    <img src="homeassets/img/brand/01.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* brand-area-end */}
        </main>
        {/* JS here */}
        <script src="homeassets/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="homeassets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="homeassets/js/popper.min.js"></script>
        <script src="homeassets/js/bootstrap.min.js"></script>
        <script src="homeassets/js/owl.carousel.min.js"></script>
        <script src="homeassets/js/isotope.pkgd.min.js"></script>
        <script src="homeassets/js/slick.min.js"></script>
        <script src="homeassets/js/metisMenu.min.js"></script>
        <script src="homeassets/js/jquery.meanmenu.min.js"></script>
        <script src="homeassets/js/ajax-form.js"></script>
        <script src="homeassets/js/wow.min.js"></script>
        <script src="homeassets/js/waypoints.min.js"></script>
        <script src="homeassets/js/jquery.counterup.min.js"></script>
        <script src="homeassets/js/jquery.scrollUp.min.js"></script>
        <script src="homeassets/js/imagesloaded.pkgd.min.js"></script>
        <script src="homeassets/js/jquery.magnific-popup.min.js"></script>
        <script src="homeassets/js/jquery.nice-select.js"></script>
        <script src="homeassets/js/jquery.easypiechart.js"></script>
        <script src="homeassets/js/main.js"></script>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}
