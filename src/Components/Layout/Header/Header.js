import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header id="menu-jk">
        <div id="nav-head" class="header-nav">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-3 no-padding col-sm-12 nav-img">
                <img src="assets/images/logo.jpg" alt="" />
                <a data-toggle="collapse" data-target="#menu" href="#menu"></a>
              </div>
              <div
                id="menu"
                class="col-lg-8 col-md-9 d-none d-md-block nav-item"
              >
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#about_us">About Us</a>
                  </li>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="#contact_us">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-2 d-none d-lg-block appoint">
                <button class="btn btn-success">Book an Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
