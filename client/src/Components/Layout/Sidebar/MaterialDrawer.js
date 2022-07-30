import {
  Avatar,
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
import EditIcon from "../../../images/icons/edit-icon.svg";
import Logo from "../../../images/Datamines-logo.svg";

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

  const drawerWidth = 270;
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  console.log("user patient", user);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const styles = {
    link: {
      color: "#000000",
      textDecoration: "none",
    },
    item: {
      padding: "14px 24px",
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
        user?.userRole === "admin" && (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                borderRight: "none",
                backgroundColor: "#FFFFFF",
                boxShadow: " 10px 0px 10px rgba(0, 0, 0, 0.02)",
              },
            }}
          >
            <CssBaseline />
            <div className="flex flex-col pb-10 w-full bg-gradient-to-b from-red-400 to-red-300 text-white">
              <div className="flex justify-between items-center py-5 px-4">
                {/* <div className="text-md font-bold">My Profile</div> */}
                <img src={Logo} alt={"edit profile"} width={100} />
                <IconButton
                  sx={{
                    backgroundColor: "#ffffff",
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                  onClick={closeDrawer}
                >
                  <img
                    className="p-[2px]"
                    src={EditIcon}
                    alt={"edit profile"}
                    width={24}
                  />
                </IconButton>
              </div>
              <div className="flex flex-col items-center py-5">
                <div className="flex justify-center pb-3">
                  <Avatar
                    className="border-2 border-white rounded-full"
                    sx={{ width: 60, height: 60 }}
                    alt="Remy Sharp"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  />
                </div>
                <div className="text-lg font-bold">Dayitava Upadhyay</div>
                <div className="text-md font-normal">Premium member</div>
              </div>
            </div>
            <Box
              sx={{
                paddingTop: "20px",
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
                            <img src={data.icon} alt={data.title} width={22} />
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
                            <img src={data.icon} alt={data.title} width={22} />
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
            </Box>
          </Drawer>
        )
      )}
    </>
  );
};

export default MaterialDrawer;
