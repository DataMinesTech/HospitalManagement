import React, { useState } from "react";
import "./Sidebar.css";
import Drawer from "@mui/material/Drawer";
import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { PatientSidebarData } from "./PatientSidebarData";

const Sidebar = ({ link, title, isOpen }) => {
  return (
    <div>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32"></svg>
          <span class="fs-4">Sidebar</span>
        </a>
        <hr />
        {PatientSidebarData.map((data) => {
          return (
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <Link
                  className="row"
                  id={window.location.pathname === data.link ? "active" : " "}
                  to={data.link}
                >
                  {data.title}
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
