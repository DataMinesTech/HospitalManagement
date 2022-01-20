import React, { useState } from "react";
import "./Sidebar.css";
import Drawer from "@mui/material/Drawer";
import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = (props) => {
  console.log("props", props);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MenuIcon />
        </button>
      </div>
      {isOpen !== true ? (
        <>
          <div className="sidebar">
            <a className="" href={props.link}>
              {props.title}
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
