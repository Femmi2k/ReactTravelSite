import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join The Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-heading">
          You can unsubscribe any time
        </p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="footer-input"
            ></input>
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">Contact</Link>
            <Link to="/sign-up">Support</Link>
            <Link to="/sign-up">Destinations</Link>
            <Link to="/sign-up">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/sign-up">Submit Bideos</Link>
            <Link to="/sign-up">Ambassadors</Link>
            <Link to="/sign-up">Agency</Link>
            <Link to="/sign-up">Influence</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">Instagram</Link>
            <Link to="/sign-up">Facebook</Link>
            <Link to="/sign-up">Youtube</Link>
            <Link to="/sign-up">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRAVISM <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">TRAVISM 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/home"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/home"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/home"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/home"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
