import {
  Box,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import "./Sidebar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import PatientSidebar from "./PatientSidebar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../actions/userActions";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const MaterialDrawer = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const [open, setOpen] = React.useState("");

  const handleClick = (e) => {
    e === open ? setOpen("") : setOpen(e);
    // setOpen(open);
  };

  const drawerWidth = 250;
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  console.log("user patient", user);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const styles = {
    link: {
      color: "#fff",
      textDecoration: "none",
    },
    item: {
      padding: "15px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    },
    icon: {
      minWidth: "40px",
    },
  };

  return (
    <>
      {loading ? (
        <>Loading ... </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#4988FC",
            },
          }}
        >
          <CssBaseline />
          <Toolbar />
          <Box
            sx={{
              paddingTop: "40px",
              paddingBottom: "40px",
              overflow: "auto",
              "&:hover": {
                overflow: "auto",
              },
              "&::-webkit-scrollbar": {
                width: 7,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 2,
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.29)",
              },
            }}
          >
            {user?.userRole !== "admin" ? (
              <>
                {PatientSidebar.map((data) => {
                  return (
                    <Link to={data.link} style={styles.link}>
                      <List>
                        <ListItem button key={data.title}>
                          <ListItemIcon>{data.icon}</ListItemIcon>
                          <ListItemText primary={data.title} />
                          {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItem sx={{ pl: 4 }}>
                              <ListItemText
                                sx={{ fontSize: "14px" }}
                                primary="Starred"
                              />
                            </ListItem>
                          </List>
                        </Collapse>
                      </List>
                    </Link>
                  );
                })}
              </>
            ) : (
              <>
                {SidebarData.map((data, index) => {
                  return (
                    <Link key={index} to={data.link} style={styles.link}>
                      <List key={index} disablePadding>
                        {data.item != null ? (
                          <ListItem
                            onClick={() => handleClick(data.id)}
                            style={styles.item}
                            button
                            key={data.id}
                          >
                            <ListItemIcon style={styles.icon}>
                              <img
                                src={data.icon}
                                alt={data.title}
                                width={22}
                              />
                            </ListItemIcon>
                            <ListItemText
                              sx={{ fontSize: "14px" }}
                              primary={data.title}
                            />
                            {data.item ? (
                              open === data.id ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )
                            ) : null}
                          </ListItem>
                        ) : (
                          <ListItem key={index} style={styles.item} button>
                            <ListItemIcon style={styles.icon}>
                              <img
                                src={data.icon}
                                alt={data.title}
                                width={22}
                              />
                            </ListItemIcon>
                            <ListItemText primary={data.title} />
                          </ListItem>
                        )}
                        {data.item &&
                          data.item.map((item, index) => (
                            <Collapse
                              key={data.id}
                              in={open === data.id}
                              timeout="auto"
                              unmountOnExit
                            >
                              <Link
                                key={index}
                                to={item.link}
                                style={styles.link}
                              >
                                <List sx={{ pl: 5 }} key={index} disablePadding>
                                  <ListItem
                                    key={index}
                                    style={styles.item}
                                    button
                                    sx={{ pl: 4 }}
                                  >
                                    <ListItemText
                                      sx={{
                                        fontSize: "14px",
                                        fontFamily: "Nunito, sans-serif",
                                      }}
                                      primary={item.title}
                                    />
                                  </ListItem>
                                </List>
                              </Link>
                            </Collapse>
                          ))}
                      </List>
                    </Link>
                  );
                })}
              </>
            )}
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default MaterialDrawer;
