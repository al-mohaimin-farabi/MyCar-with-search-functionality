import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <>
      <footer className="new_footer_areNavLink bg_color mt-5">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft custom-4"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <Nav.Link as={HashLink} to="/">
                        Company
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={HashLink} to="/">
                        Android App
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={HashLink} to="/">
                        ios App
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={HashLink} to="/">
                        Desktop
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft custom-5"
                  data-wow-delay="0.6s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <Nav.Link as={HashLink} to="/">
                        FAQ
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={HashLink} to="/">
                        Term &amp; conditions
                      </Nav.Link>
                    </li>

                    <li>
                      <Nav.Link as={HashLink} to="/">
                        Support Policy
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={HashLink} to="/">
                        Privacy
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft custom-6"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon d-flex">
                    <Nav.Link as={HashLink} to="/">
                      <span className="bi bi-facebook "></span>
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/">
                      <span className="bi bi-twitter"></span>
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/">
                      <span className="bi bi-linkedin"></span>
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/">
                      <span className="bi bi-pinterest"></span>
                    </Nav.Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-sm-12">
                <p className="mb-0 f_400">
                  © My Car Inc.. 2021 All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
