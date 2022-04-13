import React, { useState } from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/userActions";

const Header = ({ isOpen, setIsOpen, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div class=" bg-light">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
        <div class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          {user ? (
            <>
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
            </>
          ) : (
            <></>
          )}
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link href="/newpatient" class="nav-link px-2 link-secondary">
              Patient Registration
            </Link>
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
          {user ? (
            <>
              <button
                type="button"
                onClick={onLogout}
                class="btn btn-outline-primary me-2"
              >
                Logout
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
