// components/Footer.js
import React, { useContext } from 'react';

import MyContext from "../config/contextFile"

import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram,FaGoogle,FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const {isMobile} = useContext(MyContext)
  return (
    <section>
      <div className="px-4 py-4 d-flex flex-wrap justify-content-around bg-theme text-white fw-bold">
        <div className={`${isMobile ? "text-center" : ""}`}>
          <h4 className="company-text text-center">
          We create with the heart & build with the mind
          </h4>
          <br />
          <h3 style={{
            fontSize:isMobile?20:31
          }}>
            Looking for a quality construction company?
          </h3>
        </div>
        <div className='d-flex align-items-center mt-2'>
          <button className={`btn-footer-quote ${isMobile?"p-3":"px-5 py-4"} rounded-2 border-0 text-center fw-bold font-Raleway`}>
            GET A QUOTE
          </button>
        </div>
      </div>
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <FaLinkedin />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="#" className="me-4 text-reset">
            <TiSocialFacebook />
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>
                Protech
              </h6>
              <p>
                Protech was formed with one visionary mind set to allow property owners, developers, architects and general contractors to deliver a competitive edge for their projects.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p><a href="#" className="text-reset">Home</a></p>
              <p><a href="#" className="text-reset">About us</a></p>
              <p><a href="#" className="text-reset">Services</a></p>
              <p><a href="#" className="text-reset">Site Works</a></p>
              <p><a href="#" className="text-reset">Contact us</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p><a href="#" className="text-reset">Pricing</a></p>
              <p><a href="#" className="text-reset">Settings</a></p>
              <p><a href="#" className="text-reset">Orders</a></p>
              <p><a href="#" className="text-reset">Help</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope me-3"></i>info@example.com</p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2021 Copyright: <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
    </section>
  );
};

export default Footer;