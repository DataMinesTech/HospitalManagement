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
import PatientSidebar from "./PatientSidebar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch, useSelector } from "react-redux";

const MaterialDrawer = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  console.log("user patient", user);

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
    <>
      {loading ? (
        <>Loading ... </>
      ) : (
        <div>
          <Drawer
            anchor="left"
            variant="temporary"
            open={isOpen}
            onClose={closeDrawer}
          >
            {user.userRole !== "admin" ? (
              <>
                {PatientSidebar.map((data) => {
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
              </>
            ) : (
              <>
                {SidebarData.map((data) => {
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
              </>
            )}
          </Drawer>
        </div>
      )}
    </>
  );
};

export default MaterialDrawer;
