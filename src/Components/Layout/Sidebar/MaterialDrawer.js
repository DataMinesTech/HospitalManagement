import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ReorderIcon from "@material-ui/icons/Reorder";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const MaterialDrawer = ({ isOpen, setIsOpen }) => {
  const closeDrawer = () => {
    setIsOpen(false);
  };

  const styles = {
    sideNav: {
      marginTop: "-60px",
      zIndex: 3,
      marginLeft: "0px",
      position: "fixed",
    },
    link: {
      color: "#000",
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Drawer
        anchor="left"
        variant="temporary"
        open={isOpen}
        onClose={closeDrawer}
      >
        {SidebarData.map((data) => {
          console.log("pdppdwad", data);

          return (
            <Link to={data.link} style={styles.link}>
              <List>
                <ListItem button key={data.title}>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.title} />
                </ListItem>
              </List>
            </Link>
          );
        })}
      </Drawer>
    </div>
  );
};

export default MaterialDrawer;
