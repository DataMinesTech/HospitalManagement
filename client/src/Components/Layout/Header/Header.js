import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <div class=" bg-light">
      {/* <header id="menu-jk"> */}
      {/* <div id="nav-head" class="header-nav">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-3 no-padding col-sm-12 nav-img">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  data-toggle="collapse"
                  data-target="#menu"
                  href="#menu"
                >
                  <MenuIcon />
                </button>
              </div>
              <div
                id="menu"
                class="col-lg-8 col-md-9 d-none d-md-block nav-item"
              >
                <ul>
                  <li>
                    <Link to="/home">
                      <LocalHospitalIcon /> Hospital
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Logout</Link>
                  </li>
                  <li>
                    <Link to="/refertodoctor">Consult a doctor</Link>
                  </li>
                </ul>
              </div>
              <div class="col-sm-2 d-none d-lg-block appoint">
                <Link to="/newpatient">
                  <button class="btn btn-success">Book an Appointment</button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}

      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
        <div class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            data-toggle="collapse"
            data-target="#menu"
            href="#menu"
          >
            <MenuIcon />
          </button>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" class="nav-link px-2 link-secondary">
              Home
            </a>
          </li>

          <li>
            <Link to="/diagnosis" class="nav-link px-2 link-dark">
              Diagnosis
            </Link>
          </li>
          <li>
            <Link to="/refertodoctor" class="nav-link px-2 link-dark">
              Consult A Doctor
            </Link>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">
            Book an Appointment
          </button>
          {/* <button type="button" class="btn btn-primary">
            Sign-up
          </button> */}
        </div>
      </header>
      {/* </header> */}
    </div>
  );
};

export default Header;
