import React, { useState } from "react";
import "./Sidebar.css";
import Drawer from "@mui/material/Drawer";
import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ link, title, isOpen }) => {
  return (
    <div>
      <div>
        <button></button>
      </div>
      {isOpen !== false ? (
        <>
          <div className="sidebar">
            <a className="" href={link}>
              {title}
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
    // <>
    //   <div className="sidebar">
    //     <Button
    //       onClick={() => {
    //         setIsOpen(!isOpen);
    //       }}
    //     >
    //       <MenuIcon />
    //     </Button>

    //     <Drawer
    //       // anchor={anchor}
    //       variant="permanent"
    //       anchor="left"
    //     >
    //       <Typography>{props.title}</Typography>
    //     </Drawer>
    //   </div>
    // </>
  );
};

export default Sidebar;
