import React, { useState } from "react";
import "./Sidebar.css";
import Drawer from "@mui/material/Drawer";
import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { PatientSidebarData } from "./PatientSidebarData";

const Sidebar = ({ link, title, isOpen, setActive, isActive }) => {
  console.log("sidebar button", isActive);

  return (
    <div>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light "
        style={{ width: "280px" }}
      >
        <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32"></svg>
          <span class="fs-4"> Treatment Details</span>
        </a>
        <hr />
        {PatientSidebarData.map((data) => {
          return (
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <button
                  onClick={() => {
                    setActive(`${data.title}`);
                  }}
                  className="sidebar-row"
                  id={isActive ? "active" : " "}
                  to={data.link}
                >
                  {data.title}
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
